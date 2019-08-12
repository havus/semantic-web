$('.pic-case').css({
	'opacity': 0,
	'transition': '.5s'
})

$('.smooth-scroll').on('click', function(e) {
	(e).preventDefault();
	let distance = $(this).attr('href');

	$([document.documentElement, document.body]).animate({
		scrollTop: $(distance).offset().top - 100
	})
})

$(window).scroll(function() {
	console.log($(this).scrollTop());
	let scrollVal = $(this).scrollTop();
	// 1254
	if (scrollVal > 1250) {
		$('.pic-case').each((i) => {
			setTimeout(() => {
				$('.pic-case').eq(i).css('opacity', 1);
			}, 200 * i);
		})
	}

	if (scrollVal < 1200) {
		$('.pic-case').css('opacity', 0);
		console.log('<<<<<<<<<<<<<<<');
	}

})