function rent(properties) {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='buyPage'>
            <header>
                <h2>${properties.length} Properties for you</h2>
			</header>
			<div class='sortListings'></div>
            <div id='listingResults'>
            </div>
        </div>`
	);
	console.log(properties);
	let allRentals = properties.map(listing => getListing(listing)).join('');
	document.getElementById('listingResults').innerHTML = allRentals;
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
	searchModuel();
}
