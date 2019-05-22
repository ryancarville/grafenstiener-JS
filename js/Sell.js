function sell() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='sellerPage'>
            <div class='sellerHeader'>
                <h2 class='header'>Exzellente Wahl!</h2>
                <p>
                Wir können es kaum erwarten, mit Ihnen zu sprechen. Bitte füllen Sie das Formular nach bestem Wissen aus.
                </p>
            </div>
            <div class='sellFormWrapper'>
            
                <form
                    name='myform'
                    id='sellerForm'
                    action='./sendseller.php'
                    enctype='multipart/form-data'
                    method='post'>                
                    <div class='sellerInputForm'>
                    <label for='name'>Name*:</label>  
                        <input
                            type='text'
                            class='sellerFormInputs'
                            id='sellerFormName'
                            name='name'
                            required
                        />
                        <label for='email'>Email*:</label>
                        <input
                            type='text'                     
                            name='email'
                            class='sellerFormInputs'
                            id='sellerFormEmail'        
                            required
                        />
                        
                        <label for='address'>Immobilien-Adresse:</label>
                        <input
                            type='text'
                            class='sellerFormInputs'
                            id='sellerFormAddress'
                            name='address'
                        />
                        <label for='phone'>Telefon:</label>
                        <input
                            type='text'
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
                                placeholder='Ihre Nachricht hier..'
                                onblur='Ihre Nachricht hier..'
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
                            Nachricht senden
                        </button>
                    </div>
                </form> 
            </div>
        </div>`
	);
}
