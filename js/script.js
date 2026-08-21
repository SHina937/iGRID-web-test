document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const button = item.querySelector(".faq-item__q");
    button.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const fv = document.querySelector(".fv");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (fv && scrollTopBtn) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        scrollTopBtn.classList.toggle("is-visible", !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(fv);

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
