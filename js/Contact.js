const contactPage = function contact() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='contactPage'>
			<div class='headers'>
				<article class='contactHeader'>
					<h2 class='header' id='contactHeader'>Wir sind gerne für Sie da und freuen uns auf Ihre Kontaktaufnahme.</h2>
					<h3 class='info'>
						Gräfenstiener | Swiss Real Estate <br />
						<a class='emailLink' href='mailto:infor@jdjksl.com'>
							info@gräfenstiener.com
						</a>
					</h3>
				</article>
			</div>
			<div class='contactFormWrap'>
				<form
					name='contactForm'
					id='contactForm'
					enctype='multipart/form-data'
					method='post'
					action='sendEmail.php'>
					<div class='contactInputTop'>
						<div id='nameInput'>
							<label for='name'>Name*</label>
							<br/>
							<input
								type='text'
								id='name'
								name='name'
								class='contactFormInput'
								required
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
							<label for='phone'>Phone</label>
							<br/>
							<input
								type='text'					
								id='phoneNum'
								name='phone'
								class='contactFormInput'
							/>
						</div>
						<div id='streetInput'>	
							<label for='street'>Street</label>
							<br/>	
							<input
								type='text'
								id='street'
								name='street'
								class='contactFormInput'
							/>
						</div>
						<div id='addressNumInput'>
							<label for='streetNum'>Street Number</label>
							<br/>
							<input
								type='text'
								id='streetNum'
								name='streetNum'
								class='contactFormInput'
							/>
						</div>
						<div id='zipCodeInput'>
							<label for='zipCode'>Ortz</label>
							<br/>
							<input
								type='text'
								id='zipCode'
								name='zipCode'
								class='contactFormInput'
								
							/>
						</div>
						<div id='cityInput'>
							<label for='city'>City</label>
							<br/>
							<input
								type='text'
								id='city'
								name='city'
								class='contactFormInput'
							/>
						</div>														
						<div id='cantonInput'>
							<label for='canton'>Canton</label>
							<br/>
							<input
								type='text'
								id='canton'
								name='canton'
								class='contactFormInput'
							/>
						</div>
						<div id='countryInput'>
							<label for='country'>Country</label>
							<br/>
							<input
								type='text'						
								id='country'
								name='country'
								class='contactFormInput'
							/>
						</div>						
					</div>
					<div class='contactFormBottom'>
						<div class='newsletterWrap'>
							<div class='checkboxNewsletterInput'>
								<input
									type='checkbox'
									class='checkBtn'
									name='newsletter'
									id='newsletter'
									value='newsletter'
								/>
								<label for='newsletter'></label>
							</div>
							<a class='newsletterText' id='newsletterMsg'>Möchten Sie unseren monatlichen Newsletter erhalten?</a>
						</div>
						<label for='message'></label>
						<textarea						
							name='message'
							placeholder='Your Message Here...'
							onfocus="this.placeholder=''" 
							onblur="this.placeholder='Your Message Here...'"
							cols='50'
							rows='5'
							id='msg'
							class='contactFormInput'
						/>
					<p>* denotes required feilds</p>
						
					</div>
					<br />
					
					<button
						class='contactBtn'
						id='submit'
						name='submit'
						type='submit'>
						Nachricht senden
					</button>
					<button
						class='contactBtn'
						id='resetContactForm'
						value='reset'
						type='reset'>
						Reset
					</button>
				</form>
			</div>
		</div>`
	);
	if (window.location.hash === '#en') {
		$('#contactHeader').text(languages.en.contact);
		$('#name').attr('placeholder', 'Full Name');
		$('#email').attr('placeholder', 'Valid Email Address');
		$('#address').attr('placeholder', 'Address');
		$('#phoneNum').attr('placeholder', 'Telephone Number');
		$('#msg').attr('placeholder', 'Your message here');
		$('#newsletterMsg').text('Do you want to receive our monthly newsletter?');
		$('#submit').text('Submit');
	}
};
