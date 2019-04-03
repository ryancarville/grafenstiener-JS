function welcome() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});

	$('.main').empty();
	slideShow();
	$('.main').append(
		`<div class='welcomePage'>
			<div class='welcomeMsg'>
				<h2>Welcome!</h2>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
				</p>
			</div>
		</div>`
	);

	$('#navOffice').on('click', function() {
		$(this).addClass('navActive');
		$('#navRealEstate, #navServices, #navRef, #navContact').removeClass(
			'navActive'
		);
	});
	$('#navRealEstate').on('click', function() {
		$(this).addClass('navActive');
		$('#navOffice, #navServices, #navReferences, #navContact').removeClass(
			'navActive'
		);
	});
	$('#navServices').on('click', function() {
		$(this).addClass('navActive');
		$('#navOffice, #navRealEstate, #navReferences, #navContact').removeClass(
			'navActive'
		);
	});
	$('#navReferences').on('click', function() {
		$(this).addClass('navActive');
		$('#navOffice, #navRealEstate, #navServices, #navContact').removeClass(
			'navActive'
		);
	});
	$('#navContact').on('click', function() {
		$(this).addClass('navActive');
		$('#navOffice, #navRealEstate, #navServices, #navReferences').removeClass(
			'navActive'
		);
	});
	$('#navLogo').on('click', function() {
		$(this).addClass('navActive');
		$(
			'#navOffice, #navRealEstate, #navServices, #navReferences, #navContact'
		).removeClass('navActive');
	});
}
