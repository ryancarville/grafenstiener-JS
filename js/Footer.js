function footer() {
	$('.footer').append(
		`<div id='footer'>
			<a onclick=welcome()>Home</a>	
			<a onclick=office()>Office</a>
			<a onclick=realEstate()>Real Estate</a>
			<a onclick=buy(properties)>Buy</a>
			<a onclick=rent(properties)>Rent</a>
			<a onclick=sell()>Sell</a>
			<a onclick=contact()>Contact</a>
		</div>`
	);
}
