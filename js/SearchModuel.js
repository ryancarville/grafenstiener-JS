//const noUiSlider = require('nouislider');

function searchModuel() {
	$('.sortListings').append(
		`<div class='seachModWrapper'>
			<div class='searchModuel'>
				<form action='' class='searchCatag' id='searchFilter'>
					<div class='searchDropDown'>
						<select id='searchMarketMenu'>
							<optgroup label='searchMarket'>
								<option value=''>Market</option>
								<option value='investment'>Investment</option>
								<option value='buy'>Buy</option>
								<option value='rent'>Rent</option>
							</optgroup>
						</select>	
						<select id='searchTypeMenu'>
							<optgroup label='searchType'>
								<option value=''>Type</option>
								<option value='investment'>Investment</option>
								<option value='residential'>Residential</option>
								<option value='office'>Office</option>
							</optgroup>
						</select>
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
					</div>
					<input type="text" class="js-range-slider" name="my_range" value="" />			
					<button class='mainSearchBtn' type='button' onClick=filterSearch()>
					SORT
					</button>
					<button class='mainResetBtn' type='button' onClick=results(properties)>
					RESET
					</button>
				</form>
			</div>
		</div>`
	);
	$('.js-range-slider').ionRangeSlider({
		type: 'double',
		skin: 'round',
		min: 0,
		max: 10000000,
		from: 0,
		to: 10000000,
		grid: true,
		prefix: 'Fr. ',
		onChange: function(data) {
			console.dir(data);
		}
	});
}

function filterSearch() {
	const market = document.getElementById('searchMarketMenu');
	const canton = document.getElementById('searchCantonMenu');
	const type = document.getElementById('searchTypeMenu');
	const marketFilter = market.options[market.selectedIndex].value;
	const cantonFilter = canton.options[canton.selectedIndex].value;
	const typeFilter = type.options[type.selectedIndex].value;

	if (marketFilter && cantonFilter && typeFilter != '') {
		const allFilteres = properties
			.filter(
				listing =>
					listing.market === marketFilter &&
					listing.canton === cantonFilter &&
					listing.type === typeFilter
			)
			.map(listing => getListing(listing))
			.join('');
		document.getElementById('listingResults').innerHTML = allFilteres;
		if (allFilteres === '') {
			const noListingsMsg =
				'<p>We are sorry but there are currently no listings that match your search criteria.</p>';
			document.getElementById('listingResults').innerHTML = noListingsMsg;
		}
	} else if (marketFilter != '') {
		const marketFilterOnly = properties
			.filter(listing => listing.market === marketFilter)
			.map(listing => getListing(listing))
			.join('');
		document.getElementById('listingResults').innerHTML = marketFilterOnly;
		if (marketFilterOnly === '') {
			const noListingsMsg =
				'<p>We are sorry but there are currently no listings that match your search criteria.</p>';
			document.getElementById('listingResults').innerHTML = noListingsMsg;
		}
	} else if (cantonFilter != '') {
		const cantonFilterOnly = properties
			.filter(listing => listing.canton === cantonFilter)
			.map(listing => getListing(listing))
			.join('');
		document.getElementById('listingResults').innerHTML = cantonFilterOnly;
		if (cantonFilterOnly === '') {
			const noListingsMsg =
				'<p>We are sorry but there are currently no listings that match your search criteria.</p>';
			document.getElementById('listingResults').innerHTML = noListingsMsg;
		}
	} else if (typeFilter != '') {
		const typeFilterOnly = properties
			.filter(listing => listing.type === typeFilter)
			.map(listing => getListing(listing))
			.join('');
		document.getElementById('listingResults').innerHTML = typeFilterOnly;
		if (typeFilterOnly === '') {
			const noListingsMsg =
				'<p>We are sorry but there are currently no listings that match your search criteria.</p>';
			document.getElementById('listingResults').innerHTML = noListingsMsg;
		}
	}
	for (let i = 0; i < properties.length; i++) {
		let id = `#listingBTN${properties[i].id}`;
		$(id).on('click', () => {
			listingPage(properties[i]);
		});
		let imgID = `#image${properties[i].id}`;
		$(imgID).on('click', () => {
			listingPage(properties[i]);
		});
	}
}
