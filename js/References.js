const referencesPage = function references() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='refWrapper'>
            <div class='refHeader'>
                <h2>Clients who love us</h2>
            </div>
            <div class='refContent'>
                <div class='ref' id='ref1'>
                    <h2><b>Für sie lege ich die Hand ins Feuer</b></h2>
                    <p>Von Frau Gräfensteiner beraten habe ich ein Mehrfamilienhaus 
                    in Steinmaur, eines in Bülach und letztes Jahr noch eines in Stallikon 
                    gekauft. Noch nie bin ich so direkt, korrekt und ausführlich bedient 
                    worden wie von ihr. Mehrere Geschäfte war ich zuvor nicht eingegangen, 
                    weil ich nicht transparent informiert worden war. Von ihr bekam ich stets 
                    schnelle, ausführliche und reale Angaben. Wenn man sie braucht, ist sie 
                    sofort zur Stelle, nicht erst am nächsten Tag. Sollte nochmals etwas Spannendes 
                    reintrudeln, werde ich wieder mit Frau Gräfensteiner arbeiten. Der 
                    Immobilienmarkt wird je länger je schwieriger, da braucht man eine 
                    Vertrauensperson wie sie.
                    </p>
                    <p><i>Ernst Buck</i><br>Unternehmer</p>
                </div>
                <br>
                <div class='ref' id='ref2'>
                    <h2><b>Frau Gräfensteiner hat ein grosses, persönliches Engagement.</b></h2>
                    <p>Die Empfehlung, mich an Frau Gräfensteiner zu wenden, bekam ich von meiner 
                    Tochter bekommen – eine ihrer Freundinnen hatte mit ihr ein Immobiliengeschäft 
                    getätigt. Ein Glücksfall!<br>
                    Mit ihr lief der ganze Prozess schnell und jedes Problem fegte sie aus dem Weg. 
                    Sie betreute mich sehr persönlich, ich fühlte mich aufgehoben. Als ältere Person 
                    ist man besonders auf eine gute Begleitung angewiesen. Sie war immer da, mehr als 
                    andere. Das weiss ich aus eigener Erfahrung: Das letzte Mal klappte es weniger gut. 
                    Man hört, noch kein Haus sei von ihr nicht vermietet worden. Das wundert mich nicht.
                    Jetzt habe ich sie schon wieder um ihre Hilfe angefragt. Obwohl es kein besonders 
                    interessantes Geschäft für sie ist, hat sie zugesagt.
                    </p>
                    <p><i>Isabelle Fischer</i><br>im Ruhestand</p>
                </div>
                
            </div>
        </div>`
	);
};
