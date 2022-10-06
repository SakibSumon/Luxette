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

//hero text un-parallaxing
gsap.to(".hero-content", 1,{
  scrollTrigger: {
    trigger: ".main-carousel",
    start: "top 10%",
    end: "bottom 0%",
    scrub: true,
    invalidateOnRefresh: true,
    
  },
  y:-250
})

//hero btn un-parallaxing
gsap.to(".hero-btn", 1,{
  scrollTrigger: {
    trigger: ".main-carousel",
    start: "top 10%",
    end: "bottom 0%",
    scrub: true,
    invalidateOnRefresh: true,
    
  },
  y:-250
})


//text appear on hero section

function initialSlideAnim(){
    const tl = gsap.timeline();

    tl.to('.hero-title', {
     opacity:1
    })

    tl.from(".hero-title", 1, {
      y: 160,
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
gsap.to(".hero-btn", 1,{
  opacity:1,
  delay: 1.5,
})


///gift card section

//image appear of gift card section
gsap.to(".gift-img", 1,{
  scrollTrigger: {
    trigger: ".gift-card",
    start: "top 80%",
    end: "bottom 0%",
   
    invalidateOnRefresh: true,
    
  },
  opacity:1,
  duration:1,
  y:0
})

//gift title appear of gift card section
 gsap.from(".gift-text", 1, {
  scrollTrigger: {
    trigger: ".gift-card",
    start: "top 70%",
    end: "bottom 0%",
    invalidateOnRefresh: true,
  },
      y: 140,
      ease: "ease",
      delay: 0,
      duration:.1,
      skewY: 5,
      opacity:0,
     
      stagger: {
        amount: 0.3
      },
    })

//gift text appear of gift card section

 gsap.from(".gift-title", 1, {
  scrollTrigger: {
    trigger: ".gift-card",
    start: "top 70%",
    end: "bottom 0%",
    invalidateOnRefresh: true,
  },
      y: 140,
      ease: "ease",
      delay: 0,
      duration:.1,
      skewY: 5,
      opacity:0,
     
      stagger: {
        amount: 0.3
      },
    })

    //gift btn appear of gift card section
    gsap.to(".gift-card-link",{
       scrollTrigger: {
        trigger: ".gift-card-link",
        start: "top 100%",
        end: "bottom 0%",
       
      },
      opacity:1,
      delay: .5,
      ease: "ease-in-out",
      stagger: {
        amount: 0.3
      },
      
    })

    //batch anim on products

  gsap.to(".gsap", {y:15})

  ScrollTrigger.batch(".gsap", {
    interval: .2, 
    scrub: .5, 
    top: "top 80%",

    onEnter: batch => gsap.to(batch, {
        duration: 2 ,
        autoAlpha: 1.5, 
        stagger: .1,
        ease: Back.easeOut.config(2),
        y: -0, 
    
   }),
});

//parallax on middle section 

gsap.to('.par-img', {
  scrollTrigger: {
    trigger: '.par-img',
    start: "top 60%",
    end: "bottom 0%",

  },
  delay:0,
  opacity:1,
  scale:1,
  duration:2,
})



gsap.to(".par-contentArea", {
  scrollTrigger: {
    trigger: ".par-contentArea",
    start: "top 60%",
    end: "bottom 0%",
    invalidateOnRefresh: true,
  },
      y:0,
      opacity:1,
      duration:1,
      delay:3,


})

//map appearings

gsap.to(".gmap_canvas", {
  scrollTrigger: {
    trigger: ".gmap_canvas",
    start: "top 60%",
    end: "bottom 0%",
    invalidateOnRefresh: true,
  },
  
  scale:1,
  opacity:1,
  duration:1,
  delay:1,

})