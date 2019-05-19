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

$(document).ready(() => {
	let nav, content, fetchAndInsert;

	nav = $('nav#navLinks');
	content = $('main#main');

	//fetches and inserts content in container
	fetchAndInsert = href => {
		$.ajax({
			url:
				'file:///Users/ryancarville/Desktop/Gr%C3%A4fensteinerRealEstate/pureJSSite/' +
				href,
			method: 'GET',
			cache: false,
			success: () => {
				content.html(data);
			},
			error: () => {
				return 'File could not be found.';
			}
		});
	};

	nav.find('a').on('click', e => {
		var href = $(this).attr('href');
		console.log(href);

		//Manipulate History
		history.pushState(null, null, href);

		//Fetch and insert content
		fetchAndInsert(href);
		e.preventDefault();
	});
});
