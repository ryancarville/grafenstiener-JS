function references() {
	$(document).ready(function() {
		$(this).scrollTop(0);
	});
	$('.main').empty();
	$('.main').append(
		`<div class='refWrapper'>
            <div class='refHeader'>
                <h2>Clients who love us</h2>
            </div>
            <div class='refImages'>
                <div class='refImg' onClick='$(refPage(1))'>
                <img src='images/references/1.jpg' alt='referncesImg' />
                <a>Julia Castro</a>
                </div>
                <div class='refImg' onClick='$(refPage(2))'>
                <img src='images/references/2.jpg' alt='referncesImg' />
                <a>Sam Golden</a>
                </div>
                <div class='refImg' onClick='$(refPage(3))'>
                    <img src='images/references/3.jpg' alt='referncesImg' />
                    <a>James Smith</a>
                </div>
                <div class='refImg' onClick='$(refPage(4))'>
                    <img src='images/references/4.jpg' alt='referncesImg' />
                    <a>Sandra Hull</a>
                </div>
            </div>
        </div>`
	);
}
