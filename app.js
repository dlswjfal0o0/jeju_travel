const tripData = {
  title: "제주 여행",
  accentTitle: "제주 여행",
  dates: "2026.07.06. - 07.08.",
  duration: "2박 3일",
  travelers: "3인 여행",
  destination: "제주도",
  description: "항공권과 렌터카 예약 정보, 직접 고른 식사·카페·명소를 한곳에 정리했어요.",
  heroImage: "https://images.unsplash.com/photo-1684042229029-8a899193a8e4?auto=format&fit=crop&w=1920&q=85",
  sections: [
    { id: "flights", label: "항공권", icon: "✈" },
    { id: "rental", label: "렌터카", icon: "🚗" },
    { id: "places", label: "추천 장소", icon: "📍" }
  ],
  flightMemo: "공항 도착은 출발 1시간 30분 전을 권장합니다. 탑승권과 신분증을 미리 준비하세요. 오토체크인 예약 완료 → 탑승 24시간 전 자동 체크인됩니다.",
  flights: [
    {
      type: "Go",
      airline: "대한항공 KE1023",
      route: "김포 GMP → 제주 CJU",
      date: "2026.07.06. (월)",
      depart: "07:20",
      arrive: "08:35",
      duration: "1시간 15분",
      status: "예약 완료",
      seat: "55A, 55B, 55C",
      pnr: "FH6P9Q",
    },
    {
      type: "Back",
      airline: "대한항공 KE1314",
      route: "제주 CJU → 김포 GMP",
      date: "2026.07.08. (수)",
      depart: "19:55",
      arrive: "21:10",
      duration: "1시간 15분",
      status: "예약 완료",
      seat: "50D, 50E, 50F",
      pnr: "FHED6J",
    }
  ],
  rentalCar: {
    company: "제주 신동아렌터카",
    model: "더 뉴 아반떼 CN7(26년~)HEV",
    period: "7.06. - 7.08. (2.38일)",
    pickupTime: "07.06. 09:30",
    returnTime: "07.08. 18:30",
    shuttlePlace: "제주국제공항 1층 5번 게이트 건너편 우측 \n(구)렌터카하우스 셔틀 정류장 \n[6구역 바닥숫자 4번]",
    shuttleMemo: "업체 셔틀버스 탑승 후 영업소로 이동합니다. \n약 10-15분 소요 예정입니다.",
    include: "종합보험(완전자차) 포함 · 무제한 km",
    status: "예약 완료"
  },
  places: {
    "식사": [
      {
        name: "몽탄",
        category: "고기",
        address: "제주시 구좌읍 동복로 83 1층",
        hours: "11:30 - 21:00 (20:00 라스트오더)",
        rating: "4.4",
        image: "https://image.mom-mom.net/eyJrZXkiOiJwbGFjZXMvNjg2ZjI3NWMzZTNkZTY0YjdlOWU4NWJlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzQyLCJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWV9fX0=",
        desc: "인기 메뉴인 우대갈비는 두퉁한 갈빗대에 부드러운 고기와 풍부한 육즙이 특징이며, 짚불 향이 은은하게 배어 있어 풍미가 뛰어납니다. 직원분이 직접 고기를 구워주셔서 편리하며, 트러플 계란찜과 제주 특산물을 활용한 게우솥밥도 인기 메뉴입니다.",
        // branches 예시: 여러 지점이 있을 경우 아래처럼 추가하세요
        // branches: [
        //   { name: "제주점", address: "제주시 구좌읍 동복로 83 1층", lat: 33.5265, lng: 126.9032 },
        //   { name: "한남점", address: "서울시 용산구 ...", lat: 37.5383, lng: 126.9945 },
        // ]
        branches: [
          { name: "제주점", address: "제주시 구좌읍 동복로 83 1층", lat: 33.5265, lng: 126.9032 },
          { name: "애월점", address: "제주시 애월읍 애월북서길 56-4", lat: 33.4634, lng: 126.3206 },
        ]
      },
      {
        name: "우동카덴",
        category: "일식",
        address: "제주시 조천읍 교래3길 23",
        lat: 33.4416, lng: 126.6621,
        hours: "10:00 - 18:00 (화•수 정기휴무 / 17:00 라스트오더)",
        rating: "3.9",
        image: "https://d12zq4w4guyljn.cloudfront.net/750_750_20260506091525_photo1_d8d8dcf15d07.webp",
        desc: "쫄깃한 생면과 깊은 육수가 조화로운 우동을 제공하는 식당으로, 흑돼지우동•카레우동•명란크림우동 등 다양한 메뉴가 준비되어 있습니다.",
      },
      {
        name: "블루크랩 함덕점",
        category: "크랩",
        address: "제주시 조천읍 함덕로 40 3층 301호",
        lat: 33.5372, lng: 126.6697,
        hours: "12:00 - 21:30 (화 정기휴무 / 15:00 - 16:30 브레이크타임 / 20:15 라스트오더)",
        rating: "4.4",
        image: "https://mblogthumb-phinf.pstatic.net/MjAyNjAxMDRfMTI5/MDAxNzY3NTMwMzc3ODE3.1kcCtCkLxS8q-qyvl2iu9K0jn6pT8BV4iI_dA3dH7mkg.T6kT4HGe7Qf6EATjeQtWUdRIS0syYQmJY-VEG8qwnNEg.JPEG/SE-692887e3-dbca-40cd-bfd4-36137266deb4.jpg?type=w800",
        desc: "신선한 해산물을 활용한 보일링 크랩 요리가 특징입니다.",
      },
      {
        name: "청초수물회 제주점",
        category: "물회",
        address: "제주시 애월읍 일주서로 6113",
        lat: 33.4670, lng: 126.3578,
        hours: "10:30 - 20:30 (19:50 라스트오더)",
        rating: "4.6",
        image: "https://ugc-images.catchtable.co.kr/shop/manager/images/72b5a269cdeb4c59b396e0db739f4695?resizeType=details500",
        desc: "고급스럽고 정갈하게 내어지는 물회가 대표적이며, 고소한 맛의 전복죽도 인기가 많습니다.",
      },
      {
        name: "고찌가게",
        category: "동네맛집",
        address: "제주시 가령로4길 27",
        lat: 33.4951, lng: 126.5163,
        hours: "11:00 - 15:00 (14:55 라스트오더)",
        rating: "3.5",
        image: "https://d12zq4w4guyljn.cloudfront.net/750_750_20250903055800394_photo_7467740bc044.webp",
        desc: "합리적인 가격에 수제 함박 스테이크와 카레를 즐길 수 있습니다.",
      },
      {
        name: "함쉐프키친짬뽕 서귀포 본점",
        category: "짬뽕",
        address: "서귀포시 이어도로 217-4 함쉐프키친",
        lat: 33.2538, lng: 126.5014,
        hours: "11:00 - 21:00 (15:00 - 17:00 브레이크타임 / 20:00 라스트오더)",
        rating: "4.6",
        image: "https://ugc-images.catchtable.co.kr/shop/manager/images/7b9b1181723e4aada8d6a8948a122eed?resizeType=details500",
        desc: "신라호텔 15년 경력의 쉐프가 운영하는 곳으로, 소고기 차돌박이와 왕갈비가 들어간 인생짬뽕이 인기 메뉴입니다.",
      },
      {
        name: "소렉",
        category: "양식",
        address: "제주시 은남2길 41 1층",
        lat: 33.5022, lng: 126.5131,
        hours: "13:00 - 23:00 (화 정기휴무 / 17:00 - 18:00 브레이크타임 / 22:00 라스트오더)",
        rating: "4.6",
        image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250212_24%2F1739335397724cWPFt_JPEG%2FIMG_1443.jpeg",
        desc: "송아지 스테이크와 딱새우 매운 크림 파스타가 인기 메뉴입니다.",
      },
      {
        name: "연돈",
        category: "돈까스",
        address: "서귀포시 색달로 10",
        lat: 33.2520, lng: 126.4128,
        hours: "12:00 - 21:00 (19:15 라스트오더)",
        rating: "4.2",
        image: "https://ugc-images.catchtable.co.kr/catchtable/shopinfo/s-XvP-6X2H7zfLB3n7gydQw/m/270ef344e48345adbf99b33ef74b715e?resizeType=details500",
        desc: "두툼한 등심까스와 부드러운 안심까스, 치즈볼카츠 등 다양한 돈까스 메뉴를 제공하며 바삭한 튀김옷과 잡내 없는 고기가 특징입니다.",
      },
      {
        name: "돈해상 제주한림협재흑돼지",
        category: "흑돼지",
        address: "제주시 한림읍 귀덕11길 39 1층",
        lat: 33.3802, lng: 126.2614,
        hours: "11:00 - 21:00 (14:00 - 15:00 브레이크타임 / 20:30 라스트오더)",
        rating: "4.5",
        image: "https://ugc-images.catchtable.co.kr/shop/manager/images/08e8a13ce72c4fe89d9512c0052e2783?resizeType=details500",
        desc: "제주 바다를 바라보며 흑돼지를 즐길 수 있으며, 세트 메뉴에는 흑돼지 오겹살 및 목살과 함께 활전복, 새우 등이 포함되어 있습니다.",
      },
      {
        name: "세이모키친",
        category: "양식",
        address: "서귀포시 김정문화로 41번길 3",
        lat: 33.2525, lng: 126.5687,
        hours: "11:30 - 15:30 (월 정기휴무 / 14:30 라스트오더)",
        rating: "4.88",
        image: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250226_197%2F17405720718162FBsl_JPEG%2FIMG_2110.jpeg",
        desc: "서귀포에서 파스타와 피자가 맛있는 레스토랑으로, 특히 시그니처 오일파스타와 트러플 크림 뇨끼가 인기 메뉴입니다.",
      }
    ],
    "카페": [
      {
        name: "해지개",
        category: "오션뷰",
        address: "제주시 애월읍 애월북서길 52 1~2층",
        lat: 33.4635, lng: 126.3203,
        hours: "09:00 - 21:00 (20:20 라스트오더)",
        rating: "4.8",
        image: "https://blog.kakaocdn.net/dna/btnbHs/btsn0DAIoZB/AAAAAAAAAAAAAAAAAAAAAIMQP92KJDaP7w8ZbBhw6MM6-uVpB2iaMoIEf82MCBYN/img.jpg?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1782831599&allow_ip=&allow_referer=&signature=VE3Fl9H0We6dERzRegUuV5ZmDnI%3D",
        desc: "흑임자라떼, 아인쑥패너, 넛츠크림라떼 등 시그니처 음료와 함께 초당옥수수 데니쉬, 치즈수플레 등 다양한 베이커리를 즐길 수 있습니다.",
      },
      {
        name: "수퍼플라워",
        category: "꽃밭 속 오션뷰",
        address: "제주시 구좌읍 동복로 85 지하1층",
        lat: 33.5266, lng: 126.9036,
        hours: "09:00 - 19:00 (18:30 라스트오더)",
        rating: "3.8",
        image: "https://api.cdn.visitjeju.net/photomng/imgpath/202510/24/d19a817a-3eaf-4eaf-9850-7216cf5e8398.webp",
        desc: "꽃을 모티브로 한 음료와 디저트가 특징입니다.",
      },
      {
        name: "델문도",
        category: "오션뷰",
        address: "제주시 조천읍 조함해안로 519-10",
        hours: "06:00 - 24:00",
        rating: "4.1",
        image: "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMjZfODgg/MDAxNjE2NzI2OTI3MDYy.sicbaZbeyLMte8EvA-iTYe-FWcNpvpWg8bZmoNf1ZWIg.KlujjGRCwFgSE2p-aufJuU1zdFgGWmiRRfwS_ZUEWxYg.JPEG.28ssan/SE-489edfa3-aa78-4334-8c17-4eadd5bd5790.jpg?type=w800",
        desc: "고메버터 소금빵, 우도 땅콩빵, 라봉슈 등 다양한 베이커리와 말차라떼, 청귤피치에이드 등 음료 메뉴가 인기입니다.",
        branches: [
          { name: "함덕점", address: "제주시 조천읍 조함해안로 519-10", lat: 33.5378, lng: 126.6660 },
          { name: "김녕점", address: "제주시 구좌읍 해맞이해안로 140", lat: 33.5522, lng: 126.7576 },
          { name: "제주도립미술관점", address: "제주시 1100로 2894-78", lat: 33.4274, lng: 126.4829 },
          { name: "로스터스", address: "제주시 연삼로 316", lat: 33.4982, lng: 126.5278 },
        ]
      },
      {
        name: "망고레이",
        category: "망고",
        address: "제주시 애월읍 일주서로 7021 1층",
        lat: 33.4700, lng: 126.3697,
        hours: "10:00 - 19:30",
        rating: "4.3",
        image: "https://mblogthumb-phinf.pstatic.net/MjAyNDA0MjBfMjE0/MDAxNzEzNjE5OTAyODgw.lqCZhyYfvCCkaTmX04erNGX0UcjcR7ArvX4wsANRC58g.tjrd3VhJo0hOABS7hnO9gUFYUFo5WBG5DSnSkP5kU94g.JPEG/SE-e3871769-149c-47b1-9582-4d45c417df86.jpg?type=w800",
        desc: "대한민국 최초의 필리핀 디저트 카페이자, 필리핀 카라바오생망고를 직접 공수하여 필리핀 현지의 맛을 느낄 수 있습니다.",
        branches: [
          { name: "애월직영점", address: "제주시 애월읍 일주서로 7021 1층", lat: 33.4700, lng: 126.3697 },
          { name: "함덕본점", address: "제주시 조천읍 함덕로 56", lat: 33.5368, lng: 126.6688 },
        ]
      }
    ],
    "명소": [
      {
        name: "워터월드 제주",
        category: "미디어아트",
        address: "서귀포시 월드컵로 33 제주월드컵경기장",
        lat: 33.2517, lng: 126.5181,
        hours: "10:00 - 20:00 (19:00 입장마감)",
        rating: "3.8",
        image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA0MDRfMTI1%2FMDAxNzQzNzA5MTU5MDAy.XklDeEGXhsComEatCd1ovT39dutD8-e33R6lW8nYaqsg.YbNMX7lOgel4QrMj8VuKxQm-yutEprwJW6tdGaCmMC8g.JPEG%2FTHE_OCEAN17_%25282%2529.jpg&type=sc960_832",
        desc: "슬라이드, 감귤 욕조 스파, 해수 사우나, 미디어아트가 있는 제주 대표 명소입니다.",
      },
      {
        name: "천지연 폭포",
        category: "자연경관",
        address: "서귀포시 천지동 667-7",
        lat: 33.2463, lng: 126.5546,
        price: "입장료 2,000원",
        rating: "4.49",
        image: "https://api.cdn.visitjeju.net/photomng/imgpath/202409/24/15f30667-21ed-4722-aaa3-d4a64e02a9a2.webp",
        desc: "야간 조명 산책까지 고려하기 좋은 폭포 코스입니다.",
      }
    ]
  }
};

