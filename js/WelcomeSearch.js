function welcomeSearch() {
	$('.navContainer').prepend(
		`<div class='headerSearch'>
			<div class='navSearch '>
				<form class='navSearchForm transform' action={Results}>
					<div class='navSearchDropDown'>
						<select id='navSearchCatagoryMenu'>
							<optgroup label='searchCatagory'>
								<option value=''>Type</option>
								<option value='ivestment'>Investment</option>
								<option value='buy'>Buy</option>
								<option value='rent'>Rent</option>
							</optgroup>
						</select>	
						<select id='navSearchCatagoryMenu'>
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
						<button type='submit' id='keywordBtn' onSubmit={Results}>
						Search
						</button>	
					</div>
				</form>
				<img src='images/search.png' alt='search icon' class='searchIcon' onClick=$('.transform').toggleClass('navSearchForm-active')>
				<span class="langBtn" >DE</span>
				<span class="langBtn" >EN</span>
			</div>
		</div>`
	);

	if ($('#navOffice').click) {
		$('#navOffice').toggleClass('bold');
	}
}
