function dumpData() {
	$(window).scroll.off('scroll', '#counter-stats', false);
}
function rollData() {
	$(window).scroll(function() {
		$('.counting').each(function() {
			var $this = $(this),
				countTo = $this.attr('data-count');
			//text or image to be animated
			$({ countNum: $this.text() }).animate(
				{
					countNum: countTo
				},

				{
					duration: 2000,
					easing: 'linear',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
						//alert('finished');
					}
				}
			);
		});
	});
}

function dataCounter() {
	$('main').append(
		`<div class='dataCounter' id='scroll-to' onLoad='rollData()'>
					<section
						id='counter-stats'
						class='wow fadeInRight'
						data-wow-duration='1.4s'>
						<div class='container'>
							<div class='col-lg-3 stats'>
								<i class='fa'>
									<img
										src='images/stepsCounter.jpg'
										alt='step counter icon'
										class='counterIcon'
									>
								</i>
								<div class='counting' data-count='82354'>
									0
								</div>
								<h5>Sq Meters Walked</h5>
							</div>

							<div class='col-lg-3 stats'>
								<i class='fa'>
									<img
										src='images/contractCounter.png'
										alt='step counter icon'
										class='counterIcon'
									>
								</i>
								<div class='counting' data-count='280'>
									0
								</div>
								<h5>Contracts Signed</h5>
							</div>

							<div class='col-lg-3 stats'>
								<i class='fa'>
									<img
										src='images/happyCounter.png'
										alt='step counter icon'
										class='counterIcon'
									>
								</i>
								<div class='counting' data-count='75'>
									0
								</div>
								<h5>Happy clients</h5>
							</div>

							<div class='col-lg-3 stats'>
								<i class='fa'>
									<img
										src="images/coffeeCounter.png"
										alt='step counter icon'
										class='counterIcon'
									>
								</i>
								<div class='counting' data-count='999'>
									0
								</div>
								<h5>Cups of coffee</h5>
							</div>
						</div>
					</section>
				</div>`
	);
}
