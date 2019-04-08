window.addEventListener('load', function() {
	const loadingScreen = document.getElementById('loadingScreen');
	document.body.removeChild(loadingScreen);
	welcomeSearch();
	welcome();
	footer();
	imageCarousel();
	$('.mobileMenu').on('click', () => {
		$('.navMobileLinks').toggleClass('mobileMenuShow');
	});
	$('.navMobileLinks').on('click', () => {
		$('.navMobileLinks').toggleClass('mobileMenuShow');
	});
});
