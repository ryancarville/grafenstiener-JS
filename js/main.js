window.addEventListener('load', function() {
	const loadingScreen = document.getElementById('loadingScreen');
	document.body.removeChild(loadingScreen);
	welcomeSearch();
	welcome();
	footer();
	imageCarousel();
});
