// Tistory RSS fetcher
// Tistory exposes /rss for every blog. We fetch via a CORS-friendly proxy
// (rss2json) and fall back gracefully on failure.
async function fetchTistoryRSS(blogUrl) {
  const cleanUrl = blogUrl.replace(/\/$/, '');
  const rssUrl = `${cleanUrl}/rss`;
  const proxied = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  try {
    const res = await fetch(proxied);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.status !== 'ok') throw new Error(data.message || 'rss error');
    return (data.items || []).slice(0, 12).map(it => ({
      title: it.title,
      url: it.link,
      date: (it.pubDate || '').slice(0, 10).replace(/-/g, '.'),
      excerpt: stripHtml(it.description || '').slice(0, 140),
      categories: it.categories || []
    }));
  } catch (e) {
    console.warn('[Tistory RSS]', e);
    return null;
  }
}

function stripHtml(s) {
  if (!s) return '';
  const tmp = document.createElement('div');
  tmp.innerHTML = s;
  return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
}

window.fetchTistoryRSS = fetchTistoryRSS;
