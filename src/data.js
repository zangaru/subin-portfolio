export const profile = {
  name: '조수빈',
  role: '백엔드 · 풀스택 개발자',
  thesis: '급한 불을 끄는 개발자는 많습니다.\n불이 나기 전에 막는 개발자는 드뭅니다.',
  stats: [
    { value: '3', unit: '개', label: '공공기관 서비스 풀스택 운영' },
    { value: '1', unit: '년 뒤', label: '설계 의도 실제 검증' },
    { value: '70', unit: '건+', label: '긴급 투입 QA 단독 대응' },
  ],
  contacts: [
    { label: '이메일', value: 'sbcho914@gmail.com', href: 'mailto:sbcho914@gmail.com' },
    { label: 'GitHub', value: 'github.com/zangaru', href: 'https://github.com/zangaru' },
  ],
};

export const stack = {
  Backend: ['Java', 'Spring Boot', 'JPA', 'MyBatis', 'MariaDB', 'MySQL', 'JWT / Spring Security'],
  Frontend: ['Vue.js', 'JavaScript', 'HTML5/CSS3'],
  '기타 경험': ['eGov Framework', 'Git'],
};

export const timeline = [
  {
    period: '2024.11 – 현재',
    org: '코아아이티',
    position: 'CT사업본부 · 사원(선임)',
    detail: [
      '호텔업 등급평가 지속 운영/고도화',
      '관광기금융자 지속 운영/고도화',
      '월드프렌즈코리아 QA',
      '코이카 글로벌인재 홈페이지 구축(모집선발 메뉴 사용자 화면 담당) 진행 중',
    ],
    note: '글로벌인재 홈페이지는 JSP · eGov Framework · MyBatis 기반으로 다른 프로젝트와 스택이 다름, 프로젝트 착수 시점부터 참여',
    inProgress: true,
  },
  {
    period: '2024.04 – 2024.10',
    org: '하우페이',
    position: 'SI 사업본부 · 사원',
    detail: [
      '관광공제회 유지보수',
      '호텔업 등급평가 운영/고도화',
      '관광기금융자 운영/고도화',
    ],
    note: '회사 재정난으로 진행 중이던 프로젝트와 함께 현재 회사로 이관',
  },
];

