function slideShow() {
	$('.main').prepend(
		`<div class="slideshowWrap">
        <img
            src="images/image1.jpg"
            alt="slideshow image"
            class="slideshowImg"
        />
        <img
            src="images/image2.jpg"
            alt="slideshow image"
            class="slideshowImg"
        />
        <img
            src="images/image3.jpg"
            alt="slideshow image"
            class="slideshowImg"
        />
    </div>`
	);
}
