 (function initialSlideAnim(){
    gsap.to(".hero-content h1", {duration: .3, y: -15 , opacity: 1, ease: "ease"});
    gsap.to(".hero-content p", {duration: .3 ,y: -15 , ease: "ease", opacity: 1,  delay: .3});
    gsap.to(".hero-btn", {duration: .3, y: -15 , ease: "ease", opacity: 1,  delay: .6});
})();


var flkty = new Flickity('.main-carousel', {
    cellAlign: 'left',
    contain: true,
    adaptiveHeight: true,
    pageDots: true,
    accessibility: false,
    wrapAround: true,
   
});

gsap.registerPlugin(ScrollTrigger);

// gsap.to('.carousel-cell', {
//     scrollTrigger: {
//         trigger: '.carousel-cell',
//         start: 'top 0',
       
//         scrub: 1,
//     },
//     y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
//   ease: "none"    
// })


// apply parallax effect to any element with a data-speed attribute
gsap.utils.toArray("[data-speed]").forEach(el => {
  gsap.to(el, {
    y: function() {return (1 - parseFloat(el.getAttribute("data-speed"))) * (ScrollTrigger.maxScroll(window) - (this.scrollTrigger ? this.scrollTrigger.start : 0))},
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top 0%",
      end: "max",
      invalidateOnRefresh: true,
      scrub: true
    }
  });
});