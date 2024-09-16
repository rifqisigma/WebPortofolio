gsap.registerPlugin(ScrollTrigger);
Splitting();


//for scroll from lenis
const lenis = new Lenis()
  lenis.on('scroll', (e) => {
  console.log(e)
})

  function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
//


//forQNa
  const menuBtn = document.querySelector('.qna-btn');
  const menuBtnClose = document.querySelector('.btnClose');
  const bgnav = document.querySelector('.popup-qna');


  let menuOpen = false ;
  gsap.set(bgnav, {

     display:'none',
     yPercent:-100
  })
  gsap.set('.askCover h1', {
     yPercent:100,
     stagger:0.3
  })
  gsap.set('.answerCover h1', {
     yPercent:100,
     stagger:0.3
  })

  const navTl = gsap.timeline({
    defaults:{
      ease:'circ.inOut',
    }
  });
  navTl
  .to(bgnav, {
     duration:1,
     display:'flex',
     yPercent:0
  })
  .to('.askCover h1', {
     duration:1,
     yPercent:0
  })
  .to('.answerCover h1', {
     duration:1,
     yPercent:0
  })

  //btn open
  navTl.pause();
  menuBtn.addEventListener('click', () => {
    if (!menuOpen){
      navTl.play();
      menuOpen = true ;
    } else {
      navTl.reverse();
      menuOpen = false;
    }
  })

  //btn close
  navTl.pause();
  menuBtnClose.addEventListener('click', () => {
    if (!menuOpen){
      navTl.play();
      menuOpen = false ;
    } else {
      navTl.reverse();
      menuOpen = true;
    }
  })



//for custom cursor
const cursor = document.querySelector('.custom-cursor');
const cursorSecOne = document.querySelector('.custom-cursor-secOne');
const cursorSecFive = document.querySelector('.custom-cursor-secFive');
const cursorSecSix = document.querySelector('.custom-cursor-secSix');
function moveCursor(e) {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.00001,
        ease: 'power2.out'
    });
    gsap.to(cursorSecOne, {
     x: e.clientX,
     y: e.clientY,
     duration: 5,
     ease: 'power2.out'
     });
     gsap.to(cursorSecFive, {
          x: e.clientX,
          y: e.clientY,
          duration: 5,
          ease: 'power2.out'
     });
     gsap.to(cursorSecSix, {
          x: e.clientX,
          y: e.clientY,
          duration: 5,
          ease: 'power2.out'
     });
}
gsap.to(cursorSecOne,{
     scaleY:0
})
gsap.to(cursorSecFive,{
     scaleY:0
})

gsap.to(cursorSecSix,{
     scaleY:0
})


document.addEventListener('mousemove', moveCursor);


const cursorOnText = document.querySelectorAll('#customCursorHover');
cursorOnText.forEach(cursorOnTexts => {
    cursorOnTexts.addEventListener('mouseenter', () => {
        gsap.to(cursor, { 
          top: '-60px',
          left: '-60px',
          width: '120px',
          height: '120px',
          backgroundColor: 'rgb(252, 181, 252)',
          mixBlendMode: 'difference',
          border: '0px',
          duration:0.2
     });
    });

    cursorOnTexts.addEventListener('mouseleave', () => {
        gsap.to(cursor, {   
          top: '-20px',
          left: '-20px',
          width: '40px',
          height: '40px',
          backgroundColor: 'transparent',
          mixBlendMode: 'none',
          border: '2px solid red',
          duration:0.2
     });
    });
});

const secOne = document.querySelectorAll('.sec-one');  
secOne.forEach(secOnes => {
    secOnes.addEventListener('mouseenter', () => {
        gsap.to(cursorSecOne, { 
          scaleY:1,
          duration:0.3
         
     });
    });

    secOnes.addEventListener('mouseleave', () => {
        gsap.to(cursorSecOne, {   
         scaleY:0,
         duration:0.3
     });
    });
});
const secFive = document.querySelectorAll('.sec-five');  
secFive.forEach(secFives => {
    secFives.addEventListener('mouseenter', () => {
        gsap.to(cursorSecFive, { 
          scaleY:1,
          duration:0.3
         
     });
    });

    secFives.addEventListener('mouseleave', () => {
        gsap.to(cursorSecFive, {   
         scaleY:0,
         duration:0.3
     });
    });
});
const secSix = document.querySelectorAll('.sec-six');  
secSix.forEach(secSixs => {
    secSixs.addEventListener('mouseenter', () => {
        gsap.to(cursorSecSix, { 
          scaleY:1,
          duration:0.3
         
     });
    });

    secSixs.addEventListener('mouseleave', () => {
        gsap.to(cursorSecSix, {   
         scaleY:0,
         duration:0.3
     });
    });
});
//





