const body = document.querySelector('body');


const swiper_2 = new Swiper ('.swiper_2' , {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
})

const swiper_1 = new Swiper('.swiper_1', {
  thumbs: {
    swiper: swiper_2,
    
  },
  });


const swiper_3 = new Swiper('.swiper_3 ' , {
  slidesPerView: 5,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})