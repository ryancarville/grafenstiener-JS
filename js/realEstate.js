function realEstate() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='realEstateMsg'>
				<h2>What we can do for you!</h2>
				<p>
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
					in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum."
					</p>
			</div>
				<div class='realEstatePage'>
					<div class='buyMsg'>
						<button type='button' class='button' id='buyButton' onClick=results(properties)>Buy Real Estate</button>
						<p>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
							in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
							</p>
						<div class='buttonWrap'>
							<button type='button' id='investButton' onClick=results(properties)>Investment</button>
							<button type='button' id='resButton' onClick=results(properties)>Residential</button>
						</div>
					</div>
					<div class='rentMsg'>
					<button type='button' id='rentButton' onClick=results(properties)>Rent Real Estate</button>
						<p>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
							in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
							</p>
						<div class='buttonWrap'>
							<button type='button' id='officeButton' onClick=results(properties)>Office</button>
							<button type='button' id='resButton' onClick=results(properties)>Residential</button>
						</div>
					</div>
					<div class='sellMsg'>
					<button type='button' id='sellButton' onClick=sell()>Sell Real Estate</button>
						<p>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
							in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
							</p>
					</div>
				</div>
			`
	);
}
