function servHoverUp(){
    $(this).find('.title').addClass('fadeOutUp');  
    $(this).find('.description').addClass('fadeInDown');  
}
function servHoverDown(){
    $(this).find('.title').removeClass('fadeOutUp');
    $(this).find('.description').removeClass('fadeInDown');
}