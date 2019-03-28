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
            <div id='listingResults'>
            </div>
        </div>`
	);
	console.log(properties);
	let myHTMLString = properties.map(listing => getListing(listing)).join('');
	document.getElementById('listingResults').innerHTML = myHTMLString;
	for (let i = 0; i < properties.length; i++) {
		let id = `#listingBTN${properties[i].id}`;
		$(id).on('click', () => {
			listingPage(properties[i]);
		});
	}
	console.log(document.getElementById('listingResults'));
}
