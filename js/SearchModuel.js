function searchModuel() {
	$('.sortListings').append(
		`<div class='seachModWrapper'>
			<div class='searchModuel'>
				<form action='' class='searchCatag'>
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
								<option value='zürich'>Zürich</option>
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
						
						<button class='mainSearchBtn' type='submit' onClick="$(results())">
						Search
						</button>
					</div>
					
				</form>
			</div>
		</div>`
	);
}
