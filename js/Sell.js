function sell() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='sellerPage'>
				<div class='sellerFormWrap'>
				
						<div class='sellerHeader'>
							
								<h2 class='header'>Excellent Choice!</h2>
								<p>
									We can't wait to speak with you.  Please fill out the form to your best knowledge.
								</p>
							
						</div>
						<div class='form-wrapper'>
							<div id='seller-form-wrap'>
								<div class='seller-item pad-common '>
									<form
										name='myform'
										id='sellerForm'
										action='./sendseller.php'
										enctype='multipart/form-data'
                                        method='post'>
                                        <div class='sellerDropDown'>
                                        <select id='sellCatagoryMenu'>
                                        <optgroup label='sellCatagory'>
                                            <option value=''>Canton</option>
                                            <option value='aargau'>Aargau</option>
                                            <option value='appenzell ausserrhoden'>Appenzell Ausserrhoden</option>
                                            <option value='appenzell innerrhoden'>Appenzell Innerrhoden</option>
                                            <option value='basel landschaft'>Basel-Landschaft</option>
                                            <option value='basel stadt'>Basel-Stadt</option>
                                            <option value='bern'>Bern</option>
                                            <option value='fribourg'>Fribourg</option>
                                            <option value='geneva'>Geneva</option>
                                            <option value='glarus'>Glarus</option>
                                            <option value='grisons'>Grisons</option>
                                            <option value='jura'>Jura</option>
                                            <option value='luzern'>Luzern</option>
                                            <option value='neuchâtel'>Neuchâtel</option>
                                            <option value='nidwalden'>Nidwalden</option>
                                            <option value='obwalden'>Obwalden</option>
                                            <option value='schaffhausen'>Schaffhausen</option>
                                            <option value='schwyz'>Schwyz</option>
                                            <option value='solothurn'>Solothurn</option>
                                            <option value='st gallen'>St. Gallen</option>
                                            <option value='thurgau'>Thurgau</option>
                                            <option value='ticino'>Ticino</option>
                                            <option value='uri'>Uri</option>
                                            <option value='valais'>Valais</option>
                                            <option value='vaud'>Vaud</option>
                                            <option value='zug'>Zug</option>
                                            <option value='zürich'>Zürich</option>
                                        </optgroup>
                                    </select>
                                    <select id='sellCatagoryMenu'>
                                    <optgroup label='sellCatagoryMenu'>
                                        <option value=''>City</option>
                                        <option value='commercial'>Commercial</option>
                                        <option value='residential'>Residential</option>
                                    </optgroup>
                                </select>
                                <select id='sellCatagoryMenu'>
                                <optgroup label='sellCatagoryMenu'>
                                    <option value=''>Rooms</option>
                                    <option value='1'>1</option>
                                    <option value='1.5'>1.5</option>
                                    <option value='2'>2</option>
                                    <option value='2.5'>2.5</option>
                                    <option value='3'>3</option>
                                    <option value='3.5'>3.5</option>
                                    <option value='4'>4</option>
                                    <option value='4.5'>4.5</option>
                                    <option value='5'>5</option>
                                    <option value='5.5'>5.5</option>
                                    <option value='6'>6</option>
                                    <option value='6.5'>6.5</option>
                                    <option value='7'>7</option>
                                    <option value='7.5'>7.5</option>
                                    <option value='8'>8</option>
                                    <option value='8.5'>8.5</option>
                                    <option value='9'>9</option>
                                    <option value='9.5'>9.5</option>
                                    <option value='1'>1</option>
                                    <option value='10'>10</option>
                                </optgroup>
                            </select>
                            <select id='sellCatagoryMenu'>
                            <optgroup label='sellCatagoryMenu'>
                                <option value=''>Bathrooms</option>
                                <option value='1'>1</option>
                                    <option value='1.5'>1.5</option>
                                    <option value='2'>2</option>
                                    <option value='2.5'>2.5</option>
                                    <option value='3'>3</option>
                                    <option value='3.5'>3.5</option>
                                    <option value='4'>4</option>
                                    <option value='4.5'>4.5</option>
                                    <option value='5'>5</option>
                                    <option value='5.5'>5.5</option>
                                    <option value='6'>6</option>
                                    <option value='6.5'>6.5</option>
                                    <option value='7'>7</option>
                                    <option value='7.5'>7.5</option>
                                    <option value='8'>8</option>
                            </optgroup>
                        </select>
                        <select id='sellCatagoryMenu'>
                            <optgroup label='sellCatagoryMenu'>
                                <option value=''>Type</option>
                                <option value='apartment'>Apartment</option>
                                <option value='condo'>Condo</option>
                                <option value='house'>House</option>
                                <option value='challet'>Challet</option>
                                <option value='Villa'>Villa</option>
                            </optgroup>
                        </select>
                        <select id='sellCatagoryMenu'>
                            <optgroup label='sellCatagoryMenu'>
                                <option value=''>Market</option>
                                <option value='investment'>Investment</option>
                                <option value='residential'>Residential</option>
                            </optgroup>
                        </select>
                        </div>
									<div class='sellerInputForm'>
											<input
												type='text'
												placeholder='Full Name'
												id='name'
												name='name'
											
												required
											/>
											
											<input
												type='text'
												placeholder='Valid email address'
												name='email'
												id='email'
												size='30'
												
												required
											/>
											
											<input
												type='text'
												placeholder='Address'
												id='address'
												name='addess'
												
												required
											/>
											
											<input
												type='text'
												placeholder='Phone Number'
												id='phoneNum'
												name='phone'
												
												required
											/>
			
											<textarea
												placeholder='Your Message'
												name='message'
												id='msg'
												
											/>
										
											<button
												class='btn btn-otto btn-otto-color'
												id='submit'
												name='submit'
												type='submit'>
												Send Message
											</button>
                                           </div>
									</form>
								</div>
							</div>
						</div>
					
				</div>
			</div>`
	);
}
