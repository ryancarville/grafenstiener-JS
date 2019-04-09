function searchModuel() {
	$('.sortListings').append(
		`<div class='seachModWrapper'>
			<div class='searchModuel'>
				<form action='' class='searchCatag' id='searchFilter'>
					<div class='searchDropDown'>
						<select id='searchCantonMenu'>
							<optgroup label='searchCanton'>
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
								<option value='zurich'>Zürich</option>
							</optgroup>
						</select>
						<select id='searchTypeMenu'>
							<optgroup label='searchType'>
								<option value=''>Type</option>
								<option value='investment'>Investment</option>
								<option value='residential'>Residential</option>
							</optgroup>
						</select>
						<div id="pmd-slider-range-tooltip"  class="pmd-range-slider pmd-range-tooltip"></div>
						
						<button class='mainSearchBtn' type='button' onClick="$(filterSearch())">
						Sort
						</button>
						<button class='mainSearchBtn' type='button' onClick="$(buy(properties))">
						Reset
						</button>
					</div>
					
				</form>
			</div>
		</div>`
	);
}

function filterSearch() {
	const canton = document.getElementById('searchCantonMenu');
	const type = document.getElementById('searchTypeMenu');
	const cantonFilter = canton.options[canton.selectedIndex].value;
	const typeFilter = type.options[type.selectedIndex].value;

	if (cantonFilter && typeFilter != '') {
		const allFilteres = properties
			.filter(
				listing =>
					listing.canton === cantonFilter && listing.type === typeFilter
			)
			.map(listing => getListing(listing))
			.join('');
		document.getElementById('listingResults').innerHTML = allFilteres;
	} else if (cantonFilter != '') {
		const cantonFilterOnly = properties
			.filter(listing => listing.canton === cantonFilter)
			.map(listing => getListing(listing))
			.join('');
		document.getElementById('listingResults').innerHTML = cantonFilterOnly;
	} else if (typeFilter != '') {
		const typeFilterOnly = properties
			.filter(listing => listing.type === typeFilter)
			.map(listing => getListing(listing))
			.join('');
		document.getElementById('listingResults').innerHTML = typeFilterOnly;
	}
}
