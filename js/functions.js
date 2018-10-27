function servHoverUp(){
    $(this).find('.title').addClass('fadeOutUp');  
    $(this).find('.description').addClass('fadeInDown');  
}
function servHoverDown(){
    $(this).find('.title').removeClass('fadeOutUp');
    $(this).find('.description').removeClass('fadeInDown');
}
function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    switch (event.data) {
        case YT.PlayerState.ENDED:
            videoPlayer.destroy();    
            break;
        case YT.PlayerState.PAUSED:
            setTimeout(function(){
                videoPlayer.destroy();
            }, 5000);
            break;
        default:
            break;
    }
}
function stopVideo() {
    player.stopVideo();
}

function createIframe() {
    return new YT.Player('player', {
        videoId: 'Y44PzLm2_y8',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
}