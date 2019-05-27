$(document).ready(() => {
	//scroll to top of page when loaded
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	//mobile menu display toggle
	$('.mobileMenu').on('click', () => {
		$('.navMobileLinks').toggleClass('mobileMenuShow');
	});
	$('.navMobileLinks').on('click', () => {
		$('.navMobileLinks').toggleClass('mobileMenuShow');
	});
	window.addEventListener('load', function() {
		//loading screen to DOM
		const loadingScreen = document.getElementById('loadingScreen');
		//load home page elements
		welcomeSearch();
		welcome();
		footer();
	});
});

//set history API for home
const route = '';
window.history.pushState({ route }, '', '/index.html');
console.log(history.state);

//set history API for desktop logo
$('#navHome').on('click', function(e) {
	let route = $(this).attr('route');
	window.history.pushState({ route }, '', `${route}`);
});
//set history API for all desktop nav
$('#desktopLinks li a').on('click', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `${route}`);
});

//back button evaluation
window.onpopstate = function() {
	console.log(history.state);
	let route = history.state['route'];
	switch (route) {
		case '':
			welcome();
			break;
		case 'index.html':
			welcome();
			break;
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
		case 'listings':
			results();
			break;
	}
};
