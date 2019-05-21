window.addEventListener('load', function() {
	const loadingScreen = document.getElementById('loadingScreen');

	welcomeSearch();
	welcomePage();
	footer();

	document.body.removeChild(loadingScreen);
});

$('.mobileMenu').on('click', () => {
	$('.navMobileLinks').toggleClass('mobileMenuShow');
});
$('.navMobileLinks').on('click', () => {
	$('.navMobileLinks').toggleClass('mobileMenuShow');
});

const routes = {
	'/index.html': welcomePage,
	'/office': officePage,
	'/realEstate': realEstatePage,
	'/services': servicesPage,
	'/references': referencesPage,
	'/contact': contactPage
};

let contentDiv = document.getElementById('main');
contentDiv.innerHTML = routes[window.location.pathname];
console.log(window.location.pathname);

let onNavItemClick = pathName => {
	window.history.pushState({}, pathName, window.location.origin + pathName);
	contentDiv.innerHTML = routes[pathName];
};

window.onpopstate = () => {
	contentDiv.innerHTML = routes[window.location.pathname];
};
