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

  $('.js-Product__Block').on('inview', function() {
		var delaySpeed=150;
		var fadeSpeed=1000;
		$('.js-Product__Item').each(function(i){
			$(this).delay(i*(delaySpeed)).css({display:'block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
		});
	});

  $('.js-Question__Item').click(function() {
	var $answer = $(this).find('.js-Question__Answer');
  var $icon = $(this).find('.Question__Icon--plus');
  if($answer.hasClass('open')) {
    $answer.removeClass('open');
    $answer.slideUp();
    $icon.text('+');
  } else {
    $answer.addClass('open');
    $answer.slideDown();
    $icon.text('-');
  }
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
