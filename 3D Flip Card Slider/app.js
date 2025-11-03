var swiper = new Swiper(".swiper", {
    initialSlide: 3,
    centeredSlides: true,
    loop: true,
    speed: 900,
    grabCursor: true,
    allowTouchMove: false,
    effect: "coverflow",
    coverflowEffect: {
        rotate:-10,
        stretch: -45,
        depth: 90,
        modifier: 1,
        slideShadows: true,
    },
    mousewheel: {
        thresholdDelta: 50,
        sensitivity: 1,
    },
    pagination:{
        el: ".swiper-pagination"
    },
    breakpoints:{
        0:{
            slidesPerView:1,
            spaceBetween: 20,
        },
        600:{
            slidesPerView: 3,
        },
        1200:{
            slidesPerView:5,
        },
    },
});