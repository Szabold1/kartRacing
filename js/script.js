/////////////////////////////////////////
// Sticky navigation
const heroContainerEl = document.querySelector(".hero-container");

const obs = new IntersectionObserver(
  function (entries) {
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

/////////////////////////////////////////
// Scrolling to sections
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      const y = sectionEl.getBoundingClientRect().y + window.scrollY - 110;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  });
});
