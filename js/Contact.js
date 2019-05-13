function contact() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='contactPage'>
				<div class='headers'>
					<article class='contactHeader'>
						<h2 class='header'>Wir sind gerne für Sie da und freuen uns auf Ihre Kontaktaufnahme.</h2>
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
							<input
								type='text'
								placeholder='Vollständiger Name'
								id='name'
								name='name'
								class='contactFormInput'
								required
							/>
							<br />
							<input
								type='text'
								placeholder='Gültige Email Addresse'
								name='email'
								id='email'
								size='30'
								class='contactFormInput'
								required
							/>
							<br />
							<input
								type='text'
								placeholder='Addresse'
								id='address'
								name='addess'
								class='contactFormInput'
								
							/>
							<br />
							<input
								type='text'
								placeholder='Telefonnummer'
								id='phoneNum'
								name='phone'
								class='contactFormInput'
								
							/>
							<br />
							<textarea
								placeholder='Deine Nachricht'
								name='message'
								cols='40'
								rows='4'
								id='msg'
								class='contactFormInput'
							/>
							<br />
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
						<a class='newsletterText'>Möchten Sie unseren monatlichen Newsletter erhalten?</a>
						<br />
							<button
								class='contactBtn'
								id='submit'
								name='submit'
								type='submit'>
								Nachricht senden
							</button>
					</form>
				</div>
		</div>`
	);
}