export const projects = [
  {
    id: 'PROJECT 01',
    name: '호텔업 등급평가 시스템',
    domain: '공공기관 · 호텔업 등급평가',
    period: '2024.04 – 현재',
    role: '풀스택 개발',
    stack: ['Vue.js', 'Spring Boot', 'JPA'],
    architecture: {
      meta: [
        { label: 'Frontend', value: 'Vue 3' },
        { label: 'Backend', value: 'Spring Boot' },
        { label: 'DB', value: 'MariaDB' },
        { label: 'Auth', value: 'JWT (Stateless) · RBAC' },
      ],
      clientTier: {
        label: 'Client Tier — 사용자군별 SPA 3종',
        apps: [
          { role: '사업자용', name: '등급 신청 사이트', desc: '신청서 작성, 진행 상태 확인, 이의신청.' },
          { role: '평가원용', name: '평가 인터페이스', desc: '평가표 작성, 일정 확인, 보고서 제출.' },
          { role: '관리자용', name: '관리 패널', desc: '일정 배정, 등급 산정, 통계, 신고 처리.' },
        ],
      },
      applicationTier: {
        label: 'Application Tier — 단일 공유 백엔드',
        name: 'Spring Boot API 서버',
        stackLine: 'Controller → Service → Repository',
        modules: [
          { code: 'EX', name: '등급 산정', desc: 'Grading' },
          { code: 'EX', name: '평가 일정 관리', desc: 'Scheduling' },
          { code: 'EX', name: '신청/지원 관리', desc: 'Application' },
          { name: '등 도메인별 모듈 다수 분리', note: true },
        ],
        infra: [
          '인증/보안 — JWT + RBAC',
          '데이터 접근 — ORM 공통 베이스',
          '응답 형식 표준화',
          '알림 발송 (메일 등)',
          '멀티 테넌트 설정 분리',
          '전역 예외 처리',
        ],
      },
      dataTier: {
        label: 'Data Tier',
        name: 'MariaDB',
        desc: '관계형 데이터베이스',
      },
    },
    stories: [
      {
        title: '평가요원 신청 플로우 풀스택 개발',
        tag: '오너십',
        commits: [],
        problem:
          '평가요원 선발 업무가 수기·개별 처리에 의존해 비효율적이었고, 신청 중 이탈 시 작성 내용이 유실될 위험이 있었습니다.',
        action:
          '인적사항 → 경력/학력 → 자기소개서 → 제출로 이어지는 멀티스텝 폼과 Step별 임시저장을 설계하고, 관리자 측 1·2차·면접 합불 일괄 처리와 위촉일 지정 로직을 트랜잭션 단위로 구현했습니다.',
        result:
          '지원 첨부파일 ZIP 일괄 다운로드 파이프라인까지 구축해, 매 모집 기수(약 300명) 규모를 안정적으로 처리하고 있습니다.',
      },
      {
        title: '평가표 관리 UI 전면 재설계',
        tag: '레거시 전환',
        commits: ['42c6093'],
        problem:
          'jQuery + JSP 기반 1,100줄 코드로, 평가 항목 구조가 4단계 깊이로 하드코딩돼 있어 구조 변경이 사실상 불가능했습니다.',
        action:
          'Vue 재귀 컴포넌트로 자체 참조 트리 구조를 전면 재설계해 관리자가 항목을 동적으로 추가·삭제·순서 변경할 수 있게 했습니다. nanoid 기반 임시 key로 미저장 항목을 구분하고, 자식 항목 배점을 재귀적으로 합산하는 계산 로직을 구현했습니다.',
        result:
          'DB 문자열과 프론트 배열 간 데이터 포맷 불일치도 변환 함수로 구조적으로 해결해, 개발자 개입 없이 관리자가 직접 평가 기준을 편집할 수 있는 구조로 전환했습니다.',
      },
      {
        title: '운영 장애 원인 분석 및 근본 해결',
        tag: '트러블슈팅',
        commits: ['b2fc958', 'bf4e0e3'],
        problem:
          '평가 양식 보존 요구사항에 따라 매핑 조건을 LIKE·OR로 넓혔는데, 데이터 누적 후 조건에 맞는 행이 2건 이상 걸리며 운영 서버에서 간헐적 500 에러(NonUniqueResultException)가 발생했습니다.',
        action:
          'JPA의 Optional 리턴이 내부적으로 getSingleResult()를 호출해 정렬 여부와 무관하게 결과가 2건 이상이면 예외를 던진다는 점을 원인으로 특정했습니다. 리턴 타입을 List로 바꿔 정렬 기준(최신순)은 유지한 채 stream().findFirst()로 안전하게 1건만 반환하도록 수정했습니다.',
        result: '이후 관련 장애·민원 0건을 유지하고 있습니다.',
      },
    ],
  },
  {
    id: 'PROJECT 02',
    name: '관광기금융자 시스템',
    domain: '공공기관 · 관광업 융자/이차보전',
    period: '2024.04 – 현재',
    role: '풀스택 개발',
    stack: ['Spring Boot', 'JPA', 'Vue.js', 'MariaDB'],
    architecture: {
      meta: [
        { label: 'Frontend', value: 'Vue 3' },
        { label: 'Backend', value: 'Spring Boot' },
        { label: 'DB', value: 'MariaDB' },
        { label: 'Auth', value: 'JWT (Stateless) · RBAC' },
      ],
      clientTier: {
        label: 'Client Tier — 사용자군별 SPA 2종',
        apps: [
          { role: '신청자용', name: '융자 신청 사이트', desc: '신청서 작성, 진행 상태 확인, 공고 조회.' },
          { role: '관리자용', name: '관리 패널', desc: '신청 심사, 심사회의 관리, 통계.' },
        ],
      },
      applicationTier: {
        label: 'Application Tier — 단일 공유 백엔드',
        name: 'Spring Boot API 서버',
        stackLine: 'Controller → Service → Repository',
        modules: [
          { code: 'EX', name: '융자 신청 관리', desc: 'Loan' },
          { code: 'EX', name: '심사회의 관리', desc: 'Meeting' },
          { code: 'EX', name: '사용자 관리', desc: 'User' },
          { name: '등 도메인별 모듈 다수 분리', note: true },
        ],
        infra: [
          '인증/보안 — JWT + RBAC',
          '데이터 접근 — ORM 공통 베이스',
          '응답 형식 표준화',
          '알림 발송 (메일 등)',
          '멀티 테넌트 설정 분리',
          '전역 예외 처리',
        ],
      },
      dataTier: {
        label: 'Data Tier',
        name: 'MariaDB',
        desc: '관계형 데이터베이스',
      },
    },
    stories: [
      {
        title: '신규 도메인 확장 및 구조적 리팩토링',
        tag: '코드 품질 · 1년 뒤 검증',
        commits: ['89b01fa', '688be95'],
        problem:
          '기존 정기융자만 처리하던 시스템에 신규 자금유형(이차보전)이 추가되며, API·관리자·사용자 3개 레이어에 걸쳐 중복 개발이 우려됐습니다.',
        action:
          'loanType 파라미터 기반 단일 API로 통합 설계해 중복 코드 205줄을 제거하고, 향후 자금유형이 늘어날 것을 고려해 코드 체계를 4종으로 미리 정의해뒀습니다.',
        result:
          '실제로 약 1년 뒤 세 번째 자금유형(융자 시설자금)이 추가됐을 때, 완전히 새로운 API·컴포넌트 없이 기존 구조에 분기 로직만 추가하는 방식으로 확장돼 설계 의도가 검증됐습니다. 해당 확장 과정에서 관리자 화면 연동과 일부 버그 수정을 직접 담당했습니다.',
      },
      {
        title: '지역별 신청 마감 정책 대응 — API·관리자·사용자 풀스택 구현',
        tag: '방어적 설계 · 신속 대응',
        commits: ['d93650a'],
        problem:
          '수도권(서울·경기·인천) 지역의 융자 예산이 소진되면서, 해당 지역 신청만 선별적으로 마감하고 나머지 지역은 계속 접수를 받아야 하는 요건이 발생했습니다.',
        action:
          '공고 데이터에 지역 차단 플래그를 추가해 관리자가 공고 수정 화면에서 지역별 마감 여부를 직접 제어할 수 있게 했습니다. 사업장 주소가 우편번호 검색 API를 통해서만 입력되어 항상 표준 행정구역명으로 채워지는 구조라는 점을 파악해, 별도의 정규화 로직 없이 접두어 매칭만으로 지역을 안전하게 판별하도록 구현했으며, 클라이언트 검증에만 의존하지 않고 API 단에서도 동일 조건을 재검증해 우회 제출을 차단했습니다.',
        result:
          'API·관리자·사용자 3개 레이어를 하루 만에 일관되게 반영해, 예산 소진에 따른 지역별 마감이라는 정책 변경 요구에 신속하게 대응했습니다.',
      },
    ],
  },
  {
    id: 'PROJECT 03',
    name: '월드프렌즈코리아 통합 관리 플랫폼',
    domain: '공공기관 · 해외봉사 프로그램 관리',
    period: '2025.09 – 2026.03 (약 7개월)',
    role: '운영 유지보수 및 기능 고도화 (긴급 투입)',
    stack: ['Spring Boot', 'eGovFramework', 'MyBatis'],
    architecture: {
      meta: [
        { label: 'Frontend', value: 'JSP · jQuery (서버사이드 렌더링)' },
        { label: 'Backend', value: 'Spring Boot · eGovFramework' },
        { label: 'DB', value: 'MariaDB' },
        { label: 'Auth', value: 'JWT' },
      ],
      connectorTop: 'HTTP 요청 (서버사이드 렌더링)',
      connectorBottom: '데이터 접근 계층 (MyBatis)',
      clientTier: {
        label: '사용자단 — 서버사이드 렌더링 화면 2종',
        apps: [
          { role: '사용자용', name: '사용자 웹페이지 (국문·영문)', desc: '교육 신청·수강, 커뮤니티, 마이페이지 등.' },
          { role: '관리자용', name: '관리자 웹페이지', desc: '교육과정 관리, 회원 관리, 콘텐츠·통계 관리.' },
        ],
      },
      applicationTier: {
        label: 'Application Tier — 단일 모놀리스',
        name: 'Spring Boot 모놀리스',
        stackLine: 'Controller → Service → Mapper',
        modules: [
          { code: 'EX', name: '교육 관리', desc: 'Education' },
          { code: 'EX', name: '콘텐츠/커뮤니티 관리', desc: 'Content' },
          { code: 'EX', name: '회원 관리', desc: 'User' },
          { name: '등 도메인별 모듈 다수 분리', note: true },
        ],
        infra: [
          '인증 — JWT',
          '데이터 접근 — MyBatis 매퍼 공통 베이스',
          '응답 형식 표준화',
          '외부 연동 — 소셜 로그인, 문서 뷰어',
          '통계/문서 내보내기 (Excel)',
          '다국어 사이트 지원 (국문 · 영문)',
        ],
      },
      dataTier: {
        label: 'Data Tier',
        name: 'MariaDB',
        desc: '관계형 데이터베이스',
      },
    },
    stories: [
      {
        title: '긴급 투입 QA 대응 및 전 모듈 안정화',
        tag: '오너십 · 스케일',
        commits: [],
        problem:
          '오픈 직전, 담당 외 프로젝트에 긴급 투입돼 짧은 시간 안에 전체 구조를 파악해야 했습니다. QA 문서만으로는 전체 프로세스를 확인하기 어려운 상황이었습니다.',
        action:
          '교육 신청·수강 화면은 직접 전체 프로세스를 하나씩 따라가며 점검해, 차수별 진도 저장 누락, 완료·미래 차수 접근 허용, 오프라인 진도율 미표시 등을 자체적으로 발견·수정했습니다.',
        result:
          '이를 포함해 사용자·관리자·교육·커뮤니티 전 모듈에 걸친 70건 이상의 이슈를 단독으로 대응해, 기한 내 안정적으로 오픈을 완료했습니다.',
      },
      {
        title: '커뮤니티 기능 근본원인 분석 및 수정',
        tag: '트러블슈팅',
        commits: ['3b38299', 'e1860db'],
        problem:
          '커뮤니티에서 본인이 작성한 게시글인데도 삭제가 안 되는 오류와, 새로 등록한 게시글이 답글 형태로 잘못 표시되는 오류가 보고됐습니다.',
        action:
          '전자는 작성자 회원번호를 비교하는 로직이 박싱된 Integer를 != 연산자로 참조 비교하고 있어 대부분의 케이스에서 오판정된다는 점을 확인해 Objects.equals()로 값 비교하도록 수정했습니다. 후자는 JSTL 조건식에서 부모글 번호가 0인 경우를 empty 연산자가 "비어있지 않음"으로 판단해 OR 조건 때문에 무조건 답글로 분류되던 것을 확인해 AND 조건으로 수정했습니다.',
        result:
          '두 건 모두 겉으로 드러난 증상이 아니라 원인이 되는 코드 레벨 함정(Integer 캐싱, JSTL empty 연산자 동작)을 특정해 근본적으로 해결했습니다.',
      },
      {
        title: '최종합격자 정보 관리 — 일괄등록 기능 신규 개발',
        tag: '기능 개발',
        commits: ['d043a26', '653bc38', '14bb1f6'],
        problem:
          '선발된 봉사단원(최종합격자)의 파견지 현지 정보, 계약/국외 활동기간, 실적 년도 정보를 관리자가 인원 수만큼 매번 개별 입력해야 해서, 인원이 많을수록 반복 입력 부담이 컸습니다.',
        action:
          '동일 값을 여러 인원에게 한 번에 적용하는 일괄등록 기능과, 인원별로 다르게 입력해야 하는 경우를 위한 개별 직접입력 기능을 함께 설계해 두 방식을 모두 지원하도록 구현했습니다. 활동기간 등 입력값에 대한 검증 로직도 함께 추가했습니다.',
        result:
          '관리자가 최종합격자 정보를 등록하는 반복 작업 부담을 줄였고, 이후 실적 년도 저장 기능까지 확장해 지원/선발 관리 화면의 데이터 입력 흐름을 완성했습니다.',
      },
    ],
  },
];

