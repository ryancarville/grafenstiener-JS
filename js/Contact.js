function contact() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='contactPage'>
			<div class='headers'>
				<section class='contactHeader'>
					<h2 class='header' id='contactHeader'>Wir sind gerne für Sie da und freuen uns auf Ihre Kontaktaufnahme.</h2>
					<h3 class='info'>
						<div>
							<img src='images/contact/location.png' alt='location icon'/><br>
							Gräfensteiner Swiss Real Estate<br>
							Feldhofstrasse 66<br>
							CH-8706 Meilen
						</div>
						<div>
						<img src='images/contact/email.png' alt='email icon'/><br>
						<a class='emailLink' href='mailto:info@graefensteiner.ch'>
							info@graefensteiner.ch
						</a><br><br>
						</div>
						<div>
						<img src='images/contact/phone.png' alt='phoneicon' />
						<p>
							Tel +41 44 550 03 00
						</p>
						</div>
					</h3>
				</section>
			</div>
				<form
					name='contactForm'
					id='contactForm'
					enctype='multipart/form-data'
					method='post'
					action='sendEmail.php'>	
					<div id='genderRadio'>
						<div class='mrRadio'>
							<input
								type='checkbox'
								class='checkBtn'
								name='gender'
								id='mrRadio'
								value='Herr'
							/>
							<label for='mrRadio'></label>
							<p>Herr</p>
						</div>
						<div class='mrsRadio'>
							<input
								type='checkbox'
								class='checkBtn'
								name='gender'
								id='mrsRadio'
								value='Frau'
							/>
							<label for='mrsRadio'></label>
							<p>Frau</p>
						</div>
					</div>	
					<div id='lastNameInput'>
						<label for='lastName'>Surname*</label>
						<br/>
						<input
							type='text'
							id='lastName'
							name='lastName'
							class='contactFormInput'
							required
						/>
					</div>
					<div id='firstNameInput'>
						<label for='firstName'>Vorname*</label>
						<br/>
						<input
							type='text'
							id='firstName'
							name='firstName'
							class='contactFormInput'
							required
						/>
					</div>
					<div id='companyInput'>
						<label for='company'>Firma</label>
						<br/>
						<input
							type='text'
							id='company'
							name='company'
							class='contactFormInput'			
						/>
					</div>
					<div id='emailInput'>	
						<label for='email'>Email Address*</label>
						<br/>	
						<input
							type='text'
							name='email'
							id='email'
							class='contactFormInput'
							required
						/>
					</div>
					<div id='phoneInput'>
						<label for='phone'>Telefon*</label>
						<br/>
						<input
							type='number'					
							id='phoneNum'
							name='phone'
							class='contactFormInput'
							required
						/>
					</div>
					<div id='streetInput'>	
						<label for='street'>Strasse*</label>
						<br/>	
						<input
							type='text'
							id='street'
							name='street'
							class='contactFormInput'
							required
						/>
					</div>
					<div id='addressNumInput'>
						<label for='streetNum'>Hausnummer*</label>
						<br/>
						<input
							type='number'
							id='streetNum'
							name='streetNum'
							class='contactFormInput'
							required
						/>
					</div>
					<div id='zipCodeInput'>
						<label for='zipCode'>Ort*</label>
						<br/>
						<input
							type='text'
							id='zipCode'
							name='zipCode'
							class='contactFormInput'
							required
						/>
					</div>
					<div id='cityInput'>
						<label for='city'>Stadt*</label>
						<br/>
						<input
							type='text'
							id='city'
							name='city'
							class='contactFormInput'
							required
						/>
					</div>														
					<div id='cantonInput'>
						<label for='canton'>Kanton*</label>
						<br/>
						<input
							type='text'
							id='canton'
							name='canton'
							class='contactFormInput'
							required
						/>
					</div>
					<div id='countryInput'>
						<label for='country'>Land*</label>
						<br/>
						<input
							type='text'						
							id='country'
							name='country'
							class='contactFormInput'
							required
						/>
					</div>						
					<div class='contactFormBottom'>	
						<label for='message'></label>
						<textarea						
							name='message'
							placeholder='Ihre Nachricht hier...'
							onfocus="this.placeholder=''" 
							onblur="this.placeholder='Ihre Nachricht hier...'"
							cols='50'
							rows='5'
							id='msg'
							class='contactFormInput'
						/>
						<p>* bezeichnet benötigte Felder</p>
					</div>
				
					<div class='bottomBtn'>
						<div class='newsletterWrap'>
							<div class='checkboxNewsletterInput'>
								<input
									type='checkbox'
									class='checkBtn'
									name='newsletter'
									id='newsletter'
									value='YES'
								/>
								<label for='newsletter'></label>
							</div>
							<a class='newsletterText' id='newsletterMsg'>Newsletter?</a>
						</div>
						<div id='btnWrap'>			
							<button
								class='contactBtn'
								id='submit'
								name='submit'
								type='button'>
								Nachricht senden
							</button>
							<button
								class='contactBtn'
								id='resetContactForm'
								value='reset'
								type='reset'>
								Zurücksetzen
							</button>
						</div>	
					</div>
					<span id='formErrorMsg' class='formErrorText'></span>
					<span id='formSuccessMsg' class='formSuccessText'></span>
				</form>
		</div>`
	);

	$('#submit').on('click', function(e) {
		e.preventDefault();
		let gender = $("input[name='gender']:checked").val();
		let lastName = $('#lastName').val();
		let firstName = $('#firstName').val();
		let company = $('#company').val();
		let email = $('#email').val();
		let street = $('#street').val();
		let streetNum = $('#streetNum').val();
		let zipCode = $('#zipCode').val();
		let city = $('#city').val();
		let canton = $('#canton').val();
		let country = $('#country').val();
		let phone = $('#phoneNum').val();
		let message = $('#msg').val();
		let newsletter = $('#newsletter').val();

		if (
			lastName == '' ||
			firstName == '' ||
			email == '' ||
			street == '' ||
			streetNum == '' ||
			zipCode == '' ||
			city == '' ||
			canton == '' ||
			country == '' ||
			phone == ''
		) {
			$('#formErrorMsg').html('All feilds with a * are required');
		} else {
			$('#formErrorMsg').html('');
			$.ajax({
				type: 'POST',
				url: 'sendEmail.php',
				data: {
					gender: gender,
					lastName: lastName,
					firstName: firstName,
					company: company,
					email: email,
					phone: phone,
					street: street,
					streetNum: streetNum,
					zipCode: zipCode,
					city: city,
					canton: canton,
					country: country,
					message: message,
					newsletter: newsletter
				},
				success: function(data) {
					$('#formSuccessMsg')
						.fadeIn()
						.html(data);
					setTimeout(function() {
						$('#formSuccessMsg').fadeOut('slow');
					}, 10000);
					if ($('#formSuccessMsg').text() == 'Message Sent') {
						$('form').trigger('reset');
					}
				}
			});
		}
		return false;
	});
}
