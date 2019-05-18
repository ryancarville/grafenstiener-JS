const office = function office() {
	$(document).ready(function() {
		$(this).scroll();
	});
	$(
		'.welcomePage, .realEstatePage, .servicesPage, .referencesPage, .contactPage'
	).remove();
	if ($('.slideshowWrap').length === 0) {
		slideShow();
	}

	$('.main').append(`
			<div class='officePage'>
			<button type="button" id='back' onclick=$(back())>Back</button>
			
				<div class='officeMsg' id='officePage' >
					<h2>Büro</h2>
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
				</div>
				
				<div class='bio'>
					<p>Mit sicherem Gespür für den Menschen und den Markt begleite ich Sie beim Verkauf Ihrer Wohnung oder Ihres Hauses. Bei komplexen Immobilientransaktionen weiss ich unterschiedliche Bedürfnisse gleichwertig zu berücksichtigen, so dass alle Beteiligten sich gewürdigt fühlen.</p>			
					<img src='images/bioPic.jpeg' alt='Phot of Karen Gräfenstiener' id='bioPic'>
				</div>
			</div>
		`);
	document
		.getElementById('officePage')
		.animate({ scrollTop: $('#officePage').offset().top }, 2000);
	if (window.location.hash === '#en') {
		$('#officeSlogan').text(languages.en.slogan);
		$('#officeContent').text(languages.en.office);
	} else if (window.location.hash === '#de') {
		$('#officeSlogan').text(languages.de.slogan);
		$('#officeContent').text(languages.de.office);
	}
	sessionStorage.setItem('office', office);
	console.log(sessionStorage);
	let officeHist = sessionStorage.getItem('office');
	history.pushState(officeHist, 'Office', 'office.html');
	console.log(history.state.office);
};
