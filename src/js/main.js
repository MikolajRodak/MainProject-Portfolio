const burgerBtn = document.querySelector('.hamburger--slider')
const navItem = document.querySelectorAll('li')
const nav = document.querySelector('.nav')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const img = document.querySelector('.section-img')

const handleBurer = () => {
	burgerBtn.classList.toggle('is-active')

	if (burgerBtn.classList.contains('is-active')) {
		openNav()
	} else {
		closeNav()
	}

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			closeNav()
		})
	})
}

const closeNav = () => {
	menu.style.transform = 'translateX' + '(-1700px)'
	body.classList.remove('body-shadow')
	img.style.visibility = 'visible'
	burgerBtn.classList.remove('is-active')
}

const openNav = () => {
	menu.style.transform = 'translateX' + '(-20px)'
	body.classList.add('body-shadow')
	img.style.visibility = 'hidden'
}

let offset = 200
window.onscroll = () => {
	if (window.scrollY >= offset) {
		nav.classList.add('sticky')
	} else {
		nav.classList.remove('sticky')
	}
}

burgerBtn.addEventListener('click', handleBurer)
