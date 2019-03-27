function welcomeSearch() {
	$('.navContainer').prepend(
		`<div class='headerSearch'>
		<div class='navSearch '>
			<form class='navSearchForm transform' action={Results}>
					<select id='catagoryMenu'>
						<optgroup label='catagory'>
							<option value=''>Catagory</option>
							<option value='commercial'>Commercial</option>
							<option value='residential'>Residential</option>
						</optgroup>
					</select>
					<select id='typeMenu'>
						<optgroup label='type'>
							<option value=''>Type</option>
							<option value='buy'>Buy</option>
							<option value='rent'>Rent</option>
							<option value='sell'>Sell</option>
						</optgroup>
					</select>
					<select id='roomsMenu'>
						<optgroup label='rooms'>
							<option value=''>Rooms</option>
							<option value='all'>All</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</optgroup>
					</select>
					<select id='bathMenu'>
					<optgroup label='baths'>
						<option value=''>Bathrooms</option>
						<option value='all'>All</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</optgroup>
				</select>
					<input
						class='mainSearchInput'
						type='text'
						placeholder='Enter Search Here'
					/>
					
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
