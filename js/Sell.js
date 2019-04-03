function sell() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='sellerPage'>
            <div class='sellerHeader'>
                <h2 class='header'>Excellent Choice!</h2>
                <p>
                    We can't wait to speak with you.  Please fill out the form to your best knowledge.
                </p>
            </div>
            <div class='formWrapper'>
                <form
                    name='myform'
                    id='sellerForm'
                    action='./sendseller.php'
                    enctype='multipart/form-data'
                    method='post'>
                    
                    <div class='sellerInputForm'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            class='sellerFormInputs'
                            id='sellerFormName'
                            name='name'
                            required
                        />
                        
                        <input
                            type='text'
                            placeholder='Email address'
                            name='email'
                            class='sellerFormInputs'
                            id='sellerFormEmail'        
                            required
                        />
                        
                        <input
                            type='text'
                            placeholder='Property Address'
                            class='sellerFormInputs'
                            id='sellerFormAddress'
                            name='addess'
                        />
                        
                        <input
                            type='text'
                            placeholder='Phone Number'
                            class='sellerFormInputs'
                            id='sellerFormPhone'
                            name='phone'
                        />
                        <div class='sellFormCheckboxes'>
                        <div class='sellFormCheckbox'>
                            <input type='checkbox'  id='sellInvest' value='investment'/>
                            <label for='sellInvest'></label>
                        </div>
                        <a>Investment</a>
                        <div class='sellFormCheckbox'>
                            <input type='checkbox'  id='sellRes' value='residential'/>
                            <label for='sellRes'></label>
                           
                        </div>
                        <a>Residential</a>
                        </div>
                        <div class='sellMessage'> 
                            <textarea
                                placeholder='Your Message'
                                name='message'
                                class='sellerFormInputs'
                                id='sellerFormMsg'
                            />
                        </div>
                            <button
                                class='sellerFormInputs'
                                id='sellerFormSubmit'
                                name='submit'
                                type='submit'>
                                Send Message
                            </button>
                    </div>
                </form> 
            </div>
        </div>`
	);
}
