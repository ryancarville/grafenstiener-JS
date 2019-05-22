function footer() {
	setTimeout(function footer() {
		$('.footer').append(
			`<div class='footerBG'>
				<div class='newLetterFooterWrap'>
					<form class='newsLetterFooter' action='' method='POST' name='newsLetterFooter'>
						<p>Bleiben Sie auf dem Laufenden und abonnieren Sie unseren Newsletter!</p>
						<label for='name'>Last Name</label><br>
						<input class='newsLetterFooter' id='newsLetterFooterLastName' name='name' required><br><br>
						<label for='firstName'>First Name</label><br>
						<input class='newsLetterFooter' id='newsLetterFooterFirstName' name='firstName' required><br><br>
						<label for='email'>Email</label><br>
						<input class='newsLetterFooter' id='newsLetterFooterEmail' name='email' required><br><br>
						<label for='msg'></label>
						<textarea 
							class='newsLetterFooter' 
							id='newsLetterFooterMsg' 
							name='msg' 
							placeholder='Ihre Nachricht hier...'
							onfocus="this.placeholder=''" 
							onblur="this.placeholder='Ihre Nachricht hier...'"
							
						/>
						<button type='submit' id='newsLetterFooterSubmit'>Nachricht senden</button>
					</form>
				</div>			
				<div id='footerLinks'>
					<span id='footerOffice' onclick=office()>Büro</span>
					<span id='footerRealEstate' onclick=realEstate()>Immobilien</span>
					<span id='footerServices' route="services" onclick="$(services)">Dienstleistungen</span>
					<span id='footerReferences'onclick=references()>Kundenstimmen</span>
					<span id='footerContact' onclick=contact()>Kontakt</span>
					<span id='footerLegal' onclick=legal()>Legal</span>
					
				</div>
				<div class='footerLocInfo'>
					Gräfensteiner | Swiss Real Estate
					<br>
					Feldhofstrasse 66
					<br>
					8706 Meilen, CH
					<br>
					+41(79)483 23 28
					<br>
					<a href="mailto:info@grafensteiner-real-estate.ch">info@grafensteiner-real-estate.ch</a>
				</div>
				<a href='http://beardystudios.ch' id='beardyLink' target='_blank'>Webdesign & Development by Beardy Studios</a>
			</div>	`
		);
	}, 2200);
}
