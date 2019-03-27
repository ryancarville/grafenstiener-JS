function getListing(listing) {
	return (
		<div class='searchItem' id={listing.id}>
			<img
				src={'images/listings/' + listing.image}
				alt={'image of: ' + listing.name}
				class='searchImg'
			/>
			<p>
				Property name: {listing.name}
				<br />
				Address: {listing.address}
				<br />
				City: {listing.city}
				<br />
				Canton: {listing.canton}
				<br />
				Price: {listing.price}
				<br />
				<a href={listing.link}>Link</a>
			</p>
		</div>
	);
}
