function services() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<section>
			<div class='servicesPage'>
				<div class='servicesImage'>
					<img src='../images/services/services.jpg' alt='service image'/>
					<h3>Dienstleistungen</h3>
					<a href='#serviceArrowPoint' class='downArrow' id='downArrowOffice'>
						<img src='./images/downArrow.png' style='margin-top:150px; width:100px;'/>
					</a>
				</div>
				<div id='serviceArrowPoint'></div>
				<div class='servicesMsg' id='servicesMsg'>	
					<h2 id='servicesMsgHeader'>Dienstleistungen, die wir anbieten</h2>
					<p id='servicesMsgIntro'>
					Bei Immobilienverkäufen und -vermietungen eine erfahrene Begleitung 
					an der Seite zu haben, gibt Sicherheit, dass in der Transaktion nichts 
					vergessen geht und jeder Schritt sorgfältig gesetzt wird. Mit einer 
					professionellen Marktwertermittlung, profunden Marktkenntnissen und dem 
					richtigen Vermarktungsvorgehen maximieren wir die Resultate.
					</p>
				</div>
				
				<div class='servicesMsgGroup'>
					<div class='servicesMsgOption' id='serviceSell'>
						<div>
							<img src='../images/services/sell.png' alt='service sell icon' />
							<h2>Verkauf</h2>
						</div>
						<p>In einer Immobilie steckt mehr als viel Geld. Den persönlichen Wert beziffern 
						oft harte Arbeit, vielleicht liebe Erinnerungen, manchmal ganze Schicksale. Die 
						emotionale Komponente macht den ohnehin schon komplexen Verkaufsprozess nicht 
						einfacher. Uns ist bewusst, wie viel Vertrauen Sie uns vorschiessen, wenn Sie uns 
						mit dem Verkauf Ihrer Immobilie beauftragen. Indem wir Sie entscheidend entlasten 
						und sicher zu einem erfolgreichen Abschluss führen, danken wir es Ihnen.<br>
						Ob Anlageimmobilie, Bauland, Wohnimmobilien oder Neubauprojekt: Wir begleiten Sie 
						persönlich durch den gesamten Ablauf. Wir übernehmen für Sie sämtliche Schritte von 
						der Marktwertermittlung über das Entwickeln individueller Vermarktungskonzepte und 
						Realisieren kreativer Massnahmen bis zum erfolgreichen Geschäftsabschluss auf dem Notariat.
						</p>
					</div>
					<div class='servicesMsgOption' id='serviceRent'>
						<p>Wer in der eigenen Liegenschaft ein und aus geht, ist den wenigsten Besitzern egal. 
						Die Vermittlung von exklusivem Wohnraum, Büros und Gewerbeflächen meint darum nicht nur, 
						fristgerecht einen zahlungsfähigen Mieter zu finden. Vielmehr streben wir angenehme 
						Mietverhältnisse an, die lange andauern. Wir vereinen das Fachwissen und die soziale Kompetenz, 
						die es für eine erfolgreiche Mietersuche braucht.
						</p>
						<div>
							<img src='../images/services/rent.svg' alt='service rent icon' />
							<h2>Vermietungen</h2>
						</div>
					</div>
					<div class='servicesMsgOption' id='serviceMarket'>
						<div>
							<img src='../images/services/market.png' alt='service market icon' />
							<h2>Marktwertermittlung</h2>
						</div>
						<p>Eine Immobilie ist eine gute Geldanlage – wenn man mit ihr umzugehen weiss. Sanieren oder 
						nicht? Sie bewohnen, verkaufen oder vermieten? Die einzige korrekte Grundlage für solche 
						Entscheidungen ist die professionelle Marktwertermittlung. Wir verfügen über Know-how 
						und Routine, um das komplexe Zusammenspiel entscheidender Faktoren präzise zu entschlüsseln. 
						Dabei liefern wir nicht isolierte Ergebnisse, sondern analysieren auch mögliche Massnahmen 
						zur Wertsteigerung. Sicher und persönlich führen wir Sie durch den Entscheidungsprozess und 
						stehen Ihnen bei einem allfälligen Verkauf erneut zur Seite.
						</p>
					</div>
				</div>
			</div>
		</section>`
	);
}
