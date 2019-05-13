function office() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});

	$('.main').empty();

	$('.main').append(
		`<section>
			<div class='officePage'>
				<div class='officeMsg' >
				<center><h3 id='officeSlogan'>Mit Kompetenz und Menschenkenntnis</h3></center>
					<p id='officeContent'>
					Der Immobilienmarkt ist seit vielen Jahren unser berufliches Zuhause. 
					Hier können wir einbringen, was uns ausmacht: Empathie, Erfahrung und Engagement. 
					Der Fokus auf dem Zwischenmenschlichen, entschlossene Tatkraft und mehr als 14 
					Jahre Geschäftstätigkeit im Immobilienbusiness haben uns auch den Weg in ein dicht 
					gewobenes Netzwerk eröffnet. Wir kennen den Markt und seine Akteure genau. Das ist 
					die Basis, um schnelle Matchings zu erzielen, die besten Preise auszuhandeln und 
					Transaktionen ohne Umwege erfolgreich abzuwickeln. Fünfsprachig und seit vielen Jahren 
					auf nationalen und internationalem Parkett unterwegs, ist es die Unternehmensgründerin 
					Karen Gräfensteiner-Deyaert gewohnt, Kundinnen und Kunden offen und mit aufrichtigem 
					Interesse zu begegnen.
					</p>
					<br />
					
				</div>
				
				<img src='images/bioPic.jpeg' alt='Phot of Karen Gräfenstiener' id='bioPic'>
				
				
			</div>
		</section>`
	);
	if (window.location.hash === '#en') {
		$('#officeSlogan').text(languages.en.slogan);
		$('#officeContent').text(languages.en.office);
	} else if (window.location.hash === '#de') {
		$('#officeSlogan').text(languages.de.slogan);
		$('#officeContent').text(languages.de.office);
	}

	dataCounter();
}
