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
// SC.initialize({
//     client_id: 'YOUR_CLIENT_ID'
// });

// var track_url = 'http://soundcloud.com/forss/flickermood';
//     SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
//     console.log('oEmbed response: ', oEmbed);
// });