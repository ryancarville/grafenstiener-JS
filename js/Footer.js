function footer() {
	$('.footer').append(
		`<div id='footer'>
			<span id='footerHome' onclick=welcome()>Zuhause</span>	
			<span id='footerOffice' onclick=office()>Büro</span>
			<span id='footerRealEstate' onclick=realEstate()>Grundeigentum</span>
			<span id='footerBuy' onclick=results(properties)>Kaufen</span>
			<span id='footerRent' onclick=results(properties)>Miete</span>
			<span id='footerSell' onclick=sell()>verkaufen</span>
			<span id='footerReferences'onclick=references()>Verweise</span>
			<span id='footerContact' onclick=contact()>Kontakt</span>
			<span id='footerLegal' onclick=legal()>Legal</span>
		</div>`
	);
	if (window.location.hash === '#en') {
		$('#footerHome').text('Home');
		$('#footerOffice').text('office');
		$('#footerRealEstate').text('Real Estate');
		$('#footerBuy').text('Buy');
		$('#footerRent').text('Rent');
		$('#footerSell').text('Sell');
		$('#footerReferences').text('References');
		$('#footerContact').text('Contact');
	}
}
