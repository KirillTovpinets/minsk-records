$(document).ready(function(){
    let videoPlayer = {};

    const today = new Date();
    $('#current-year').text(today.getFullYear());
    function onYouTubeIframeAPIReady(){
        $('#play-btn').click(() => (videoPlayer = createIframe()));
    }

    let map = initMap();
    $('nav a[href^="#"], .scroll-top').click(function(){
        let fromTop, target;
        target = $(this).attr('href');
        fromTop = $(target).offset().top;
        $('body, html').animate({
            scrollTop: fromTop
        }, 1000);
        return false;
    })

    $('.play-btn').click(function(){
        let player = $('#track-1');
        player[0].play();
        $(this).parent().parent().addClass('is-playing');
    })

    $('.stop-btn').click(function(){
        let player = $('#track-1');
        console.log(player);
        player[0].pause();
        $(this).parent().parent().removeClass('is-playing');
    })

    $('audio').bind('ended', function(){
        $('.is-playing').removeClass('is-playing');
    })
})