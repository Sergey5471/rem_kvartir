const swiperFirst = new Swiper('.swiperFirst', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});
const swiperSecond = new Swiper('.swiperSecond', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});
const swiperThird = new Swiper('.swiperThird', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});
const swiperFourth = new Swiper('.swiperFourth', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});
const swiperFifth = new Swiper('.swiperFifth', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});
const swiperSixth = new Swiper('.swiperSixth', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
});




const acordeonBoxes = document.querySelectorAll('.acordeon__box')
acordeonBoxes.forEach(function (box) {
	box.addEventListener('click', function () {
		const acordeonBox = box.lastElementChild
		acordeonBox.classList.toggle('acordeon__open')
		box.classList.toggle('btn__open')
	})
})

