/////////////////////////////////////////
// Sticky navigation
const heroContainerEl = document.querySelector(".hero-container");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-72px",
  }
);

obs.observe(heroContainerEl);

//////////////////////////////////////////////
// Mobile navigation
const btnMenu = document.querySelector(".nav-icon");

btnMenu.addEventListener("click", () => {
  document.body.classList.toggle("clicked-menu");
});

/////////////////////////////////////////
// Scrolling to sections
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      const y = sectionEl.getBoundingClientRect().y + window.scrollY - 110;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      document.body.classList.remove("clicked-menu");
    }
  });
});

/////////////////////////////////////////
// Results slider
const resultsCardsBox = document.querySelectorAll(
  ".results-section .cards-box"
);
const preBtnEl = document.querySelector(".btn-pre");
const nxtBtnEl = document.querySelector(".btn-nxt");

const cardWidth = document.querySelector(".results-category-box").offsetWidth;
let toScroll = cardWidth + 36;

resultsCardsBox.forEach((item) => {
  preBtnEl.addEventListener("click", () => {
    item.scrollLeft -= toScroll;
  });

  nxtBtnEl.addEventListener("click", (e) => {
    item.scrollLeft += toScroll;
  });
});

/////////////////////////////////////////
// Footer copyright
document.querySelector(".current-year").innerHTML = new Date().getFullYear();
