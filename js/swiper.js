const swiper = new Swiper('.swiper-container', {

    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      breakpoints: {
    // when window width is >= 320px
    320: {
      navigation:false,
    },
    // when window width is >= 480px
    480: {
      arrows:false,

    },
    // when window width is >= 640px
    640: {
      arrows:false,

    }
  }
 
  });