function contact() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='contactPage'>
				<div class='headers'>
					<article class='contactHeader'>
						<h2 class='header'>We are here for you</h2>
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
								placeholder='Full Name'
								id='name'
								name='name'
								class='contactFormInput'
								required
							/>
							<br />
							<input
								type='text'
								placeholder='Valid email address'
								name='email'
								id='email'
								size='30'
								class='contactFormInput'
								required
							/>
							<br />
							<input
								type='text'
								placeholder='Address'
								id='address'
								name='addess'
								class='contactFormInput'
								
							/>
							<br />
							<input
								type='text'
								placeholder='Phone Number'
								id='phoneNum'
								name='phone'
								class='contactFormInput'
								
							/>
							<br />
							<textarea
								placeholder='Your Message'
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
						<a class='newsletterText'>Would you like to recieve our monthly newsletter?</a>
						<br />
							<button
								class='contactBtn'
								id='submit'
								name='submit'
								type='submit'>
								Send Message
							</button>
					</form>
				</div>
		</div>`
	);
}
