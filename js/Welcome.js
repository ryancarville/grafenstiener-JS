function welcome() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});

	$('.main').empty();
	slideShow();
	$('.main').append(
		`<div class='welcomePage'>
			
			<div class='welcomeMsg' >
				<h2 id='welcomeMsg'>Herzlich willkommen!</h2>
			</div>
			
		</div>
		`
	);
	setTimeout(function welcomeContent() {
		$('.welcomePage').prepend(`
		<div class='welcomeContent'>
			<h3>Header</h3>
			<p>Lorem ipsum dolor sit amet, vim case minim consulatu ad, mei tantas consul appetere ex. Eu tamquam tibique maluisset eum. Ne pro erant possit iudicabit, eu aliquid sapientem has, no cum tollit oportere repudiandae. Ad eum cibo aeterno iracundia, detraxit consetetur mei ut.</p>
		</div>`);
	}, 3000);

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
	if (window.location.hash === '#en') {
		$('#welcomeMsg').text(languages.en.welcome);
	} else if (window.location.hash === '#de') {
		$('#welcomeMsg').text(languages.de.welcome);
	} else {
		$('#welcomeMsg').text(languages.de.welcome);
	}
}
