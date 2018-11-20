let videoPlayer = {};
function onYouTubeIframeAPIReady(){
	videoPlayer = createIframe();
}
$(document).ready(function(){

    const today = new Date();
		$('#current-year').text(today.getFullYear());

    let map = initMap();
    $('nav a[href^="#"], .to-top').click(function(){
        let fromTop, target;
        target = $(this).attr('href');
        fromTop = $(target).offset().top;
        $('body, html').animate({
            scrollTop: fromTop
        }, 1000);
        return false;
    })

    $('.play-btn').click(function(){
				const nowPlaying = $('.is-playing');
				if (nowPlaying.length !== 0) {
					const audio = nowPlaying.children('audio');
					audio[0].pause();
					nowPlaying.removeClass('is-playing');
				}
        const player = $(this).parent().siblings('audio');
        player[0].play();
        $(this).parent().parent().addClass('is-playing');
    })

    $('.stop-btn').click(function(){
			const player = $(this).parent().siblings('audio');
        console.log(player);
        player[0].pause();
        $(this).parent().parent().removeClass('is-playing');
    })

    $('audio').bind('ended', function(){
        $('.is-playing').removeClass('is-playing');
    })

    // $('.clients-slider').slick({
    //     slidesToShow: 5,
    //     lazyload:true,
    //     arrows:false,
    //     autoplay:true
		// });

		$('.track').hover(function () {
			$(this).find('.animated').addClass('fadeInDown');
		},function () {
			$(this).find('.fadeInDown').addClass('fadeOutUp');
			$(this).find('.fadeInDown').removeClass('fadeInDown');
			const that = this;
			setTimeout(() => {
				$(that).find('.fadeOutUp').removeClass('fadeOutUp');
			}, 1000);
		})
		
		// const audioHeight = $('.audio-container').outerHeight();
		// $('.video-container').css("height", audioHeight);
})