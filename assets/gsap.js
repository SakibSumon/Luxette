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
    wrapAround: true
});