const properties = [
	{
		id: 1,
		name: 'Property One',
		address: 'Feldhofstrasse 66',
		city: 'Zurich',
		canton: 'Zurich',
		size: 2000,
		price: 1 + 'Million',
		image: 'CommunityExterior3.jpg'
	},
	{
		id: 2,
		name: 'Property 2',
		address: 'Feldhofstrasse 66',
		city: 'Zurich',
		canton: 'Zurich',
		size: 2000,
		price: 650000,
		image: 'home2.jpg'
	},
	{
		id: 3,
		name: 'Property Three',
		address: 'Feldhofstrasse 90',
		city: 'Zurich',
		canton: 'Zurich',
		size: 1000,
		price: 2 + 'Million',
		image: 'home3.jpeg'
	},
	{
		id: 4,
		name: 'Property 4',
		address: 'Feldhofstrasse 16',
		city: 'Zurich',
		canton: 'Zurich',
		size: 2000,
		price: 1.5 + 'Million',
		image: 'home4.jpg'
	}
];

function buy(properties) {
	$('.main').empty();
	$('.main').append(
		`<div class='buyPage'>
            <header>
                <h2>4 Properties for you</h2>
            </header>
            <div id='listingResults'>
            </div>
        </div>`
	);
	console.log(properties);
	document.getElementById('listingResults').innerHTML = properties.map(
		listing => [
			'Id: ' + listing.id,
			'Name: ' + listing.name,
			'Address: ' + listing.address
		]
	);
	console.log(document.getElementById('listingResults'));
}
