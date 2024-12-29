const swiper_2 = new Swiper('.swiper_2', {
	spaceBetween: 10,
	slidesPerView: 5,
	freeMode: true,
});

const swiper_1 = new Swiper('.swiper_1', {
	thumbs: {
		swiper: swiper_2,
	},
});

const swiper_3 = new Swiper('.swiper_3 ', {
	slidesPerView: 5,
  loop: !0,
	autoplay: {
		delay: 2500,
		disableOnInteraction: !0
	},

  breakPoints: {
    768:{
      slidesPerView: 1,
    }
  }


  
});

const menuButton = document.querySelector('.menu_btn'),
	menuCloseButton = document.querySelector('.nav__close'),
	menu = document.querySelector('.header_nav_w'),
	body = document.querySelector('.body');
menuButton.addEventListener('click', function () {
	menu.classList.add('active');
}),
	menuCloseButton.addEventListener('click', function () {
		menu.classList.remove('active');
	});
