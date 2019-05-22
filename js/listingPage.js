function listingPage(listing) {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});

	$('.main').empty();
	$('.main').append(
		`<div class='listingPage'>
			<div id='${listing.id}'>
				<div class="slideshow-container">
					<div class="mySlides fade">
						<div class="numbertext">1 / 3</div>
						<img src="./images/listings/${listing.image1}" style="width:100%">
						<div class="text">Entrance</div>
					</div>
				
					<div class="mySlides fade">
						<div class="numbertext">2 / 3</div>
						<img src="images/listings/${listing.image2}" style="width:100%">
						<div class="text">Living Room</div>
					</div>
				
					<div class="mySlides fade">
						<div class="numbertext">3 / 3</div>
						<img src="images/listings/${listing.image3}" style="width:100%">
						<div class="text">Kitchen</div>
					</div>
				
					<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
					<a class="next" onclick="plusSlides(1)">&#10095;</a>
					
				</div>
				<br>
				
				<div style="text-align:center">
					<span class="dot" onclick="currentSlide(1)"></span> 
					<span class="dot" onclick="currentSlide(2)"></span> 
					<span class="dot" onclick="currentSlide(3)"></span> 
					
				</div>
				<button type='button' class='backBtn' onclick=results(properties)>BACK TO SEARCH</button>
				<div class='statsWrap'>																	
					<div class='propertyStats'>
						<p>
						${listing.price} CHF
						<br>
						ID: 
						${listing.id} 
						<br>
						Property Name:  
						${listing.name} 
						<br>
						Address:
						${listing.address} 
						<br>
						Canton: 
						${listing.canton} 
						<br>							
						City: 
						${listing.city} 
						<br>
						Size:
						${listing.size}
						<br><br>
						Documentation:
						<a href='${listing.docs}'>Click Here for Docs</a>
						</p>
					</div>
					<div class='propertyInfo' id='property${listing.id}'>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
						enim ad minim veniam, quis nostrud exercitation ullamco laboris
						nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
						in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						sunt in culpa qui officia deserunt mollit anim id est laborum."
						</p>
					</div>
											
				</div>	
				<div class='googleMap'>
						<iframe 
						width=100%
						height=400px
							id="gmap_canvas" 
							src='https://maps.google.com/maps?q=` +
			listing.address +
			`&t=&z=13&ie=UTF8&iwloc=&output=embed'
							frameborder="0" 
							scrolling="no" 
							marginheight="0" 
							marginwidth="0">
						</iframe>
					</div>
			</div>						
		</div>`
	);
}