// ─── 편집 모드 제어 ──────────────────────────────────────────────────────────
// 일반 링크로 접근하면 항상 읽기 전용.
// ?edit=<비밀번호> 파라미터가 있을 때만 편집 모드가 활성화됩니다.
const EDIT_SECRET = "jeju2025"; // 원하는 비밀번호로 변경하세요
const _params = new URLSearchParams(window.location.search);
const IS_EDIT_MODE = _params.get("edit") === EDIT_SECRET;

let activeSection = "flights";
let activePlace = "식사";

const $ = (selector) => document.querySelector(selector);

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

// ─── 섹션 전환 ───────────────────────────────────────────────────────────────
// 탭 클릭 시 해당 섹션만 표시하고 나머지를 숨깁니다.
// renderShell()을 재호출해 nav/tab is-active 상태를 항상 동기화합니다.
function showSection(sectionId) {
  activeSection = sectionId;

  // 활성 섹션만 표시 (CSS [hidden] { display: none !important } 와 함께 동작)
  tripData.sections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) el.hidden = (id !== sectionId);
  });

  // 탭 버튼·nav 링크의 is-active 상태를 renderShell()로 다시 그림
  renderShell();

  // 탭바가 보이는 위치로 스크롤
  window.scrollTo({ top: 0, behavior: "instant" });

  // 추천 장소 탭으로 전환 시 지도 초기화 (DOM이 visible 된 뒤 실행)
  if (sectionId === "places") {
    requestAnimationFrame(initMap);
  }
}