export const collaboration = {
  title: '요구사항 구체화 및 이해관계자 커뮤니케이션',
  problem:
    '평가 보고서 이미지 관리 기능 개선 요청 시, 별도 기획서 없이 "이미지를 직접 편집하고 싶다"는 추상적 요구만 전달받았습니다.',
  action:
    '개별 삭제·제목 설정이 가능한 모달 UI로 직접 스펙을 구체화해 구현했습니다. 또한 평가 공정성에 영향을 줄 수 있는 호텔 상세주소 조기 노출 버그가 보고됐을 때, 주소 문자열의 예외적 공백 패턴을 원인으로 분석해 신속히 수정했습니다.',
  result: '직접 테스트로 정상 동작을 검증한 뒤, 담당자에게 원인과 조치 내용을 이해하기 쉽게 설명했습니다.',
};

export const sideProjects = [
  {
    title: 'MBTI 캐릭터 테스트 — 기획부터 AWS 인프라 구축까지',
    tag: '0→1 · 기획·배포 주도',
    period: '2024.03 (약 2주)',
    team: '2명 (기획·백엔드·인프라 본인, 프론트 퍼블리싱 팀원)',
    stack: ['Spring Boot', 'MySQL', 'JPA', 'HTML/CSS/JS', 'AWS EC2', 'Nginx', 'Route53'],
    links: {
      backend: 'https://github.com/zangaru/movie-character-mbti-back',
      frontend: 'https://github.com/Juha-Ryu/movie-character-mbti-front',
      demo: 'https://mbti-project-seven.vercel.app',
    },
    demoNote:
      '질문→결과 확인 플로우는 정상 동작합니다. 실시간 참여자 수, 카카오톡 공유 기능은 DB 미연동 상태(프론트엔드만 별도 호스팅)라 동작하지 않습니다.',
    motivation:
      '개발자로 취업하기 전, 로컬 환경을 벗어나 실제 서버 배포를 직접 경험해보고 싶다는 목표가 있었습니다. 튜토리얼을 따라 하는 것만으로는 한계가 있다고 생각해, 기획부터 배포까지 전 과정을 직접 끝까지 진행해보기로 했습니다.',
    process:
      "영화·드라마 캐릭터 페르소나 기반 MBTI 테스트를 기획하고, 백엔드(Spring Boot·MySQL)와 배포를 맡아 진행했습니다. AWS EC2(Ubuntu 22.04)로 서버를 구축하고 Elastic IP로 고정 IP를 확보했으며, Nginx 리버스 프록시로 Spring Boot와 연결했습니다. Route53으로 도메인을 연결하고 Let's Encrypt SSL을 적용해 엔드투엔드 HTTPS 통신까지 구현했는데, 이 과정에서 Nginx 설정 오류, 권한 문제, 인증서 포맷(.pem→.pkcs12) 변환처럼 배경지식 없이는 예상하지 못했던 문제들을 하나씩 부딪히며 해결해야 했습니다.",
    result: '실제 배포해 지인들에게 공유했고, 지인의 지인에게까지 자연 확산되며 실사용자를 확보했습니다.',
    learning:
      '튜토리얼로는 배울 수 없는, 실제 운영 환경의 디테일(권한, 네트워크, 인증서)을 몸으로 익힐 수 있었습니다.',
  },
  {
    title: '[추가 예정]',
    tag: null,
    placeholder: true,
  },
];
