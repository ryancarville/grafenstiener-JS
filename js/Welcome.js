function welcome() {
	//scroll to top of page when loaded
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	//clear the stage
	$('.main').empty();
	//load the welcome slide show
	slideShow();
	//prepend the welcoem page div
	$('.main').prepend(`<div class='welcomePage'></div>`);
	//set time out for welcome content
	setTimeout(function welcomeContent() {
		$('.welcomePage').prepend(`
		<div class='welcomeContent'>
			<h3>mit kompetenz und menschenkenntnis</h3>	
		<div class='sortHome'></div></div>
		`),
			searchModule();
	}, 2000);
	//nav link animation
	$('#navHomeText').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navOfficeText, #navRealEstateText, #navServicesText, #navReferencesText, #navContactText'
		).removeClass('navActive');
	});
	$('#navOfficeText').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navRealEstateText, #navServicesText, #navReferencesText, #navContactText'
		).removeClass('navActive');
	});
	$('#navRealEstateText').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOfficeText, #navServicesText, #navReferencesText, #navContactText'
		).removeClass('navActive');
	});
	$('#navServicesText').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOfficeText, #navRealEstateText, #navReferencesText, #navContactText'
		).removeClass('navActive');
	});
	$('#navReferencesText').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOfficeText, #navRealEstateText, #navServicesText, #navContactText'
		).removeClass('navActive');
	});
	$('#navContactText').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOfficeText, #navRealEstateText, #navServicesText, #navReferencesText'
		).removeClass('navActive');
	});
	$('#navLogo').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navHomeText, #navOfficeText, #navRealEstateText, #navServicesText, #navReferencesText, #navContactText'
		).removeClass('navActive');
	});
}
