function getListing(listing) {
	const listItem = `<div class='listing' id='${listing.id}'>
	<img src='../images/listings/
	${listing.image1}'
	class='listingImg' id='image${listing.id}'> 
	<p>
	Preis:
	${listing.price} CHF
	<br>
	ID: 
	${listing.id} 
	<br>
	Name des Anwesens:
	${listing.name} 
	<br>
	Address:
	${listing.address} 
	<br>
	Kanton: 
	${listing.canton} 
	<br>							
	Stadt: 
	${listing.city} 
	<br>
	Größe:
	${listing.size}<br>
	<button class='listingInfoBTN' id='listingBTN${
		listing.id
	}' type='button' >Weitere Infos</button>
	</p>
	</div>
	`;
	return listItem;
}
