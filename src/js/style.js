$(document).ready(function() {
  $(window).scroll( function(){
    $('.js-hideme').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        // $(this).animate({
        //   'opacity':'1',
        // },1500);
        TweenMax.to(this, 1.2,{
          opacity: 1,
          delay: .5,
          y: 0
        })
      }
    });
  });
});
