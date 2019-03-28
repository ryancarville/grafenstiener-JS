function office() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	dataCounter();
	$('.main').append(
		`<section>
			<div class='officePage'>
				<div class='officeMsg'>
					<h2>Switzerlands Premier Agencies</h2>
					<h4>Home is where the heart is</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<img src='images/bioPic.jpeg' alt='Phot of Karen Gräfenstiener' id='bioPic'>
			</div>
		</section>`
	);
}
