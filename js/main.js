$(document).ready(() => {
	window.addEventListener('load', function() {
		const loadingScreen = document.getElementById('loadingScreen');

		welcomeSearch();
		welcome();
		footer();

		document.body.removeChild(loadingScreen);
	});

	$('.mobileMenu').on('click', () => {
		$('.navMobileLinks').toggleClass('mobileMenuShow');
	});
	$('.navMobileLinks').on('click', () => {
		$('.navMobileLinks').toggleClass('mobileMenuShow');
	});
});

$('#desktopLinks li a').on('click', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `/${route}`);
	console.log(history.state);
});
const route = 'welcome';
window.history.pushState({ route }, '', '/');

window.onpopstate = function() {
	console.log(history.state);
	let route = history.state['route'];
	console.log(route);
	switch (route) {
		case 'welcome':
			welcome();
			break;
		case 'office':
			office();
			break;
		case 'realEstate':
			realEstate();
			break;
		case 'services':
			services();
			break;
		case 'references':
			references();
			break;
		case 'contact':
			contact();
			break;
	}
};
