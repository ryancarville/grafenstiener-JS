function contact() {
	$('.main').empty();
	$('.main').append(
		`<div class='contactPage'>
				<div class='headers'>
					<article class='contactHeader'>
						<h2 class='header'>We are her for you</h2>
						<h3 class='info'>
							Gräfenstiener | Swiss Real Estate <br />
							<a class='emailLink' href='mailto:infor@jdjksl.com'>
								info@gräfenstiener.com
							</a>
						</h3>
					</article>
				</div>
				<div class='contactFormWrap'>
					<div id='contact-form-wrap'>
						<div class='contact-item pad-common '>
							<form
								name='myform'
								id='contactForm'
								action='./sendcontact.php'
								enctype='multipart/form-data'
								method='post'>
								<article>
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
										required
									/>
									<br />
									<input
										type='text'
										placeholder='Phone Number'
										id='phoneNum'
										name='phone'
										class='contactFormInput'
										required
									/>
									<br />
								</article>
								
								<div class='checkboxNewsletterInput'>
									<input
										type='checkbox'
										class='checkBtn'
										id='newsletter'
										value='newsletter'
									/>
									<label for='newsletter'></label>
								</div>
								<a class='newsletterText'>Would you like to recieve our monthly newsletter?</a>
								<article>
									<textarea
										placeholder='Your Message'
										name='message'
										cols='40'
										rows='4'
										id='msg'
										class='contactFormInput'
									/>
									<br />
									<button
										class='contactBtn'
										id='submit'
										name='submit'
										type='submit'>
										Send Message
									</button>
								</article>
							</form>
						</div>
					</div>
				</div>
		</div>`
	);
}
