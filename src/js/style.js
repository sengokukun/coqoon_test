$(function() {
  $(window).scroll(function() {
    var MasterHead = $('.MasterHead');
    if ($(window).scrollTop() > 680) {
      $(MasterHead).css("background-color","#111");
    } else {
      $(MasterHead).css("background-color","rgba(0,0,0,0.35)");
    }
  });
  $('.js-hideme').on('inview', function() {
    TweenMax.to(this, 1,{
      opacity: 1,
      y: 0,
      delay: .3
    })
  });
  $('.js-Service__Item').on('inview', function() {
    TweenMax.to('.js-Border--top', .5,{
      height: "80px",
      delay: 2,
      ease: Power4.easeOut
    }),
    TweenMax.to('.js-Border--bottom', .5,{
      width: "232px",
      delay: 2.4,
      ease: Power4.easeOut
    })
  });
  $('.js-SectionCaption').on('inview', function() {
    TweenMax.to('.js-Border--Extra', 1,{
      height: "437px",
      delay: 1,
      ease: Power1.easeOut
    })
  });

});

// $(document).ready(function() {
//   $(window).scroll( function(){
//     $('.js-hideme').each( function(i){
//       var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//       var bottom_of_window = $(window).scrollTop() + $(window).height();
//       if( bottom_of_window > bottom_of_object ){
//         TweenMax.to(this, 1,{
//           opacity: 1,
//           y: 0
//         })
//       }
//     });
//   });
// });
