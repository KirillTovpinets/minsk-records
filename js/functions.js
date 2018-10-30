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
function initMap() {
    const position = {lat: 53.8986301, lng: 27.5730236};
    const map = new google.maps.Map(document.getElementById('map'), {
        center: position,
        zoom: 15
    });
    let marker = new google.maps.Marker({position: position, map: map});

    var request = {
        placeId: 'ChIJZRHRnKDa20YRFicN1hG3Shc',
        fields:['reviews']
      };
        
    let service = new google.maps.places.PlacesService(map);
    service.getDetails(request, callback);
    return map;
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        const comments = results.reviews;

        comments.forEach((e, index) => {
            let control = document.createElement("li");
            control.setAttribute("data-target","#testimonials-slider");
            control.setAttribute("data-slide-to",index);
            if(index === 0){
                control.classList.add("active");
            }
            let controlContainer = document.getElementById('slider-controls');
            controlContainer.appendChild(control);

            let slide = document.createElement('div');
            slide.classList.add('carousel-item');
            slide.classList.add('testimonial');
            if(index === 0){
                slide.classList.add('active');
            }
            let pContent = document.createElement('p');
            pContent.innerText = e.text;
            slide.appendChild(pContent);

            let pAuthor = document.createElement('p');
            let citeAuthor = document.createElement('cite');
            citeAuthor.innerText = e.author_name;
            pAuthor.appendChild(citeAuthor);
            slide.appendChild(pAuthor);

            let slider = document.getElementById('slider-container');
            slider.appendChild(slide);
        }) 
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