//for landing
const landingPage = gsap.timeline();

landingPage.to(".landingPage",{
     duration:1,
     delay:3,
     yPercent:-100,
    ease: "circ.inOut"
})
landingPage.to("#typed",{
     duration:1,
     delay:-1,
     yPercent:100,
})
landingPage.from("#text-1",
     {
          duration:0.3,
          delay:-0.5,
          opacity:1, 
          yPercent:100,
          stagger:0.1
     })





//sec-one
gsap.to('.box', {
     scrollTrigger:{
          trigger: '.sec-one',
          start: '40% 20%',
          end: 'bottom center',
          scrub: true,
     },
     rotateX:'40deg',
     rotateY: '-40deg' ,
      translateY:'15%',
     stagger:0.1,


})


//sec-two
gsap.from('.sec-two-text h1 .char', {
     scrollTrigger:{
          trigger: '.sec-two',
          start: '40% center',
          end: '85% center',
          scrub: true
     },
     color:'grey',
     ease: "power.inOut",
     stagger:0.1,

})

//sec-three

const container = document.querySelector(".container");
const section = gsap.utils.toArray(".container section");


let scrollTween = gsap.to(section, {
  xPercent: -100 * (section.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: true,
    end: "+=1800",
  }
});
gsap.from('.cover-text-three h1', {
     scrollTrigger:{
          trigger: '.sec-three',
          start: '10% center',
          end: '40% center',
          scrub: true,
          
     },
     yPercent:100,
     ease: "power.inOut",
})

gsap.from('.list', {
     scrollTrigger:{
          trigger: '.sec-three',
          start: '40% center',
          end: '85% center',
          scrub: true,
          
     },
     yPercent:100,
     ease: "power.inOut",
})
gsap.from('.cover-text', {
     scrollTrigger:{
          trigger: '.sec-three',
          start: '40% center',
          end: '85% center',
          scrub: true,
      
     },
     xPercent:100,
     ease: "power.inOut",
     stagger:0.1,

})
gsap.from('.cover-text h1', {
     scrollTrigger:{
          trigger: '.sec-three',
          start: '40% center',
          end: '85% center',
          scrub: true,
      
     },
     yPercent:100,
     ease: "power.inOut",
     stagger:0.1,

})

/*
const gsapItem = gsap.utils.toArray('.list')
gsapItem.forEach((gslt) => {
   
    const cardImages  = gslt.querySelectorAll('.cover-text h1');

    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: gslt,
        }
    });   
    tl.from(cardImages,1,{  opacity:0,y:300,
      duration:1});
     
     gsap.from(gsapItem,{
          yPercent:100,
          scrollTrigger:{
               trigger: gsapItem,
               
               markers:true,
               scrub: true
           }
     })
})

*/


//sec-four
gsap.to('.bg', {
     scrollTrigger:{
          trigger: '.sec-four',
          start: 'top center',
          end: '85% center',
       
      
     },
     scaleX:0,
     transformOrigin:'right',
     ease: "power.inOut",
     stagger:0.1,

})

//sec-five
gsap.from('.absoluteCover h1 .char', {
     scrollTrigger:{
          trigger: '.sec-five',
          start: 'top center',
          end: '85% center',
  
     },
     color:'transparent',
     y:30,
     stagger:0.05,
     duration:0.1

})


//sec-six
gsap.to('.imgLocationMe', {
     scrollTrigger:{
          trigger: '.sec-six',
          start: 'top center',
          end: 'bottom center',
          scrub:true
       
      
     },
     yPercent:-10,
     ease: "power.inOut",
     stagger:0.1,

})