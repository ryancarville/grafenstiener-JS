const welcomePage = function welcome() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.footer').empty();
	footer();
	$('.main').empty();
	slideShow();
	$('.main').prepend(`<div class='welcomePage'></div>`);
	setTimeout(function welcomeContent() {
		$('.welcomePage').prepend(`
		<div class='welcomeContent'>
			<h3>Mit Kompetenz und Menschenkenntnis</h3>
			<h2 id='welcomeMsg'>Herzlich willkommen!</h2>
		</div><div class='sortHome'></div>
		`),
			searchModule();
	}, 2000);

	$('#navHomeText').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navOffice, #navRealEstate, #navServices, #navRef, #navContact'
		).removeClass('navActive');
	});
	$('#navOffice').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navRealEstate, #navServices, #navRef, #navContact'
		).removeClass('navActive');
	});
	$('#navRealEstate').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOffice, #navServices, #navReferences, #navContact'
		).removeClass('navActive');
	});
	$('#navServices').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOffice, #navRealEstate, #navReferences, #navContact'
		).removeClass('navActive');
	});
	$('#navReferences').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOffice, #navRealEstate, #navServices, #navContact'
		).removeClass('navActive');
	});
	$('#navContact').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOffice, #navRealEstate, #navServices, #navReferences'
		).removeClass('navActive');
	});
	$('#navLogo').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOffice, #navRealEstate, #navServices, #navReferences, #navContact'
		).removeClass('navActive');
	});

	history.pushState(null, null, 'index.html');
	if (window.location.hash === '#en') {
		$('#welcomeMsg').text(languages.en.welcome);
	} else if (window.location.hash === '#de') {
		$('#welcomeMsg').text(languages.de.welcome);
	} else {
		$('#welcomeMsg').text(languages.de.welcome);
	}
};
