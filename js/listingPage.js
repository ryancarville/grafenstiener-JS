function listingPage(listing) {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='listingPage'>
		<div id='${listing.id}'>
		<div class='imageCarousel'>
		<div id="showContainer">
      <div class="imageContainer" id="im_1">
	  		<img src='images/listings/${listing.image1}' />
        <div class="caption">
          Exteriror
        </div>
      </div>
      <div class="imageContainer" id="im_2">
	  		<img src='images/listings/${listing.image2}' />
        <div class="caption">
          Livingroom
        </div>
      </div>
      <div class="imageContainer" id="im_3">
	  		<img src='images/listings/${listing.image3}' />
        <div class="caption">
          Kitchen
        </div>
      </div>
      <div class="navButton" id="previous">&#10094;</div>
      <div class="navButton" id="next">&#10095;</div>
    </div>
		
		</div>
		<p>ID:  
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
		Price: 
		${listing.price} 
		<br>
		Size:
		${listing.size}
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
		</div>`
	);
	imageCarousel();
}
