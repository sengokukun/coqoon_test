$(function() {
  var wid = $(window).width();
  var x = 480;
  if (wid > x) {
    $(window).scroll(function() {
      var MasterHead = $('.MasterHead');
      if ($(window).scrollTop() > 680) {
        $(MasterHead).css("background-color","#111");
      } else {
        $(MasterHead).css("background-color","rgba(0,0,0,0.35)");
      }
    });
    $('a[href^="#"]').click(function() {
       var speed = 400;
       var href= $(this).attr("href");
       var target = $(href == "#" || href == "" ? 'html' : href);
       var position = target.offset().top;
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
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
  }
  $('.js-Button--top').on('inview',function(){
    TweenMax.to(this, 1,{
      opacity: 1,
      scale: 1,
      delay: .1
    })
  });

  $('.js-Question__Block').click(function() {
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

  $('.js-Product__Block').on('inview', function() {
    var delaySpeed=150;
    var fadeSpeed=1000;
    $('.js-Product__Item').each(function(i){
      $(this).delay(i*(delaySpeed)).css({display:'block',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
    });
  });

  var triggers = $('.Toggle__Lines'),
    body = $(document.body),
	  menu = $('.MasterHead__Navigation')
  $('.Toggle').on('click', function(e) {
    body.toggleClass('open');
    e.preventDefault(); menu.toggleClass();
    if (body.hasClass('open')) {
      $(triggers).addClass('active');
    } else {
      $(triggers).removeClass('active');
    }
  });

  $(window).resize(function(){
    var w = $(this).width(); if(w > 960 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });


  $('.js-hideme').on('inview', function() {
    TweenMax.to(this, 1,{
      opacity: 1,
      y: 0,
      delay: .3
    })
  });
});
