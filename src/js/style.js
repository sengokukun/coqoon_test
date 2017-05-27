$(document).ready(function() {
  $(window).scroll( function(){
    $('.js-hideme').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        TweenMax.to(this, 1,{
          opacity: 1,
          y: 0
        })
      }
    });
  });
});
