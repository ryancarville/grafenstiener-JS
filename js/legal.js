function legal() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(`<div class='legalPage'>
        <h2>Legal Page</h2>
        <div class='legalContent' id='legalContent'>
        <p>Lorem ipsum dolor sit amet, vim case minim consulatu ad, mei tantas consul appetere ex. Eu tamquam tibique maluisset eum. Ne pro erant possit iudicabit, eu aliquid sapientem has, no cum tollit oportere repudiandae. Ad eum cibo aeterno iracundia, detraxit consetetur mei ut.
        Et duo alii everti, nam eu iusto perpetua adipiscing, mel nisl mucius indoctum ut. Eu est eripuit partiendo iracundia, ne mel tempor conclusionemque. Vidit suavitate eu duo, unum facer copiosae eam ex. Id pri epicurei definiebas comprehensam, ut ius detraxit mandamus argumentum, fugit virtute liberavisse quo ad. At sed sumo audiam option, ei mei nonumy primis discere. Est an alterum imperdiet, ei modus sensibus sed.
        Percipit sententiae cotidieque per no, purto essent ius ei, ex qui debet zril dissentiunt. Duo ut antiopam disputationi, vim exerci laudem ornatus ei. Id nec phaedrum persequeris contentiones. Purto delenit maiorum his ut. Postea animal maluisset ei sit.
        Petentium iracundia hendrerit est ei, nec te legendos temporibus consequuntur, his solet munere at. Duo fugit cotidieque et, at doming utroque tractatos vis. Vim habeo minim at, at fugit facilis eam, vix te posse facete. Et vide graeco appetere duo.
        Pri quas assentior ut, at usu quod petentium conceptam. Eu postea invenire nam, ea qui libris molestiae. Quas postulant duo ex, eu tantas fastidii sed. Eu malis facer eripuit usu, ex verterem salutatus vix. Utroque mediocritatem his no, constituto mnesarchum quo ea.
        Nec in diam aliquip volutpat, an vim vidit noluisse. An vim solum minim similique, prompta gloriatur cum id, id nam integre ceteros efficiantur. An sea minim admodum invenire, at est iudico ridens. Ex duo erroribus quaerendum, eu epicurei pertinacia ius.
        Urbanitas sententiae pro an, ad mel choro putant. Laudem singulis urbanitas id duo. Malis fabulas cotidieque cum ei. Te sit expetenda principes, sed cu minim conceptam forensibus. Sed vituperata concludaturque cu, at sit unum libris voluptatibus.
        No mei alii quaeque, te commodo torquatos deterruisset quo, mundi soluta sadipscing ea sed. Ut has mazim mediocrem, mei primis impetus eu. Pro an quod libris, nisl inimicus definiebas et cum. Aliquip phaedrum abhorreant mel at. Eum sonet delenit recteque no, elitr oratio tempor vix ad.
        An iudicabit contentiones est, nusquam voluptua accommodare vix an. Ea pro explicari sadipscing philosophia, vel in viris docendi tincidunt. Ex nec vero maluisset democritum, duo et magna soleat graecis. Dicat consequat pri ad. Liber intellegam cu est, id feugait denique democritum nam. Lorem insolens mediocritatem ea cum.
        In duo meis pertinacia, lorem causae melius at his, quod mnesarchum adipiscing te cum. Ei ius alterum oportere, cum id sumo omittam. Duo ei commodo admodum, ius aeque eligendi ei, sit te audiam dolorem scripserit. At idque legere has. Ea sea eros saperet patrioque. Cum molestie sapientem ne, viderer fuisset patrioque pro at.</p></div>
    </div>`);
	if (window.location.hash === '#en') {
		$('#legalContent').text(languages.en.legal);
	}
}
