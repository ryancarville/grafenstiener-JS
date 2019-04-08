function getListing(listing) {
	const listItem = `<div class='listing' id='${listing.id}'>
	<img src='images/listings/
	${listing.image1}'
	class='listingImg' id='image${listing.id}'> 
	<p>ID:  
	${listing.id} 
	<br>
	Property Name:  
	${listing.name} 
	<br>
	Address: 
	${listing.address} 
	<br>
	Canton: 
	${listing.canton} 
	<br>
	City: 
	${listing.city} 
	<br>
	Price: 
	${listing.price} 
	<br>
	Size:
	${listing.size}
	<br>
	<button class='listingInfoBTN' id='listingBTN${
		listing.id
	}' type='button' >See more Info</button>
	</p>
	</div>
	`;
	return listItem;
}
