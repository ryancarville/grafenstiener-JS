function welcome() {
	//scroll to top of page when loaded
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	//clear the stage
	$('.main').empty();
	//load the welcome slide show
	slideShow();
	//prepend the welcoem page div
	$('.main').prepend(`<div class='welcomePage'></div>`);
	//set time out for welcome content
	setTimeout(function welcomeContent() {
		$('.welcomePage').prepend(`
		<div class='welcomeContent'>
			<h3>mit kompetenz und menschenkenntnis</h3>	
		<div class='sortHome'></div></div>
		`),
			searchModule();
	}, 2000);
}
