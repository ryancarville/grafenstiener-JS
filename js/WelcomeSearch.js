function welcomeSearch() {
	$('.navContainer').prepend(
		`<div class='headerSearch'>
			<div class='navSearch '>
				<form class='navSearchForm transform' action={Results}>
					<section class='navCheckboxes'>
						
						<div class='checkboxInput'>
							<input
								type='checkbox'
								class='checkBtn'
								id='buying'
								value='buying'
							/>
							<label for='buying'></label>
						</div>
						<a class='buyingText'>Buying</a>
						<div class='checkboxInput'>
							<input
								type='checkbox'
								class='checkBtn'
								id='rent'
								value='rent'
							/>
							<label for='rent'></label>
						</div>
						<a class='rentText'>Rent</a>
						<div class='checkboxInput'>
							<input
								type='checkbox'
								class='checkBtn'
								id='residential'
								value='residential'
							/>
							<label for='residential'></label>
						</div>
						<a class='residentialText'>Residential</a>
						<div class='checkboxInput'>
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
					<div class='navSearchDropDown'>
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
					</div>
					<button type='submit' id='keywordBtn' onSubmit={Results}>
						Search
					</button>
				</form>
				<img src='images/search.png' alt='search icon' class='searchIcon' onClick=$('.transform').toggleClass('navSearchForm-active')>
				<img src="images/german.png" alt="german flag" class="langBtn" />
				<img src="images/english.png" alt="english flag" class="langBtn" />
			</div>
		</div>`
	);
}
