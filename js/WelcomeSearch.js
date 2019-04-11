function welcomeSearch() {
	$('.navContainer').prepend(
		`<div class='headerSearch'>
			<div class='navSearch '>
				<div class='navSearchForm transform'>
					<div class='navSearchDropDown'>
						<select id='navSearchMarketMenu'>
							<optgroup label='searchMarket'>
								<option value=''>Market</option>
								<option value='investment'>Investment</option>
								<option value='buy'>Buy</option>
								<option value='rent'>Rent</option>
							</optgroup>
						</select>	
						<select id='navSearchTypeMenu'>
							<optgroup label='searchType'>
								<option value=''>Type</option>
								<option value='residential'>Residential</option>
								<option value='office'>Office</option>
								<option value='investment'>Investment</option>
							</optgroup>
						</select>	
						<select id='navSearchCantonMenu'>
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
						<button type='button' class='keywordBtn' id='keywordBtn' onClick=welcomeNavSearch()>
						Search
						</button>	
					</div>
				</div>
				<img src='images/search.png' alt='search icon' class='searchIcon' onClick=$('.transform').toggleClass('navSearchForm-active')>
				<span class="langBtn" >DE</span>
				<span class="langBtn" >EN</span>
			</div>
		</div>`
	);
	$('.keywordBtn').on('click', () => {
		$('.transform').removeClass('navSearchForm-active');
	});
}

function welcomeNavSearch() {
	const market = document.getElementById('navSearchMarketMenu');
	const canton = document.getElementById('navSearchCantonMenu');
	const type = document.getElementById('navSearchTypeMenu');
	const marketFilter = market.options[market.selectedIndex].value;
	const cantonFilter = canton.options[canton.selectedIndex].value;
	const typeFilter = type.options[type.selectedIndex].value;
	results(properties);
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
}
