window.addEventListener('load', function() {
	const loadingScreen = document.getElementById('loadingScreen');

	welcomeSearch();
	welcome();
	footer();

	document.body.removeChild(loadingScreen);
	$('.mobileMenu').on('click', () => {
		$('.navMobileLinks').toggleClass('mobileMenuShow');
	});
	$('.navMobileLinks').on('click', () => {
		$('.navMobileLinks').toggleClass('mobileMenuShow');
	});
});

$(document).ready(() => {
	let nav, content, fetchAndInsert;

	nav = $('nav#navLinks');
	content = $('main#main');

	fetchAndInsert = () => {};

	nav.find('a').on('click', e => {
		var href = $(this).attr('href');
		console.log(href);

		//Manipulate History
		history.pushState(null, null, href);
		e.preventDefault();
	});
});
