const office = function() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$(
		'.welcomePage, .realEstatePage, .servicesPage, .referencesPage, .contactPage'
	).remove();
	if ($('.slideshowWrap').length === 0) {
		slideShow();
	}
	$('.main').empty();
	slideShow();
	$('.main').append(`
			<div class='slideShowContent'>
				<h3>mit kompetenz und menschenkenntnis</h3>	
				<a href='#officePageScroll' class='downArrow' id='downArrowOffice'><img src='/images/downArrow.png' style='margin-top:200px; width:100px;'/></a>
			</div>
			<div class='officePage' >	
			<div id='officePageScroll'></div>				
				<div class='officeMsg' id='officePage'>
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
					<div id='bioText'>
						<p>Mit sicherem Gespür für den Menschen und den Markt begleite ich Sie beim Verkauf Ihrer Wohnung oder Ihres Hauses. Bei komplexen Immobilientransaktionen weiss ich unterschiedliche Bedürfnisse gleichwertig zu berücksichtigen, so dass alle Beteiligten sich gewürdigt fühlen.</p>			
					</div>
					<div id='bioPicWrap'>
						<img src='../images/bioPic.jpeg' alt='Photo of Karen Gräfenstiener' id='bioPic'>
					<div>
				</div>
			</div>
		`);
};
$('#downArrowOffice').click(function(e) {
	e.preventDefault();
	$('html, body').animate(
		{
			scrollTop: $(this)
				.attr('href')
				.offset({ top: 1000 }).top
		},
		8000
	);
});
