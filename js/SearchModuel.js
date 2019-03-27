function searchModuel() {
	$('.investmentPage, .residentialPage, .sellPage').prepend(
		`<div class='seachModWrapper'>
			<div class='searchModuel'>
				<form action='' class='searchCatag'>
				
				<section class='checkboxes'>
					<div class='checkboxSellingInput'>
						<input
							type='checkbox'
							class='checkBtn'
							id='selling'
							value='selling'
						/>
						<label for='selling'></label>
					</div>
					<a class='sellingText'>Selling</a>
					<div class='checkboxBuyingInput'>
						<input
							type='checkbox'
							class='checkBtn'
							id='buying'
							value='buying'
						/>
						<label for='buying'></label>
					</div>
					<a class='buyingText'>Buying</a>
					<div class='checkboxRentInput'>
						<input
							type='checkbox'
							class='checkBtn'
							id='rent'
							value='rent'
						/>
						<label for='rent'></label>
					</div>
					<a class='rentText'>Rent</a>
					<div class='checkboxResidentialInput'>
						<input
							type='checkbox'
							class='checkBtn'
							id='residential'
							value='residential'
						/>
						<label for='residential'></label>
					</div>
					<a class='residentialText'>Residential</a>
					<div class='checkboxInvestmentInput'>
						<input
							type='checkbox'
							class='checkBtn'
							id='investment'
							value='investment'
						/>
						<label for='investment'></label>
					</div>
					<a class='investmentText'>Investment</a>
					
				</section>
				<br />
				<div class='searchDropDown'>
					<select id='searchCatagoryMenu'>
						<optgroup label='searchCatagory'>
							<option value=''>Canton</option>
							<option value='aargau'>Aargau</option>
							<option value='appenzell ausserrhoden'>Appenzell Ausserrhoden</option>
							<option value='appenzell innerrhoden'>Appenzell Innerrhoden</option>
							<option value='basel landschaft'>Basel-Landschaft</option>
							<option value='basel stadt'>Basel-Stadt</option>
							<option value='bern'>Bern</option>
							<option value='fribourg'>Fribourg</option>
							<option value='geneva'>Geneva</option>
							<option value='glarus'>Glarus</option>
							<option value='grisons'>Grisons</option>
							<option value='jura'>Jura</option>
							<option value='luzern'>Luzern</option>
							<option value='neuchâtel'>Neuchâtel</option>
							<option value='nidwalden'>Nidwalden</option>
							<option value='obwalden'>Obwalden</option>
							<option value='schaffhausen'>Schaffhausen</option>
							<option value='schwyz'>Schwyz</option>
							<option value='solothurn'>Solothurn</option>
							<option value='st gallen'>St. Gallen</option>
							<option value='thurgau'>Thurgau</option>
							<option value='ticino'>Ticino</option>
							<option value='uri'>Uri</option>
							<option value='valais'>Valais</option>
							<option value='vaud'>Vaud</option>
							<option value='zug'>Zug</option>
							<option value='zürich'>Zürich</option>
						</optgroup>
					</select>
						
					
					
				</div>
				<div id="pmd-slider-range-tooltip"  class="pmd-range-slider pmd-range-tooltip"></div>
			
				
					<button class='mainSearchBtn' type='submit' onClick="$(results())">
						Search
					</button>
					
				</form>
			</div>
		</div>`
	);
	var pmdSliderRangeTooltip = document.getElementById(
		'pmd-slider-range-tooltip'
	);
	noUiSlider.create(pmdSliderRangeTooltip, {
		start: [0, 10000000],
		connect: true,
		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
		range: {
			min: 0,
			max: 10000000
		}
	});
}