function renderShell() {
  $("#navTitle").textContent = tripData.accentTitle;
  $("#navDates").textContent = `${tripData.dates} · ${tripData.duration}`;
  $("#heroImage").src = tripData.heroImage;
  $("#heroImage").alt = tripData.destination;
  $("#heroTitle").innerHTML = `<em>${escapeHtml(tripData.accentTitle)}</em>`;
  $("#heroDesc").textContent = tripData.description;
  $("#footerTitle").innerHTML = `${escapeHtml(tripData.accentTitle)} <span style="color: var(--accent)">2026</span>`;
  $("#footerMeta").textContent = `${tripData.dates} · ${tripData.duration} · ${tripData.travelers}`;

  $("#heroMeta").innerHTML = [
    `📅 ${tripData.dates} · ${tripData.duration}`,
    `👥 ${tripData.travelers}`,
    `📍 ${tripData.destination}`
  ].map((item) => `<span class="meta-pill">${escapeHtml(item)}</span>`).join("");

  const links = tripData.sections.map((section) => `
    <button class="nav-link ${section.id === activeSection ? "is-active" : ""}" type="button" data-section="${section.id}">
      ${section.label}
    </button>
  `).join("");
  $("#navLinks").innerHTML = links;
  $("#footerLinks").innerHTML = tripData.sections.map((section) => `
    <button class="footer-link" type="button" data-section="${section.id}">
      ${section.label}
    </button>
  `).join("");

  $("#sectionTabs").innerHTML = tripData.sections.map((section) => `
    <button class="tab-button ${section.id === activeSection ? "is-active" : ""}" type="button" data-section="${section.id}">
      <span>${section.icon}</span>${section.label}
    </button>
  `).join("");
}

