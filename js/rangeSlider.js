// multiple range slider with default tooltip open
var pmdSliderRangeTooltip = document.getElementById('pmd-slider-range-tooltip');
noUiSlider.create(pmdSliderRangeTooltip, {
	start: [10, 50],
	connect: true,
	tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
	range: {
		min: 0,
		max: 100
	}
});
