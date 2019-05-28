function footer() {
	setTimeout(function footer() {
		$('.footer').append(
			`<div class='footerBG'>
				<div class='newLetterFooterWrap'>
					<label for='newsLetterFooter'><b>Newsletter</b><br>bitte füllen sie die felder in</label>
					<form 
						class='newsLetterFooter' 
						id='newsletterForm'
						name='newsLetterFooter'
						method='post'
						action='sendNewsletterForm.php'>
						<label for='lastName'>Nachname*</label><br>
						<input 
							class='newsLetterFooter' 
							id='newsLetterFooterLastName' 
							name='lastName' 
							required>
							<br><br>
						<label for='firstName'>Vorname*</label><br>
						<input 
							class='newsLetterFooter' 
							id='newsLetterFooterFirstName' 
							name='firstName' 
							required>
							<br><br>
						<label for='email'>Email*</label><br>
						<input 
							class='newsLetterFooter' 
							id='newsLetterFooterEmail' 
							name='email' 
							required>
							<br><br>
						
						<span id='nlErrorMsg'></span>
						<span id='nlSuccessMsg'></span>
						<button 
							type='button' 
							name='submit' 
							id='nlSubmit'>
							Abonnieren
						</button>
					</form>
				</div>			
				<div id='footerLinks'>
					<span id='footerOffice' onclick=office()>Büro</span>
					<span id='footerRealEstate' onclick=realEstate()>Immobilien</span>
					<span id='footerServices' route="services" onclick="$(services)">Dienstleistungen</span>
					<span id='footerReferences'onclick=references()>Kundenstimmen</span>
					<span id='footerContact' onclick=contact()>Kontakt</span>				
				</div>
				<div class='footerLeft'>
					<div class='footerLocInfo'>
						Gräfensteiner Swiss Real Estate<br>
						Feldhofstrasse 66<br>
						CH-8706 Meilen<br>	
						Tel +41 44 550 03 00
						<br>
						<a href="mailto:info@graefensteiner.ch">info@graefensteiner.ch</a>	
					</div>
					<div id='footerLeftLinks'>
						<span class='footerLegal' onclick=legal()>Impressum Datenschutzerklärung</span><br><br>
						<a href='http://beardystudios.ch' id='beardyLink' target='_blank'>Webdesign & Development by Beardy Studios</a>
					</div>
					
				</div>
				<div class='copyright'>
					<span>©Gräfensteiner Swiss Real Estate 2019 All Rights Reserved</span>
				</div>
			</div>`
		);
	}, 2200);
	setTimeout(function() {
		$('#nlSubmit').on('click', function(e) {
			e.preventDefault();
			console.log('news form clicked');
			let lastName = $('#newsLetterFooterLastName').val();
			let firstName = $('#newsLetterFooterFirstName').val();
			let email = $('#newsLetterFooterEmail').val();
			let message = $('#newsLetterFooterMsg').val();
			if (lastName == '' || firstName == '' || email == '') {
				$('#nlErrorMsg').html('All feilds with a * are required');
			} else {
				$('#nlErrorMsg').html('');
				$.ajax({
					type: 'POST',
					url: 'sendNewsletterForm.php',
					data: {
						lastName: lastName,
						firstName: firstName,
						email: email,
						message: message
					},
					success: function(data) {
						$('#newsletterForm').trigger('reset');
						$('#nlSuccessMsg')
							.fadeIn()
							.html(data);
						setTimeout(function() {
							$('#nlSuccessMsg').fadeOut('slow');
						}, 5000);
					}
				});
			}
			return false;
		});
	}, 3000);
}
