function welcome() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});

	$('.main').empty();
	slideShow();
	$('.main').append(
		`<div class='welcomePage'>
			<div class='welcomeMsg'>
				<h2>Welcome!</h2>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
				</p>
			</div>
		</div>`
	);
}
