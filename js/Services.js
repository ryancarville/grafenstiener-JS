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
						
						
					</ul>
				</div>
			</div>
		</section>`
	);
	if (window.location.hash === '#en') {
		$('#servicesMsgHeader').text(languages.en.servicesHeader);
		$('#servicesMsg').text(languages.en.servicesIntro);
		$('#servicesListUl').text(languages.en.servicesListUl);
		const servicesArray = languages.en.servicesListLi;
		$('#servicesListUl').append(
			servicesArray.map((item, i) => {
				return `<li key={i}>${item}</li>`;
			})
		);
	} else if (window.location.hash === '#de') {
		$('#servicesMsgHeader').text(languages.de.servicesHeader);
		$('#servicesMsg').text(languages.de.servicesIntro);
		$('#servicesListUl').text(languages.de.servicesListUl);
		const servicesArray = languages.de.servicesListLi;
		$('#servicesListUl').append(
			servicesArray.map((item, i) => {
				return `<li key={i}>${item}</li>`;
			})
		);
	} else {
		$('#welcomeMsg').text(languages.de.welcome);
	}
}
