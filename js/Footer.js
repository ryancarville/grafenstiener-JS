function footer() {
	setTimeout(function footer() {
		$('.footer').append(
			`<div class='footerBG'>
				<div class='newLetterFooterWrap'>
					<form class='newsLetterFooter' action='' method='POST' name='newsLetterFooter'>
						<p>Stay informed by joining our newsletter!</p>
						<label for='name'>Last Name</label><br>
						<input class='newsLetterFooter' id='newsLetterFooterLastName' name='name' required><br><br>
						<label for='firstName'>First Name</label><br>
						<input class='newsLetterFooter' id='newsLetterFooterFirstName' name='firstName' required><br><br>
						<label for='email'>Email</label><br>
						<input class='newsLetterFooter' id='newsLetterFooterEmail' name='email' required><br><br>
						<button type='submit' id='newsLetterFooterSubmit'>Submit</button>
					</form>
				</div>			
				<div id='footerLinks'>
					<span id='footerHome' onclick=welcome()>Zuhause</span>	
					<span id='footerOffice' onclick=office()>Büro</span>
					<span id='footerRealEstate' onclick=realEstate()>Immobilien</span>
					<span id='footerBuy' onclick=results(properties)>Kaufen</span>
					<span id='footerRent' onclick=results(properties)>Miete</span>
					<span id='footerSell' onclick=sell()>verkaufen</span>
					<span id='footerReferences'onclick=references()>Referenz</span>
					<span id='footerContact' onclick=contact()>Kontakt</span>
					<span id='footerLegal' onclick=legal()>Legal</span>
					
				</div>
				<a href='http://beardystudios.ch' id='beardyLink' target='_blank'>Webdesign & Development by Beardy Studios</a>
			</div>	`
		);
	}, 2200);
}
