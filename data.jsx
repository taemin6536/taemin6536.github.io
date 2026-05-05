// Real portfolio content for 김태민 (Taemin Kim)
// Sourced from his actual resume.

const PORTFOLIO_DATA = {
  ko: {
    name: "김태민",
    nameEn: "Taemin Kim",
    handle: "taemin6536",
    role: "Backend Engineer",
    yearsExp: 4,
    tagline: "'어떤 기술을 쓰는가'보다 '왜 이 기술을 써야 하는가'를 먼저 묻습니다.",
    subTagline: "비즈니스 맥락에 맞는 최적의 설계로 가치를 만드는 백엔드 개발자.",
    location: "수도권 · 원격 OK",
    status: "재직 중 · 좋은 제안 검토 중",
    email: "ktm6536@gmail.com",
    github: "github.com/taemin6536",
    githubUrl: "https://github.com/taemin6536",
    linkedin: "linkedin.com/in/태민-김",
    linkedinUrl: "https://www.linkedin.com/in/%ED%83%9C%EB%AF%BC-%EA%B9%80-085b91342/",
    blog: "xoals6536.tistory.com",
    blogUrl: "https://xoals6536.tistory.com/",

    about: [
      "QA로 커리어를 시작해 '이 결함이 어떤 비즈니스 손실을 초래할까'를 먼저 생각하는 습관을 길렀습니다. 백엔드 개발자로 전향한 후, 그 관점은 가장 강력한 차별점이 되었습니다.",
      "기술은 비즈니스 문제를 푸는 도구라고 믿습니다. 유행하는 기술을 무분별하게 도입하기보다, 현재 요구사항과 미래 확장성을 저울질해 가장 적절한 아키텍처를 선택합니다.",
      "오버엔지니어링을 경계하고, 모든 기술 결정의 중심에 비즈니스 가치를 둡니다. 팀과 함께 성장하며 비즈니스 성공에 기여하고 싶습니다."
    ],

    stats: [
      { label: "Years", value: "4", note: "QA 7M + BE 3Y" },
      { label: "Companies", value: "3" },
      { label: "Failure Rate", value: "72→0%", note: "Kiring 동시성 개선" },
      { label: "P95 Latency", value: "−75%", note: "1s+ → 89ms" }
    ],

    headlines: [
      { metric: "72% → 0%", label: "요청 실패율 개선", detail: "Kiring 좋아요 동시성 · Redis + Async Event" },
      { metric: "20%↑", label: "신규 기능 개발 속도", detail: "20K LoC 레거시 리팩토링" },
      { metric: "70%↓", label: "장애 분석 시간 단축", detail: "Zabbix 선제 모니터링 도입" },
      { metric: "8h", label: "RCE 취약점 전사 대응", detail: "CVE-2023-46604 · 무중단" }
    ],

    experience: [
      {
        company: "(주)키트웍스",
        type: "전임연구원 · Backend",
        period: "2024.11 — 현재",
        domain: "현대자동차 이커머스 (캐스퍼)",
        bullets: [
          {
            title: "API 응답 지연 해결로 사용자 이탈 방지",
            problem: "피크 타임 시 주요 상품 조회 API의 응답이 지연됨. 원인 분석 결과 O(N²) 시간 복잡도 로직이 데이터 증가에 따라 성능을 급격히 저하시킴.",
            solution: "단순 쿼리 튜닝을 넘어 알고리즘을 재설계. Map으로 중첩 반복문을 제거하고 Set으로 중복 검증 로직을 최적화하여 전체 로직을 O(N)으로 개선.",
            impact: "신차 출시 프로모션 트래픽 급증 시 발생할 수 있었던 잠재적 매출 손실 방지."
          },
          {
            title: "레거시 리팩토링으로 신규 기능 개발 속도 20% 향상",
            problem: "약 20,000 라인의 거대한 서비스 클래스. 코드 파악이 어렵고 신규 기능 추가 시 사이드 이펙트 예측 불가능.",
            solution: "SOLID를 맹목적으로 적용하기보다 변경이 잦은 핵심 도메인에 집중. 메소드 분리, 코드 깊이 축소, final 키워드로 불변성 확보를 점진 적용.",
            impact: "신규 기능 개발 속도 ~20% 향상, 버그 수정 시간 단축, 팀 전체 개발 생산성 개선."
          },
          {
            title: "예약 시스템 자동화로 관리자 운영 부담 100% 해소",
            problem: "매일 자정마다 마케팅 배너 수동 교체 + 예약 데이터 검증 야간 업무. 관리자 부담 + 휴먼 에러 위험.",
            solution: "Spring Batch 기반 예약 시스템을 신규 개발하여 배너 교체와 데이터 검증을 완전 자동화.",
            impact: "야간 수동 업무 주 2h → 0h, 연간 약 104h 인건비 절감, 마케팅 이벤트 안정성 100% 확보."
          },
          {
            title: "적극적인 커뮤니케이션으로 협업 병목 해결",
            problem: "프로젝트 규모 확대로 FE·BE·기획 간 API 명세 불일치, 코드 리뷰 대기 시간 증가.",
            solution: "반나절 내 피드백 완료를 원칙으로 삼고 협업 툴로 즉시 응답.",
            impact: "동료 FE 개발자로부터 \"가장 피드백이 빠르고 협업하기 편한 개발자\" 평가."
          }
        ],
        stack: ["Java", "Spring Boot", "Spring Batch", "MySQL", "Redis", "Linux"]
      },
      {
        company: "(주)누리플렉스",
        type: "사원 · R&D센터 Backend",
        period: "2022.11 — 2024.10",
        domain: "MG 산업단지 플랫폼 · 말레이시아 BEMS",
        bullets: [
          {
            title: "MSA 기반 관제 플랫폼 백엔드 설계",
            problem: "분산된 다수 산업단지의 전력 사용량을 안정적으로 관제할 확장성 있는 구조 필요.",
            solution: "무조건적 MSA 도입 대신 산업단지별 독립성을 분석. Spring Cloud 기반 MSA를 최소 단위로 설계해 오버엔지니어링 회피와 미래 확장성 확보를 동시에 달성.",
            impact: "대용량 트래픽·데이터를 안정적으로 처리할 확장 가능한 시스템 기반 마련, 핵심 API 응답 속도 개선."
          },
          {
            title: "실시간 IoT 데이터 처리 파이프라인 구축",
            problem: "2초 단위 다수 장비 데이터 끊김 없는 실시간 처리 필요. 고가 실물 장비 없이는 테스트 불가.",
            solution: "Modbus 프로토콜 + ActiveMQ + WebSocket으로 실시간 파이프라인 구축. 실제 장비 통신을 시뮬레이션하는 자체 Mock 서버를 제작.",
            impact: "데이터 유실 0의 안정적 파이프라인. Mock 환경으로 개발/디버깅 시간 50% 단축, 안정적 최종 오픈에 결정적 기여."
          },
          {
            title: "말레이시아 BEMS — 해외 사업장 맞춤 원격 제어",
            problem: "말레이시아 현지는 네트워크 인프라 불안정 + 유동 IP 환경. 일반적인 원격 모니터링 적용 불가.",
            solution: "유료 DDNS로 유동 IP 문제 해결. Heartbeat 체크 + 데이터 재전송 로직을 포함한 경량 API 자체 개발.",
            impact: "현지 엔지니어 현장 출동 횟수 30%↑ 감소, 운영 효율 개선."
          },
          {
            title: "Zabbix 선제 모니터링 시스템 구축",
            problem: "운영 서버 증가로 장애 시 일일이 SSH 접속해 로그 확인하는 수동 대응의 한계.",
            solution: "Zabbix 도입. CPU/Memory/Disk 등 핵심 자원 중앙 모니터링. CPU 80% 초과 시 경고 메일 발송 같은 임계치 기반 자동 트리거 설정.",
            impact: "평균 문제 해결 시간 70% 단축. 반응적 → 선제적 운영 체계로 전환."
          },
          {
            title: "긴급 보안 위기 대응 — CVE-2023-46604",
            problem: "Apache ActiveMQ RCE 치명적 취약점 공개. 랜섬웨어/데이터 유실 위협에 즉시 노출.",
            solution: "원인 신속 분석 → 최신 버전 긴급 패치 + 방화벽 강화. 동일 문제 방지를 위한 단계별 기술 가이드를 작성해 전사 공유.",
            impact: "서비스 중단 없이 8시간 내 모든 운영 서버 보안 위협 제거. 전사 대응 역량 강화."
          }
        ],
        stack: ["Java", "Spring Cloud", "ActiveMQ", "WebSocket", "Modbus", "MySQL", "Linux", "Zabbix"]
      },
      {
        company: "(주)엠에스티씨",
        type: "인턴 · 자동화검증팀 (QA)",
        period: "2021.08 — 2022.02",
        domain: "현대/기아 자동차 AVN 소프트웨어",
        bullets: [
          {
            title: "AVN CAN 통신 검증 및 테스트 자동화",
            problem: "AVN 시스템의 안정적인 CAN 통신 신호 및 데이터 흐름 검증 필요.",
            solution: "효율적인 검증을 위한 신규 테스트 케이스 설계 및 추가, 자동화 스크립트 개발.",
            impact: "사용자 관점에서 코드를 바라보고 장애를 사전에 예측하는 사고방식의 기반."
          }
        ],
        stack: ["Python", "CAN", "Test Automation"]
      }
    ],

    projects: [
      {
        name: "Kiring",
        subtitle: "사내 생활 통합 플랫폼",
        period: "2025.06 — 진행 중",
        team: "4명 (FE 3, BE 1)",
        myRole: "백엔드 100% — End-to-End 오너십",
        users: "사내 재직자 30명 사용 중",
        description: "팀원들의 업무 효율과 즐거운 회사 생활을 돕기 위해 기획된 사내 통합 플랫폼. 위치 기반 맛집 추천·공유, 팀 캘린더(회식·생일·회의), 멤버 간 쪽지 등 파편화된 사내 소통 채널을 하나로 통합.",
        responsibilities: [
          "아키텍처 설계 + 기술 스택 선정",
          "전체 기능 백엔드 개발",
          "CI/CD 파이프라인 구축",
          "AWS 인프라 배포 및 운영",
          "Swagger 명세 + README 아키텍처 문서화"
        ],
        highlights: [
          {
            title: "실시간 '좋아요' 동시성 문제 해결",
            metric: "요청 실패율 72% → 0%, P95 1s+ → 89ms (-75%)",
            problem: "인기 맛집에 동시 '좋아요' 요청이 집중될 경우 DB 쓰기 락 경합 + 커넥션 풀 고갈 예측. k6로 200명 동시 부하 테스트 결과 요청의 72% 실패, P95 1초 초과 확인.",
            solution: "DB 락 대신 '쓰기 경합' 자체를 DB에서 분리. Redis Atomic 연산으로 메모리에서 즉시 처리하여 빠른 응답을 보장하고, 실제 DB 저장은 Spring 비동기 이벤트(@EventListener)로 백그라운드에서 처리.",
            impact: "API 스레드가 DB 작업을 기다리지 않게 하여 커넥션 풀 고갈 원천 차단. 동일 부하 테스트 재실행 결과 실패율 0%, P95 89ms로 약 75% 단축."
          },
          {
            title: "QueryDSL 동적 쿼리 리팩토링",
            metric: "런타임 에러 가능성 차단 + 코드 중복 제거",
            problem: "위치 기반 맛집 검색에서 정렬 조건(거리순/좋아요순 등)이 추가될 때마다 새로운 Native Query 메서드를 만들어야 했음. 코드 중복 + 문자열 쿼리는 컴파일 시점에 오류를 잡을 수 없음.",
            solution: "QueryDSL 도입으로 모든 쿼리를 타입-세이프한 자바 코드로 전환. BooleanExpression + OrderSpecifier를 활용해 단일 동적 쿼리 메서드로 통합.",
            impact: "런타임 에러 가능성 차단, 새로운 검색/정렬 조건 추가 시 기존 코드 수정 없이 확장 가능한 유연한 구조 확보."
          }
        ],
        liveUrl: "https://kiring.vercel.app/",
        repoUrl: "https://github.com/kitworks-kiring",
        stack: ["Java", "Spring Boot", "JPA", "QueryDSL", "Redis", "MySQL", "AWS", "Docker"]
      }
    ],

    stack: {
      Languages: ["Java", "SQL"],
      Frameworks: ["Spring Boot", "Spring Batch", "Spring Cloud", "JPA", "QueryDSL"],
      Database: ["MySQL", "Redis"],
      Messaging: ["ActiveMQ", "WebSocket", "Modbus"],
      Infra: ["AWS", "Docker", "Linux", "CI/CD"],
      Observability: ["Zabbix"],
      Tools: ["k6 (부하 테스트)", "Swagger", "Git"]
    },

    architecture: [
      {
        title: "동시성 — Redis + 비동기 이벤트로 쓰기 락 회피",
        context: "Kiring · 좋아요 기능",
        problem: "DB 쓰기 락 경합과 커넥션 풀 고갈로 200명 동시 부하 시 요청 72% 실패, P95 1초 초과.",
        decision: "DB 비관/낙관 락 대신, 쓰기 경합 자체를 DB에서 분리. Redis Atomic 연산으로 즉시 응답 + Spring @EventListener로 DB 저장은 백그라운드 처리.",
        result: "실패율 0%, P95 89ms (-75%). 커넥션 풀 고갈 원천 차단."
      },
      {
        title: "MSA 도입 — 오버엔지니어링과 확장성 사이의 균형",
        context: "누리플렉스 · MG 산업단지 플랫폼",
        problem: "분산된 다수 산업단지의 전력 관제 시스템. 무조건 MSA를 도입하면 초기 복잡성이 큼.",
        decision: "산업단지별 관제 기능의 독립성이 높다고 판단. Spring Cloud 기반 MSA를 '최소 단위'로 설계해 오버엔지니어링 회피.",
        result: "확장 가능한 시스템 기반 + 핵심 API 응답 속도 개선. 미래 확장성과 현재 단순성 동시 확보."
      },
      {
        title: "알고리즘 재설계 — 쿼리 튜닝 너머 본질",
        context: "키트웍스 · 캐스퍼 상품 조회 API",
        problem: "피크 타임 응답 지연. O(N²) 로직이 데이터 증가에 따라 성능 급락.",
        decision: "쿼리 튜닝에 머무르지 않고 알고리즘 자체를 재설계. Map으로 중첩 반복문 제거, Set으로 중복 검증 최적화.",
        result: "전체 로직 O(N) 개선. 신차 프로모션 트래픽 급증 시 잠재 매출 손실 예방."
      },
      {
        title: "선제 모니터링 — 반응적 운영을 선제적 운영으로",
        context: "누리플렉스 · 운영 인프라",
        problem: "운영 서버 증가로 장애 시 SSH로 일일이 접속해 로그 확인. 문제 해결 시간 지연.",
        decision: "Zabbix 도입. 핵심 자원 중앙 모니터링 + 'CPU 80% 초과 시 경고 메일' 같은 임계치 기반 자동 트리거.",
        result: "평균 문제 해결 시간 70% 단축. 반응적 → 선제적 운영 체계로 전환."
      }
    ],

    // Fallback writings; replaced by Tistory RSS at runtime
    writings: [
      { title: "Tistory 블로그 연동 중...", date: "—", url: "https://xoals6536.tistory.com/" }
    ],

    education: {
      school: "동서울대학교",
      degree: "전문학사 · 컴퓨터공학과",
      period: "2017.03 — 2022.02 (졸업)"
    },

    certs: [
      { name: "정보처리기사", issuer: "한국산업인력공단", date: "2024.06" }
    ],

    values: [
      {
        title: "비즈니스 리스크를 최소화하는 개발자",
        body: "QA로 시작해 '이 결함이 어떤 비즈니스 손실을 초래할까'를 먼저 생각하는 습관을 길렀습니다. 사용자 관점에서 코드를 보고 장애 발생 전 선제 대응합니다."
      },
      {
        title: "가치 창출을 극대화하는 기술",
        body: "기술은 도구입니다. 모든 기술 선택에는 트레이드오프가 있고, 유행보다는 비즈니스 요구와 미래 확장성을 함께 저울질해 가장 적절한 아키텍처를 선택합니다."
      },
      {
        title: "팀 생산성을 높이는 성장",
        body: "비즈니스의 성공은 팀의 역량에 달려있습니다. 기술 스터디를 주도하고 블로그로 경험을 공유하는 이유 — 동료의 성장이 곧 팀의 생산성입니다."
      }
    ],

    nav: {
      about: "소개",
      experience: "경력",
      projects: "프로젝트",
      stack: "기술 스택",
      architecture: "시스템 설계",
      writings: "기술 글",
      education: "교육",
      contact: "연락"
    },

    ui: {
      readMore: "자세히",
      currentlyAt: "재직 중",
      keyImpact: "성과",
      problem: "문제",
      solution: "해결",
      result: "결과",
      context: "맥락",
      decision: "결정",
      live: "라이브",
      repo: "저장소",
      visit: "방문",
      copyEmail: "이메일 복사",
      copied: "복사됨",
      viewBlog: "블로그 전체 보기",
      copyright: "Hand-rolled portfolio · 김태민",
      lastUpdated: "최근 업데이트"
    }
  },

  en: {
    name: "Taemin Kim",
    nameEn: "Taemin Kim",
    handle: "taemin6536",
    role: "Backend Engineer",
    yearsExp: 4,
    tagline: "I ask 'why this technology' before 'which technology'.",
    subTagline: "A backend engineer who creates value through architecture that fits the business context.",
    location: "Seoul Metro · Remote OK",
    status: "Currently employed · Open to great offers",
    email: "ktm6536@gmail.com",
    github: "github.com/taemin6536",
    githubUrl: "https://github.com/taemin6536",
    linkedin: "linkedin.com/in/taemin-kim",
    linkedinUrl: "https://www.linkedin.com/in/%ED%83%9C%EB%AF%BC-%EA%B9%80-085b91342/",
    blog: "xoals6536.tistory.com",
    blogUrl: "https://xoals6536.tistory.com/",

    about: [
      "I started my career in QA, where I built the habit of asking 'what business loss could this defect cause' before anything else. After moving to backend engineering, that lens became my strongest differentiator.",
      "I treat technology as a tool for solving business problems. Rather than chasing trends, I weigh current requirements against future scalability to pick the most appropriate architecture.",
      "I'm wary of over-engineering and place business value at the center of every technical decision. I want to grow with my team and contribute to business success."
    ],

    stats: [
      { label: "Years", value: "4", note: "QA 7M + BE 3Y" },
      { label: "Companies", value: "3" },
      { label: "Failure Rate", value: "72→0%", note: "Kiring concurrency fix" },
      { label: "P95 Latency", value: "−75%", note: "1s+ → 89ms" }
    ],

    headlines: [
      { metric: "72% → 0%", label: "request failure rate", detail: "Kiring concurrency · Redis + async events" },
      { metric: "+20%", label: "feature dev velocity", detail: "20K-LoC legacy refactor" },
      { metric: "−70%", label: "incident triage time", detail: "Zabbix proactive monitoring" },
      { metric: "8h", label: "company-wide RCE response", detail: "CVE-2023-46604 · zero downtime" }
    ],

    experience: [
      {
        company: "Kitworks Inc.",
        type: "Senior Researcher · Backend",
        period: "Nov 2024 — Present",
        domain: "Hyundai Casper E-commerce Platform",
        bullets: [
          {
            title: "Resolved API latency to prevent user churn",
            problem: "Peak-time latency on product-listing API. Root cause: an O(N²) algorithm degrading sharply as data grew.",
            solution: "Went beyond query tuning and redesigned the algorithm itself. Replaced nested loops with Map lookups and de-duped via Set, bringing the whole flow to O(N).",
            impact: "Prevented potential revenue loss during a new-vehicle launch promotion's traffic spike."
          },
          {
            title: "Legacy refactor → +20% feature dev velocity",
            problem: "A ~20,000-line service class. Hard to read, side-effects unpredictable when adding features.",
            solution: "Rather than apply SOLID dogmatically, focused on the high-churn core domain. Incrementally split methods, reduced nesting, and locked invariants with `final`.",
            impact: "~20% faster feature development, shorter bug-fix cycles, team-wide productivity lift."
          },
          {
            title: "Reservation system automation → 100% admin burden eliminated",
            problem: "Daily midnight banner swap + reservation-data validation done manually. Admin burden + human-error risk.",
            solution: "Built a Spring Batch reservation system that auto-swaps banners and validates data at scheduled times.",
            impact: "Manual admin work cut from 2h/week to 0h. Annual savings ~104h. 100% campaign reliability."
          },
          {
            title: "Communication discipline that cleared collaboration bottlenecks",
            problem: "As scope grew, FE/BE/PM API spec drift and code-review backlogs slowed development.",
            solution: "Adopted a personal half-day SLA for feedback and stayed responsive across collaboration tools.",
            impact: "FE peers cited me as 'the engineer with the fastest feedback and easiest to work with'."
          }
        ],
        stack: ["Java", "Spring Boot", "Spring Batch", "MySQL", "Redis", "Linux"]
      },
      {
        company: "Nuriflex",
        type: "Engineer · R&D Center, Backend",
        period: "Nov 2022 — Oct 2024",
        domain: "MG Industrial Complex Platform · Malaysia BEMS",
        bullets: [
          {
            title: "MSA-based monitoring platform — backend design",
            problem: "Needed scalable architecture to monitor power usage across multiple distributed industrial complexes.",
            solution: "Avoided blanket MSA adoption. Judged each complex's monitoring as independent enough to design a *minimal* Spring Cloud MSA — sidestepping over-engineering while preserving future scalability.",
            impact: "Foundation for handling large traffic + data, with improved core-API response speed."
          },
          {
            title: "Real-time IoT data pipeline",
            problem: "2-second-interval real-time data from many devices, with no possibility of testing without expensive hardware.",
            solution: "Modbus + ActiveMQ + WebSocket pipeline. Built a self-made Mock server simulating real-device communication to unblock dev.",
            impact: "Zero data loss in production. Mock environment cut dev/debug time by 50% and was decisive for stable launch."
          },
          {
            title: "Malaysia BEMS — remote control on flaky overseas networks",
            problem: "Malaysian site had unstable network + dynamic IP. Standard remote monitoring couldn't apply.",
            solution: "Solved dynamic IP with paid DDNS. Built a lightweight API with custom Heartbeat checks + retry logic for lossless comms.",
            impact: "On-site engineer dispatch reduced by 30%+. Operational efficiency improved."
          },
          {
            title: "Zabbix proactive monitoring",
            problem: "As ops servers grew, manual SSH-and-grep was the only triage path — slowing recovery.",
            solution: "Introduced Zabbix. Centralized CPU/Memory/Disk monitoring with threshold-based triggers (e.g. mail alert on CPU > 80%).",
            impact: "Average triage time cut by 70%. Shifted ops from reactive to proactive."
          },
          {
            title: "Emergency RCE response — CVE-2023-46604",
            problem: "Critical Apache ActiveMQ RCE published. Immediate exposure to ransomware/data-loss risk.",
            solution: "Fast root-cause analysis → emergency upgrade + firewall hardening. Wrote a step-by-step technical guide and shared it company-wide.",
            impact: "All ops servers secured within 8 hours, zero downtime. Strengthened company-wide response capability."
          }
        ],
        stack: ["Java", "Spring Cloud", "ActiveMQ", "WebSocket", "Modbus", "MySQL", "Linux", "Zabbix"]
      },
      {
        company: "MSTC",
        type: "Intern · Automation Verification (QA)",
        period: "Aug 2021 — Feb 2022",
        domain: "Hyundai/Kia AVN Software",
        bullets: [
          {
            title: "AVN CAN-bus verification & test automation",
            problem: "AVN system required reliable CAN signal/data-flow verification.",
            solution: "Designed new test cases and built automation scripts.",
            impact: "Foundation of my mindset: see code from the user's perspective and predict failures before they ship."
          }
        ],
        stack: ["Python", "CAN", "Test Automation"]
      }
    ],

    projects: [
      {
        name: "Kiring",
        subtitle: "Internal life & ops platform",
        period: "Jun 2025 — Ongoing",
        team: "4 (FE 3, BE 1)",
        myRole: "Backend 100% — end-to-end ownership",
        users: "30 active users at the company",
        description: "An internal platform unifying fragmented company channels: location-based restaurant recs/sharing, team calendar (dinners/birthdays/meetings), and member-to-member messages.",
        responsibilities: [
          "Architecture design + stack selection",
          "Full backend feature development",
          "CI/CD pipeline setup",
          "AWS infra deploy + ops",
          "Swagger spec + README architecture docs"
        ],
        highlights: [
          {
            title: "Real-time 'like' concurrency",
            metric: "Failure rate 72% → 0%, P95 1s+ → 89ms (−75%)",
            problem: "Concurrent likes on popular restaurants would contend for DB write locks and exhaust the connection pool. A k6 load test with 200 concurrent users confirmed: 72% failures, P95 over 1s.",
            solution: "Instead of DB pessimistic/optimistic locks, separated *write contention itself* from the DB. Used Redis atomic ops in memory for instant response, and Spring async events (@EventListener) to persist in the background.",
            impact: "Request threads no longer wait on DB writes — connection-pool exhaustion eliminated at the root. Re-running the same load test: 0% failure, P95 89ms (~75% reduction)."
          },
          {
            title: "Dynamic-query refactor with QueryDSL",
            metric: "Runtime errors prevented, code dedup'd",
            problem: "Each new sort condition (distance, likes) on the location-based search added a new Native Query method. Duplicated code + string-based queries that couldn't be caught at compile time.",
            solution: "Adopted QueryDSL — moved all queries to type-safe Java. Consolidated scattered queries into one dynamic method using BooleanExpression + OrderSpecifier.",
            impact: "Eliminated runtime-error class. Future sort/filter additions extend without modifying existing code."
          }
        ],
        liveUrl: "https://kiring.vercel.app/",
        repoUrl: "https://github.com/kitworks-kiring",
        stack: ["Java", "Spring Boot", "JPA", "QueryDSL", "Redis", "MySQL", "AWS", "Docker"]
      }
    ],

    stack: {
      Languages: ["Java", "SQL"],
      Frameworks: ["Spring Boot", "Spring Batch", "Spring Cloud", "JPA", "QueryDSL"],
      Database: ["MySQL", "Redis"],
      Messaging: ["ActiveMQ", "WebSocket", "Modbus"],
      Infra: ["AWS", "Docker", "Linux", "CI/CD"],
      Observability: ["Zabbix"],
      Tools: ["k6 (load testing)", "Swagger", "Git"]
    },

    architecture: [
      {
        title: "Concurrency — Redis + async events to bypass write locks",
        context: "Kiring · 'Like' feature",
        problem: "DB write-lock contention and connection-pool exhaustion → 72% failures and P95 > 1s under 200 concurrent users.",
        decision: "Skip DB-side locks; separate *write contention* from the DB. Redis atomic ops respond instantly; Spring @EventListener persists in the background.",
        result: "0% failures, P95 89ms (−75%). Connection-pool exhaustion eliminated at the root."
      },
      {
        title: "MSA adoption — balancing over-engineering vs scalability",
        context: "Nuriflex · MG Industrial Complex Platform",
        problem: "Power monitoring across distributed complexes. Blanket MSA brings heavy upfront complexity.",
        decision: "Each complex's monitoring is independent — designed a *minimal* Spring Cloud MSA to avoid over-engineering.",
        result: "Scalable foundation + faster core APIs. Future scalability and present simplicity at once."
      },
      {
        title: "Algorithm redesign — beyond query tuning",
        context: "Kitworks · Casper product-listing API",
        problem: "Peak-time latency. O(N²) algorithm degraded sharply as data grew.",
        decision: "Did not stop at query tuning; redesigned the algorithm. Map to drop nested loops, Set to optimize dedup.",
        result: "Algorithm reduced to O(N). Prevented potential revenue loss during a new-vehicle launch."
      },
      {
        title: "Proactive monitoring — reactive ops → proactive ops",
        context: "Nuriflex · Ops infra",
        problem: "Growing fleet meant SSH-and-grep was the only triage. Slow recovery.",
        decision: "Zabbix with centralized resource monitoring + threshold-based triggers (mail alert on CPU > 80%).",
        result: "Average triage time −70%. Shifted ops culture from reactive to proactive."
      }
    ],

    writings: [
      { title: "Loading from Tistory...", date: "—", url: "https://xoals6536.tistory.com/" }
    ],

    education: {
      school: "Dongseoul University",
      degree: "Associate's · Computer Engineering",
      period: "Mar 2017 — Feb 2022 (Graduated)"
    },

    certs: [
      { name: "Engineer Information Processing", issuer: "HRD Korea", date: "Jun 2024" }
    ],

    values: [
      {
        title: "Engineer who minimizes business risk",
        body: "Started in QA, learned to ask 'what business loss could this defect cause' first. I see code from the user's perspective and act before failures ship."
      },
      {
        title: "Technology that maximizes value",
        body: "Tech is a tool. Every choice has tradeoffs; I weigh business needs against future scalability rather than chasing trends, and pick the architecture that fits."
      },
      {
        title: "Growth that lifts team productivity",
        body: "Business success rests on the team. I lead study groups and share via blog because a peer's growth becomes the team's productivity, and vice versa."
      }
    ],

    nav: {
      about: "about",
      experience: "experience",
      projects: "projects",
      stack: "stack",
      architecture: "architecture",
      writings: "writings",
      education: "education",
      contact: "contact"
    },

    ui: {
      readMore: "more",
      currentlyAt: "currently at",
      keyImpact: "Impact",
      problem: "Problem",
      solution: "Solution",
      result: "Result",
      context: "Context",
      decision: "Decision",
      live: "live",
      repo: "repo",
      visit: "visit",
      copyEmail: "copy email",
      copied: "copied",
      viewBlog: "view all on blog",
      copyright: "Hand-rolled portfolio · Taemin Kim",
      lastUpdated: "last updated"
    }
  }
};

window.PORTFOLIO_DATA = PORTFOLIO_DATA;
