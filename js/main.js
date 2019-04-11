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
