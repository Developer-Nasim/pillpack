(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');
    $('.manu-overlay').toggleClass('show');
  }); 



  // Sticky Header
  function StickyHeader() {
    
    window.addEventListener('scroll', (e) => {
      const header = document.querySelector('.header-area')
      const img = header.querySelector('.logo-area img')
      if (window.scrollY > 30) {
        if (!header.classList.contains('active')) {
          header.classList.add('active')
          img.src = "assets/img/logo2.png"
        } 
      }else{ 
        if (header.classList.contains('active')) {
          header.classList.remove('active')   
          img.src = "assets/img/logo.png"
        }  
      }
    })
  }
  StickyHeader()
  
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

  // Sticky Menu
  function StickyMenu() {
    const GuidBlk = document.querySelector('.guidings')
    const fBlk = GuidBlk.querySelector('.first_guid_blk')
    const fBlk2 = GuidBlk.querySelector('.second_guid_blk')
    const fBlk3 = GuidBlk.querySelector('.last_guid_blk')
    const GuidMenu = document.querySelectorAll('.guid-menu li')
    

    function MenuActivation() {
 

  
      if ((GuidBlk.offsetTop + fBlk.scrollHeight - 300) >= window.scrollY) {
        GuidMenu.forEach(mn => {
          mn.classList.remove('active') 
        }) 
        GuidMenu[0].classList.add('active')
      }else if((GuidBlk.offsetTop + fBlk.scrollHeight + fBlk2.scrollHeight - 500) >= window.scrollY){
        GuidMenu.forEach(mn => {
          mn.classList.remove('active')
        }) 
        GuidMenu[1].classList.add('active') 
      }else if((GuidBlk.offsetTop + fBlk2.scrollHeight + fBlk3.scrollHeight) >= window.scrollY){
        GuidMenu.forEach(mn => {
          mn.classList.remove('active')
        }) 
        GuidMenu[2].classList.add('active')  
      }
   

    }






    window.addEventListener('scroll', () => { 
      if ((GuidBlk.offsetTop <= window.scrollY) && ((GuidBlk.offsetTop + GuidBlk.scrollHeight) - 800) >= window.scrollY) {
        GuidBlk.classList.add('sticky') 
        MenuActivation()
      }else{  
        GuidBlk.classList.remove('sticky')
      }
    })
  }

  

  window.addEventListener('load', (e) => {
    StickyMenu()

    // Load the modal
    $("#exampleModal").modal('show');
  })

 
 
 
  
 
})(jQuery);
