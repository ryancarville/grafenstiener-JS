function realEstate() {
	$(document).ready(function() {
		$(this).scrollTop();
	});
	$('.main').empty();
	$('.main').append(
		`<div class='realEstatePage'>
			<div class='realEstateMsg'>
				<h2 id='realEstateHeader'>Dienstleistungen, die wir anbieten</h2>
				<p id='realEstateMsg'>
				Bei Immobilienverkäufen und -vermietungen eine erfahrene Begleitung an der Seite zu haben, gibt Sicherheit, dass in der Transaktion nichts vergessen geht und jeder Schritt sorgfältig gesetzt wird. Mit einer professionellen Marktwertermittlung, profunden Marktkenntnissen und dem richtigen Vermarktungsvorgehen maximieren wir die Resultate.
				</p>
			</div>
			<div class='servicesList'>
				<p id='servicesListUl'><b>Wir begleiten Sie:</b>
				<br/><br/>
				</p>
			</div>			
			<div class='realEstateBtnWrap'>
				<div class='buyMsg'>
					<img src='images/listings/icons/forBuy.png' alt='For Buy Image'>
					<button type='button' route='listings' id='buyButton' onclick=$(results(properties))>Kaufen</button>
					<div class='buttonWrap'>
						<button type='button' route='listings' id='investButton' onclick=$(results(properties))>Investition</button>
						<button type='button' route='listings' id='resButton' onClick=results(properties)>Wohn</button><br>					
					</div>
					<p>In einer Immobilie steckt mehr als viel Geld. Den persönlichen Wert beziffern oft harte Arbeit, vielleicht liebe Erinnerungen, manchmal ganze Schicksale. Die emotionale Komponente macht den ohnehin schon komplexen Verkaufsprozess nicht einfacher. Uns ist bewusst, wie viel Vertrauen Sie uns vorschiessen, wenn Sie uns mit dem Verkauf Ihrer Immobilie beauftragen. Indem wir Sie entscheidend entlasten und sicher zu einem erfolgreichen Abschluss führen, danken wir es Ihnen.
					Ob Anlageimmobilie, Bauland, Wohnimmobilien oder Neubauprojekt: Wir begleiten Sie persönlich durch den gesamten Ablauf. Wir übernehmen für Sie sämtliche Schritte von der Marktwertermittlung über das Entwickeln individueller Vermarktungskonzepte und Realisieren kreativer Massnahmen bis zum erfolgreichen Geschäftsabschluss auf dem Notariat.</p>
				</div>
				<div class='sellMsg'>
					<img src='images/listings/icons/forSale.png' alt='For Sale Image'>
					<button type='button' class='sellBtn' route='listings' id='sellButton' onClick=sell()>Verkauf</button>
					<p>Eine Immobilie ist eine gute Geldanlage – wenn man mit ihr umzugehen weiss. Sanieren oder nicht? Sie bewohnen, verkaufen oder vermieten? Die einzige korrekte Grundlage für solche Entscheidungen ist die professionelle Marktwertermittlung. Wir verfügen über Know-how und Routine, um das komplexe Zusammenspiel entscheidender Faktoren präzise zu entschlüsseln. Dabei liefern wir nicht isolierte Ergebnisse, sondern analysieren auch mögliche Massnahmen zur Wertsteigerung. Sicher und persönlich führen wir Sie durch den Entscheidungsprozess und stehen Ihnen bei einem allfälligen Verkauf erneut zur Seite.</p>
				</div>
				<div class='rentMsg'>
					<img src='images/listings/icons/forRent.png' alt='For Rent Image'>
					<button type='button' id='rentButton' route='listings' onClick=results(properties)>Vermietungen</button>
					<div class='buttonWrap'>
						<button type='button' id='officeButton' route='listings' onClick=results(properties)>Büro</button>
						<button type='button' id='rentResButton' route='listings' onClick=results(properties)>Wohn</button>
					</div>
					<p>Wer in der eigenen Liegenschaft ein und aus geht, ist den wenigsten Besitzern egal. Die Vermittlung von exklusivem Wohnraum, Büros und Gewerbeflächen meint darum nicht nur, fristgerecht einen zahlungsfähigen Mieter zu finden. Vielmehr streben wir angenehme Mietverhältnisse an, die lange andauern. Wir vereinen das Fachwissen und die soziale Kompetenz, die es für eine erfolgreiche Mietersuche braucht.</p>
				</div>
			</div>
		</div>
			`
	);
}
