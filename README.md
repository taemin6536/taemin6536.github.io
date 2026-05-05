# taemin6536.github.io

Backend Engineer Portfolio — Taemin Kim

## Files
- `index.html` — entry point (single-page React portfolio)
- `data.jsx` — all content (KO/EN). Edit here to update the site
- `tistory.jsx` — Tistory RSS fetcher
- `portfolio-readme.css` — styles

## Deploy (옵션 A — 기존 index.html 교체)

기존 레포에서 `README.md`만 남기고 새로 덮어쓰기:

```bash
git clone https://github.com/taemin6536/taemin6536.github.io.git
cd taemin6536.github.io

# 기존 사이트 파일 제거 (README.md만 남김)
git rm index.html favicon.ico
git rm -r assets

# 새 포트폴리오 파일 복사 (이 폴더 내용 전체)
cp -r /path/to/deploy/* .

git add .
git commit -m "feat: replace with new portfolio"
git push origin main
```

또는 GitHub 웹 UI에서:
1. 레포 페이지 → 기존 `index.html`, `favicon.ico`, `assets/` 삭제
2. "Add file → Upload files"로 이 폴더의 4개 파일 업로드
3. Commit

배포 후 `https://taemin6536.github.io/` 에서 확인 (Pages 빌드 1~2분 소요).

## Local preview

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

(Tistory RSS는 외부 프록시를 거치므로 인터넷 필요)
