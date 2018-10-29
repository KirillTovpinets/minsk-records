
$('.services .service').hover(servHoverUp, servHoverDown);

let videoPlayer = {};


function onYouTubeIframeAPIReady(){
    $('#play-btn').click(() => (videoPlayer = createIframe()));
}

// SC.initialize({
//     client_id: 'YOUR_CLIENT_ID'
// });

// var track_url = 'http://soundcloud.com/forss/flickermood';
//     SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
//     console.log('oEmbed response: ', oEmbed);
// });