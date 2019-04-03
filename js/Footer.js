function footer() {
	$('.footer').append(
		`<div id='footer'>
			<span onclick=welcome()>Home</span>	
			<span onclick=office()>Office</span>
			<span onclick=realEstate()>Real Estate</span>
			<span onclick=buy(properties)>Buy</span>
			<span onclick=rent(properties)>Rent</span>
			<span onclick=sell()>Sell</span>
			<span onclick=sell()>References</span>
			<span onclick=contact()>Contact</span>
		</div>`
	);
}
