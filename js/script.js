const social = document.querySelector('.wrapper_social');
const socialIcons = document.querySelectorAll('.inative');

function active() {

	socialIcons.forEach(function(item) {

		item.classList.toggle('active');
	})
}

social.addEventListener('click', active);