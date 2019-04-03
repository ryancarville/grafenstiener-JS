function searchModuel() {
	$('.sortLists').append(
		`<div class='seachModWrapper'>
			<div class='searchModuel'>
				<form action='' class='searchCatag'>
					<section class='checkboxes'>
						<div class='checkbox' id='checkboxSell'>
							<input
								type='checkbox'
								class='checkBtn'
								id='sell'
								value='sell'
							/>
							<label for='sell'></label>
						</div>
						<span class='checkboxText'>Sell</span>
						<div class='checkbox' id='checkboxBuy'>
							<input
								type='checkbox'
								class='checkBtn'
								id='buy'
								value='buy'
							/>
							<label for='buy'></label>
						</div>
						<span class='checkboxText'>Buy</span>
						<div class='checkbox' id='checkboxRent'>
							<input
								type='checkbox'
								class='checkBtn'
								id='rent'
								value='rent'
							/>
							<label for='rent'></label>
						</div>
						<span class='checkboxText'>Rent</span>
						<div class='checkbox' id='checkboxRes'>
							<input
								type='checkbox'
								class='checkBtn'
								id='res'
								value='res'
							/>
							<label for='res'></label>
						</div>
						<span class='checkboxText'>Res</span>
						<div class='checkbox' id='checkboxInvestmentInput'>
							<input
								type='checkbox'
								class='checkBtn'
								id='investment'
								value='investment'
							/>
							<label for='investment'></label>
						</div>
						<span class='checkboxText'>Investment</span>
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
					<p>
					<label for="amount">Price range:</label>
					<input type="text" id="amount" readonly />
					</p>
					<div class='slider-range' id="slider-range" ></div>
						<button class='mainSearchBtn' type='submit' onClick="$(results())">
							Search
						</button>
					
				</form>
			</div>
		</div>`
	);
}
