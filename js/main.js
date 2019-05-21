window.addEventListener('load', function() {
	const loadingScreen = document.getElementById('loadingScreen');

	welcomeSearch();
	footer();

	document.body.removeChild(loadingScreen);
});

$('.mobileMenu').on('click', () => {
	$('.navMobileLinks').toggleClass('mobileMenuShow');
});
$('.navMobileLinks').on('click', () => {
	$('.navMobileLinks').toggleClass('mobileMenuShow');
});

let router = new Router({
	mode: 'history',
	page404: function(path) {
		console.log('"/' + path + '" Page not found');
	}
});

router.add('', welcomePage);

router.add('office', office);

router.add('realEsatate', realEstatePage);

router.add('services', servicesPage);

router.add('references', referencesPage);

router.add('contact', contactPage);

router.addUriListener();

router.navigateTo('');
