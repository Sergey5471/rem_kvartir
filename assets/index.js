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

const swiper = new Swiper('.questionsBox', {
	allowTouchMove: false,
	autoHeight: true,
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

const header = document.querySelector('header')
const mainBlock = document.querySelector('main')
const modalCalcBtns = document.querySelectorAll('.opros')
const modalOprosWindow = document.querySelector('.modal__opros')
const modalCloseBtn = document.getElementById('closeBtn')



modalCalcBtns.forEach(function (calcBtn) {
	calcBtn.addEventListener('click', function() {
		modalOprosWindow.classList.add('modal-open')
		modalCloseBtn.classList.add('modal-open')
		header.classList.add('shadow')
		mainBlock.classList.add('shadow')
	})
})
modalCloseBtn.addEventListener('click', function() {
	modalOprosWindow.classList.remove('modal-open')
	modalCloseBtn.classList.remove('modal-open')
	modalCallback.classList.remove('modal-open')
	header.classList.remove('shadow')
	mainBlock.classList.remove('shadow')
})


const modalCallback = document.querySelector('.modal__callback')
const modalCallbackTitle = document.querySelector('.modal__callback__title')
const modalCallbackText = document.querySelector('.modal__callback__text')
const modalCallbackBtn = document.querySelector('.modal__callback__btn')

const introBtn = document.querySelector('.callback')

introBtn.addEventListener('click', function () {
	modalCallbackTitle.innerHTML = 'Реализуем дизайн-интерьера бесплатно '
	modalCallbackText.innerHTML = 'При заказе ремонта мы вычитаем из работ стоимость дизайн проекта. Оставьте ваши данные и мы воплотим ваши желания в 3-d визуализации.'
	modalCallbackBtn.innerHTML = 'Оставить заявку на дизайн-проект'
	modalCallback.classList.add('modal-open')
	modalCloseBtn.classList.add('modal-open')
	header.classList.add('shadow')
	mainBlock.classList.add('shadow')
})

const serviceBtn = document.querySelector('.service__item-btn')

serviceBtn.addEventListener('click', function () {
	modalCallbackTitle.innerHTML = 'Приемка квартир от застройщика'
	modalCallbackText.innerHTML = 'При заказе ремонта мы делаем скидку и вычитаем стоимость приемки из сметы ремонта'
	modalCallbackBtn.innerHTML = 'Заказать приемку квартиры'
	modalCallback.classList.add('modal-open')
	modalCloseBtn.classList.add('modal-open')
	header.classList.add('shadow')
	mainBlock.classList.add('shadow')
})

const portfolioBtns = document.querySelectorAll('.portfolio__btn__callback')
portfolioBtns.forEach(function(portfolioBtn) {
	portfolioBtn.addEventListener('click', function () {
		modalCallbackTitle.innerHTML = 'Реализуем дизайн-интерьера бесплатно '
		modalCallbackText.innerHTML = 'При заказе ремонта мы вычитаем из работ стоимость дизайн проекта. Оставьте ваши данные и мы воплотим ваши желания в 3-d визуализации.'
		modalCallbackBtn.innerHTML = 'Оставить заявку на дизайн-проект'
		modalCallback.classList.add('modal-open')
		modalCloseBtn.classList.add('modal-open')
		header.classList.add('shadow')
		mainBlock.classList.add('shadow')
	})
})

const stagesBtn = document.querySelector('.stages__btn')

stagesBtn.addEventListener('click', function () {
	modalCallbackTitle.innerHTML = 'Закажите ремонт квартиры'
	modalCallbackText.innerHTML = 'Получите ремонт вашей мечты уже через 2 месяца без срывов сроков и неумелых мастеров'
	modalCallbackBtn.innerHTML = 'Оставить заявку на ремонт'
	modalCallback.classList.add('modal-open')
	modalCloseBtn.classList.add('modal-open')
	header.classList.add('shadow')
	mainBlock.classList.add('shadow')
})

