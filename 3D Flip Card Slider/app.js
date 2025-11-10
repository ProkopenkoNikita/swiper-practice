var swiper = new Swiper(".swiper", {
  initialSlide: 4,
  centeredSlides: true,
  loop: true,
  speed: 900,
  grabCursor: true,
  allowTouchMove: false,
  effect: "coverflow",
  coverflowEffect: {
    rotate: -10,
    stretch: -45 /*gap */,
    depth: 90 /*перспектива z */,
    modifier: 1 /* умножение эффектов*/,
    slideShadows: true,
  },
  mousewheel: {
    thresholdDelta: 50,
    sensitivity: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,    
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

const slides = document.querySelectorAll(".swiper-slide");

function flipActivesSlide() {
  const activeSlide = document.querySelector(".swiper-slide-active");
  const button = activeSlide.querySelector("button");
  if (button) {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      activeSlide.classList.add("flipped");
    });
  }
}

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    if (
      slide.classList.contains("swiper-slide-active") &&
      slide.classList.contains("flipped")
    ) {
        slide.classList.remove("flipped")
    }
  });
});

swiper.on("slideChangeTransitionStart", ()=>{
    slides.forEach((slide) =>{
        slide.classList.remove("flipped")

    })
    flipActivesSlide();
})



flipActivesSlide();
