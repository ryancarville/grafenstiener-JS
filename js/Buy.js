const properties = [
	{
		id: 1,
		name: 'Property One',
		address: 'Feldhofstrasse 66',
		city: 'Zurich',
		canton: 'Zurich',
		size: 2000 + ' sq meters',
		price: 1 + ' Million',
		image1: 'CommunityExterior3.jpg',
		image2: 'home2.jpg',
		image3: 'home3.jpg',
		docs: 'docs/houseDocs.pdf'
	},
	{
		id: 2,
		name: 'Property 2',
		address: 'Feldhofstrasse 66',
		city: 'Zurich',
		canton: 'Zurich',
		size: 1300 + ' sq meters',
		price: 650000,
		image1: 'home2.jpg',
		image2: 'CommunityExterior3.jpg',
		image3: 'home3.jpg',
		docs: 'docs/houseDocs.pdf'
	},
	{
		id: 3,
		name: 'Property Three',
		address: 'Feldhofstrasse 90',
		city: 'Zurich',
		canton: 'Zurich',
		size: 900 + ' sq meters',
		price: 2 + ' Million',
		image1: 'home3.jpg',
		image2: 'home2.jpg',
		image3: 'CommunityExterior3.jpg',
		docs: 'docs/houseDocs.pdf'
	},
	{
		id: 4,
		name: 'Property 4',
		address: 'Feldhofstrasse 16',
		city: 'Zurich',
		canton: 'Zurich',
		size: 800 + ' sq meters',
		price: 1.5 + ' Million',
		image1: 'CommunityExterior3.jpg',
		image2: 'home2.jpg',
		image3: 'home3.jpg',
		docs: 'docs/houseDocs.pdf'
	},
	{
		id: 5,
		name: 'Property 4',
		address: 'Feldhofstrasse 16',
		city: 'Zurich',
		canton: 'Zurich',
		size: 1034 + ' sq meters',
		price: 1.5 + ' Million',
		image1: 'home4.jpg',
		image2: 'home2.jpg',
		image3: 'home3.jpg',
		docs: 'docs/houseDocs.pdf'
	}
];

function buy(properties) {
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
	let myHTMLString = properties.map(listing => getListing(listing)).join('');
	document.getElementById('listingResults').innerHTML = myHTMLString;
	for (let i = 0; i < properties.length; i++) {
		let id = `#listingBTN${properties[i].id}`;
		$(id).on('click', () => {
			listingPage(properties[i]);
		});
	}
	searchModuel();
}
