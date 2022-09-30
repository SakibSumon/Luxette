//  (function initialSlideAnim(){
//     gsap.to(".hero-content h1", {duration: .3, y: -15 , opacity: 1, ease: "ease"});
//     gsap.to(".hero-content p", {duration: .3 ,y: -15 , ease: "ease", opacity: 1,  delay: .3});
//     gsap.to(".hero-btn", {duration: .3, y: -15 , ease: "ease", opacity: 1,  delay: .6});
// })();


// gsap.to('.hero-title', {duration: 1, y: 200 , opacity: 1, ease: "ease"});




gsap.registerPlugin(ScrollTrigger);


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

//text appear on hero section

function initialSlideAnim(){
    const tl = gsap.timeline();

    tl.to('.hero-title', {
     opacity:1
    })

    tl.from(".hero-title", 1, {
      y: 140,
      ease: "ease",
      delay: 0.0,
      duration:.1,
      skewY: 5,
     
      stagger: {
        amount: 0.3
      },
    })

     gsap.from(".hero-sub", 1, {
      y: 80,
      ease: "ease",
      delay: 0.2,
      duration:.1,
      skewY: 5,
      stagger: {
        amount: 0.3
      },
    })
}

function secondSlideAnim(){
   gsap.from(".carousel-cell.is-selected .hero-title", 1,
        {
          y: 180,
          ease: "ease",
          delay: 0,
          duration:.1,
          skewY: 5,
          stagger: {
            amount: 0.3
          },
        }
        )

        gsap.from(".carousel-cell.is-selected .hero-sub", 1,
        {
          y: 180,
          ease: "ease",
          delay: 0,
          duration:.1,
          skewY: 5,
          stagger: {
          amount: 0.3
          },
        }
        )

        gsap.fromTo(".carousel-cell.is-selected .hero-btn", 
        {
          delay:0,
          opacity: 0,
          duration:2,
          
        },
        {
          opacity: 1,
          delay: 1,
          duration:2,
         
        }
        
        )
}

document.addEventListener("DOMContentLoaded", function() {
  initialSlideAnim();

  var flkty = new Flickity('.main-carousel', {
    cellAlign: 'left',
    contain: true,
    adaptiveHeight: true,
    pageDots: true,
    accessibility: false,
    wrapAround: true,
   
});

 flkty.on("change", function(event, index){
    secondSlideAnim();
      
  })

});


//hero btn appear
// gsap.from(".hero-btn", 1,{
 
//   opacity: 0,


// },
// )

gsap.to(".hero-btn", 1,{
  opacity:1,
  delay: 1.5,
})