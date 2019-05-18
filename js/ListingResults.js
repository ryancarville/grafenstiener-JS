function results(properties) {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	let fullListingResults = properties
		.map(listing => getListing(listing))
		.join('');
	$('.main').empty();
	$('.main').append(
		`<div class='resultsPage'>
            <header>
                <h2>${properties.length} Properties</h2>
			</header>
			<div class='sortListings'></div>

            <div id='listingResults'>
            </div>
        </div>`
	);
	searchModule();
	document.getElementById('listingResults').innerHTML = fullListingResults;
	for (let i = 0; i < properties.length; i++) {
		let id = `#listingBTN${properties[i].id}`;
		$(id).on('click', () => {
			listingPage(properties[i]);
		});
		let imgID = `#image${properties[i].id}`;
		$(imgID).on('click', () => {
			listingPage(properties[i]);
		});
	}
}
