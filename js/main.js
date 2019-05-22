$(document).ready(() => {
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
		//remove load screen
		document.body.removeChild(loadingScreen);
	});
});

//set history API for desktop logo
$('#navHome').on('click', function(e) {
	let route = $(this).attr('route');
	window.history.pushState({ route }, '', `/${route}`);
});
//set history API for all desktop nav
$('#desktopLinks li a').on('click', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `/${route}`);
});

//sets history API for listing page buttons
$(document).on('click', '#buyButton', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `/realEstate/${route}`);
});
$(document).on('click', '#investButton', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `/realEstate/${route}`);
});
$(document).on('click', '#resButton', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `/realEstate/${route}`);
});
$(document).on('click', '#rentButton', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `/realEstate/${route}`);
});
$(document).on('click', '#officeButton', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `/realEstate/${route}`);
});
$(document).on('click', '#rentResButton', function(e) {
	let route = $(this).attr('route');
	console.log(route);
	window.history.pushState({ route }, '', `/realEstate/${route}`);
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

function refreshToIndex() {
	const refresh = {};
	window.history.replaceState({ refresh }, '', '/index.html');
	window.location.pathname = history.state['refresh'];
	console.log(window.location.pathname);
	return;
}
window.onbeforeunload = refreshToIndex;
