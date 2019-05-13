function realEstate() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='realEstateMsg'>
				<h2 id='realEstateHeader'>Was wir für Sie tun können!</h2>
				<p id='realEstateContent'>
				Bei Immobilienverkäufen und -vermietungen eine erfahrene Begleitung 
				an der Seite zu haben, gibt Sicherheit, dass in der Transaktion nichts 
				vergessen geht und jeder Schritt sorgfältig gesetzt wird. Mit einer 
				professionellen Marktwertermittlung, profunden Marktkenntnissen und dem 
				richtigen Vermarktungsvorgehen maximieren wir die Resultate.
				</p>
				<h4 id='realEstateTag'>Wir begleiten Sie:</h4>
			</div>
				<div class='realEstatePage'>
					<div class='buyMsg'>
						<button type='button' id='buyButton' onClick=results(properties)>Kaufen</button>
						<p id='buyMsg'>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
							in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
							</p>
						<div class='buttonWrap'>
							<button type='button' id='investButton' onClick=results(properties)>Investition</button>
							<button type='button' id='resButton' onClick=results(properties)>Wohn</button>
						</div>
					</div>
					<div class='rentMsg'>
					<button type='button' id='rentButton' onClick=results(properties)>Vermietungen</button>
						<p id='rentMsg'>
						Wer in der eigenen Liegenschaft ein und aus geht, ist den wenigsten Besitzern egal. 
						Die Vermittlung von exklusivem Wohnraum, Büros und Gewerbeflächen meint darum nicht nur, 
						fristgerecht einen zahlungsfähigen Mieter zu finden. Vielmehr streben wir angenehme 
						Mietverhältnisse an, die lange andauern. Wir vereinen das Fachwissen und die soziale 
						Kompetenz, die es für eine erfolgreiche Mietersuche braucht.
						</p>
						<div class='buttonWrap'>
							<button type='button' id='officeButton' onClick=results(properties)>Büro</button>
							<button type='button' id='rentResButton' onClick=results(properties)>Wohn</button>
						</div>
					</div>
					<div class='sellMsg'>
					<button type='button' id='sellButton' onClick=sell()>Verkauf</button>
						<p id='sellMsg'>
						In einer Immobilie steckt mehr als viel Geld. Den persönlichen Wert beziffern oft harte 
						Arbeit, vielleicht liebe Erinnerungen, manchmal ganze Schicksale. Die emotionale Komponente 
						macht den ohnehin schon komplexen Verkaufsprozess nicht einfacher. Uns ist bewusst, wie 
						viel Vertrauen Sie uns vorschiessen, wenn Sie uns mit dem Verkauf Ihrer Immobilie beauftragen. 
						Indem wir Sie entscheidend entlasten und sicher zu einem erfolgreichen Abschluss führen, 
						danken wir es Ihnen. <br />
						Ob Anlageimmobilie, Bauland, Wohnimmobilien oder Neubauprojekt: Wir begleiten Sie persönlich 
						durch den gesamten Ablauf. Wir übernehmen für Sie sämtliche Schritte von der Marktwertermittlung 
						über das Entwickeln individueller Vermarktungskonzepte und Realisieren kreativer Massnahmen bis 
						zum erfolgreichen Geschäftsabschluss auf dem Notariat.
							</p>
					</div>
				</div>
			`
	);
	if (window.location.hash === '#en') {
		$('#realEstateHeader').text(languages.en.servicesHeader);
		$('#realEstateContent').text(languages.en.servicesIntro);
		$('#realEstateTag').text(languages.en.servicesListUl);
		$('#buyButton').text('Buy');
		$('#buyMsg').text(languages.en.marketValueation);
		$('#investButton').text('Investment');
		$('#resButton').text('Residential');
		$('#rentButton').text('Rent');
		$('#rentMsg').text(languages.en.rentals);
		$('#officeButton').text('Office');
		$('#rentResButton').text('Residential');
		$('#sellButton').text('Sell');
		$('#sellMsg').text(languages.en.sale);
	} else if (window.location.hash === '#de') {
		$('#welcomeMsg').text(languages.de.welcome);
	} else {
		$('#welcomeMsg').text(languages.de.welcome);
	}
}