function detail(label, value) {
  return `
    <div class="detail">
      <span class="detail-label">${escapeHtml(label)}</span>
      <span class="detail-value">${escapeHtml(value || "-")}</span>
    </div>
  `;
}

function renderFlights() {
  $("#flightList").innerHTML = tripData.flights.map((flight) => {
    const [from, to] = flight.route.split(" → ");
    const isReturn = flight.type.includes("귀국");

    return `
      <article class="flight-card ${isReturn ? "return" : ""}">
        <div class="flight-bar">
          <span>${isReturn ? "▼" : "▲"} ${escapeHtml(flight.type)}</span>
          <span class="status-chip">${escapeHtml(flight.status)}</span>
        </div>
        <div class="flight-body">
          <div>
            <div class="route-visual">
              <div class="airport-time">
                <strong>${escapeHtml(flight.depart)}</strong>
                <span>${escapeHtml(from)}</span>
              </div>
              <div class="route-line">
                <span class="duration">${escapeHtml(flight.duration)}</span>
                <span class="plane-line">✈</span>
                <span class="duration">${escapeHtml(flight.date)}</span>
              </div>
              <div class="airport-time">
                <strong>${escapeHtml(flight.arrive)}</strong>
                <span>${escapeHtml(to)}</span>
              </div>
            </div>
          </div>
          <div class="detail-grid">
            ${detail("항공편", flight.airline)}
            ${detail("좌석", flight.seat)}
            ${detail("예약번호", flight.pnr)}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderRental() {
  const car = tripData.rentalCar;
  $("#rentalCard").innerHTML = `
    <article class="rental-card">
      <div class="rental-bar">
        <span>${escapeHtml(car.company)}</span>
        <span class="status-chip">${escapeHtml(car.status)}</span>
      </div>
      <div class="rental-body">
        <div class="info-block">
          <p class="block-title">예약 정보</p>
          ${detail("차량", car.model)}
          ${detail("기간", car.period)}
          ${detail("픽업", `${car.pickupTime} · ${car.pickupLocation}`)}
          ${detail("반납", car.returnTime)}
          ${detail("포함", car.include)}
        </div>
        <div class="info-block">
          <div class="shuttle-box">
            <p class="block-title">셔틀 탑승 장소</p>
            <h3>${escapeHtml(car.shuttlePlace).replace(/\n/g, '<br>')}</h3>
            <p>${escapeHtml(car.shuttleMemo).replace(/\n/g, '<br>')}</p>
          </div>
          ${car.price ? `
          <div class="price-box">
            <p>${escapeHtml(car.include)}</p>
          </div>` : ""}
        </div>
      </div>
    </article>
  `;

  $("#routeList").innerHTML = (tripData.routes ?? []).map((route) => `
    <article class="route-card">
      <b>${escapeHtml(route.day)}</b>
      <p>${escapeHtml(route.route)}</p>
      <small>${escapeHtml(route.km)}</small>
    </article>
  `).join("");
}

// ─── 지도 ────────────────────────────────────────────────────────────────────
// Leaflet + OpenStreetMap 타일, 카카오 주소 검색 API로 좌표 자동 변환.
// 주소만 입력하면 lat/lng를 직접 입력하지 않아도 됩니다.

const KAKAO_API_KEY = "dc24dbbfd7597a0e070d880364bad4e4";

const CATEGORY_CONFIG = {
  "식사": { emoji: "🍽", color: "#d96b2f" },
  "카페": { emoji: "☕", color: "#7b4f2e" },
  "명소": { emoji: "📷", color: "#1d4a3c" },
};

let _map = null;
let _markers = [];
const _geocodeCache = {}; // 같은 주소를 두 번 요청하지 않도록 캐시

// 카카오 주소 검색 API → { lat, lng } 반환. 실패 시 null.
async function geocodeAddress(address) {
  if (_geocodeCache[address]) return _geocodeCache[address];
  try {
    const res = await fetch(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`,
      { headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` } }
    );
    const data = await res.json();
    if (data.documents?.length > 0) {
      // 카카오 API는 x=경도(lng), y=위도(lat) 반환
      const { x, y } = data.documents[0];
      const coords = { lat: parseFloat(y), lng: parseFloat(x) };
      _geocodeCache[address] = coords;
      return coords;
    }
  } catch (e) {
    console.warn("geocoding 실패:", address, e);
  }
  return null;
}

function makeMarkerIcon(emoji, color) {
  return L.divIcon({
    html: `<div class="map-pin" style="background:${color}">${emoji}</div>`,
    className: "",
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22],
  });
}

async function initMap() {
  if (_map) {
    _map.invalidateSize();
    return;
  }

  _map = L.map("placeMap", {
    center: [33.4, 126.55],
    zoom: 10,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(_map);

  await addAllMarkers();
}

async function addAllMarkers() {
  _markers.forEach((m) => _map.removeLayer(m));
  _markers = [];

  // 모든 장소의 geocoding을 병렬로 처리
  const tasks = [];

  Object.entries(tripData.places).forEach(([category, places]) => {
    const { emoji, color } = CATEGORY_CONFIG[category] || { emoji: "📍", color: "#666" };
    const icon = makeMarkerIcon(emoji, color);

    places.forEach((place) => {
      // branches가 있으면 각 지점으로, 없으면 장소 자체 정보로 (lat/lng 포함)
      const points = place.branches?.length
        ? place.branches
        : [{ name: null, address: place.address, lat: place.lat, lng: place.lng }];

      points.forEach((pt) => {
        // lat/lng가 직접 있으면 API 호출 없이 바로 사용, 없으면 Kakao API 시도
        const coordsPromise = (pt.lat && pt.lng)
          ? Promise.resolve({ lat: pt.lat, lng: pt.lng })
          : geocodeAddress(pt.address);

        tasks.push(
          coordsPromise.then((coords) => {
            if (!coords) return; // geocoding 실패 시 마커 생략
            const titleLine = pt.name
              ? `<strong>${escapeHtml(place.name)}</strong><span class="popup-branch">${escapeHtml(pt.name)}</span>`
              : `<strong>${escapeHtml(place.name)}</strong>`;
            const marker = L.marker([coords.lat, coords.lng], { icon })
              .bindPopup(
                `<div class="map-popup">${titleLine}<p>${escapeHtml(pt.address)}</p></div>`,
                { maxWidth: 220 }
              )
              .addTo(_map);
            _markers.push(marker);
          })
        );
      });
    });
  });

  await Promise.all(tasks);

  // 모든 마커가 보이도록 범위 자동 조정
  if (_markers.length > 0) {
    const group = L.featureGroup(_markers);
    _map.fitBounds(group.getBounds().pad(0.12));
  }
}

// ─── 추천 장소 렌더링 ────────────────────────────────────────────────────────
function renderPlaces() {
  $("#placeTabs").innerHTML = Object.keys(tripData.places).map((name) => {
    const { emoji } = CATEGORY_CONFIG[name] || { emoji: "📍" };
    return `
      <button class="place-tab ${name === activePlace ? "is-active" : ""}" type="button" data-place="${escapeHtml(name)}">
        ${emoji} ${escapeHtml(name)}
      </button>
    `;
  }).join("");

  $("#placeList").innerHTML = tripData.places[activePlace].map((place, idx) => {
    // 여러 지점이 있으면 지점 목록 토글 UI 표시
    const branchesHtml = place.branches?.length
      ? `
        <button class="branch-toggle" type="button" data-branch-target="bl-${idx}">
          지점 ${place.branches.length}곳 보기 <span class="branch-arrow">▾</span>
        </button>
        <ul class="branch-list" id="bl-${idx}" hidden>
          ${place.branches.map((b) => `
            <li>
              <span class="branch-name">${escapeHtml(b.name)}</span>
              <span class="branch-addr">📍 ${escapeHtml(b.address)}</span>
            </li>
          `).join("")}
        </ul>
      `
      : `<span class="place-addr-single">📍 ${escapeHtml(place.address)}</span>`;

    return `
      <article class="place-card">
        <div class="place-image-wrap">
          <img src="${escapeHtml(place.image)}" alt="${escapeHtml(place.name)}" loading="lazy" />
          <div class="place-badges">
            <span>${escapeHtml(place.category)}</span>
            <span>★ ${escapeHtml(place.rating)}</span>
          </div>
        </div>
        <div class="place-body">
          <h3>${escapeHtml(place.name)}</h3>
          <p>${escapeHtml(place.desc)}</p>
          ${place.memo ? `<div class="memo-box">📌 ${escapeHtml(place.memo)}</div>` : ""}
          <div class="place-meta">
            ${branchesHtml}
            ${place.hours ? `<span>⏱ ${escapeHtml(place.hours)}</span>` : ""}
            ${place.price ? `<strong>${escapeHtml(place.price)}</strong>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    // 섹션 탭 클릭: 해당 섹션만 표시 (IntersectionObserver 불필요)
    const sectionButton = event.target.closest("[data-section]");
    if (sectionButton) {
      event.preventDefault();
      showSection(sectionButton.dataset.section);
      return;
    }

    // 추천 장소 카테고리 탭 클릭
    const placeButton = event.target.closest("[data-place]");
    if (placeButton) {
      activePlace = placeButton.dataset.place;
      renderPlaces();
      return;
    }

    // 지점 목록 토글
    const branchToggle = event.target.closest("[data-branch-target]");
    if (branchToggle) {
      const targetId = branchToggle.dataset.branchTarget;
      const list = document.getElementById(targetId);
      if (!list) return;
      const isOpen = !list.hidden;
      list.hidden = isOpen;
      const arrow = branchToggle.querySelector(".branch-arrow");
      if (arrow) arrow.textContent = isOpen ? "▾" : "▴";
      branchToggle.classList.toggle("is-open", !isOpen);
    }
  });
}

// ─── 초기화 ──────────────────────────────────────────────────────────────────
// renderFlights/renderRental/renderPlaces 먼저 실행 후 showSection으로 초기 탭 설정.
// showSection 내부에서 renderShell()을 호출하므로 별도 호출 불필요.
renderFlights();
renderRental();
renderPlaces();
showSection(activeSection); // 항공권 탭 기본 표시 + renderShell() 포함
bindEvents();
