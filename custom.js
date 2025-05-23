document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

function setEqualHeights() {
  const cards = document.querySelectorAll(".testimonial-card");
  let maxHeight = 0;

  cards.forEach((card) => {
    card.style.height = "auto";
  });

  cards.forEach((card) => {
    maxHeight = Math.max(maxHeight, card.offsetHeight);
  });

  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
}

window.addEventListener("load", setEqualHeights);
window.addEventListener("resize", () => {
  setTimeout(setEqualHeights, 300);
});
