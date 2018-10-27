
$('.services .service').hover(servHoverUp, servHoverDown);

let videoPlayer = {};


function onYouTubeIframeAPIReady(){
    $('#play-btn').click(() => (videoPlayer = createIframe()));
}