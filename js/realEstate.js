function realEstate() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});

	$('.main').empty();
	$('.main').append(
		`<div class='realEstatePage'>
			<p id='realEstateText'>Immobilien</p>
		</div>	
		<div class='realEstateMsg'>
			<h2>gekonnt diskret persönlich</h2>

			<p>Unsere Website bietet lediglich eine Auswahl 
			der Wohn- und Anlage Immobilien im Verkauf. Fragen 
			Sie uns nach Angeboten, welche wir nicht publiziert 
			haben.  Wir vermarkten diskret diverse «Off-Market» 
			Liegenschaften.<br><br>
			Wir freuen uns auf ein persönliches Gespräch mit Ihnen 
			damit wir für Sie die geeignete Liegenschaft finden können. 
			</p>				
		</div>`
	);
	results(properties);
}
