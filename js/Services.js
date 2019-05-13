function services() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<section>
			<div class='servicesPage'>
				<div class='servicesMsg'>
					<h2 id='servicesMsgHeader'>Dienstleistungen, die wir anbieten</h2>
					<p id='servicesMsg'>
					Bei Immobilienverkäufen und -vermietungen eine erfahrene Begleitung an der Seite zu haben, gibt Sicherheit, dass in der Transaktion nichts vergessen geht und jeder Schritt sorgfältig gesetzt wird. Mit einer professionellen Marktwertermittlung, profunden Marktkenntnissen und dem richtigen Vermarktungsvorgehen maximieren wir die Resultate.
					</p>
				</div>
				<div class='servicesList'>
					<ul id='servicesListUl'><b>Wir begleiten Sie:</b>
					<br/><br/>
						<li> 
						Verkauf von Wohneigentum
						</li>
						<li>
						Verkauf von Mehrfamilien- Geschäftshäusern und Gewerbeliegenschaften
						</li>
						<li>
						Transaktionen von Share- & Asset Deal 
						</li>
						<li>
						Marktwertermittlungen 
						</li>
						<li>
						Beratung Wohn- und Anlageimmobilien
						</li>
						
					</ul>
				</div>
			</div>
		</section>`
	);
	if (window.location.hash === '#en') {
		$('#servicesMsgHeader').text(languages.en.servicesHeader);
		$('#servicesMsg').text(languages.en.servicesIntro);
		$('#servicesListUl').text(languages.en.servicesListUl);
		$('#servicesListUl').append(
			languages.en.servicesListLi.map(item => {
				item;
			})
		);
	} else if (window.location.hash === '#de') {
		$('#welcomeMsg').text(languages.de.welcome);
	} else {
		$('#welcomeMsg').text(languages.de.welcome);
	}
}
