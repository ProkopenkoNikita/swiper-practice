function duplicateSliders(sliderId) {
    const sliderTrack = document.querySelector(`#${sliderId} .slider-track`);
    const slides = Array.from(sliderTrack.children);
    slides.forEach((slide) =>{
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });
}


duplicateSliders("slider1")
duplicateSliders("slider2")
duplicateSliders("slider3")




function launchConfetti() {
    const colors = ["#e63946","#a8dadc","#1d3557",];

    setInterval(()=> {
        confetti({
            particleCount:3,
            angle:90,
            spread:50,
            startVelocity:20,
            ticks:1000,
            gravity:0.3,
            origin:{ x: Math.random(), y: 0},
            colors
        });
    }, 200);
}


window.addEventListener("load", launchConfetti);