$(function(){$(window).width()>480&&($(window).scroll(function(){var e=$(".MasterHead");$(window).scrollTop()>680?$(e).css("background-color","#111"):$(e).css("background-color","rgba(0,0,0,0.35)")}),$('a[href^="#"]').click(function(){var e=$(this).attr("href"),o=$("#"==e||""==e?"html":e),t=o.offset().top;return $("body,html").animate({scrollTop:t},400,"swing"),!1}),$(".js-Service__Item").on("inview",function(){TweenMax.to(".js-Border--top",.5,{height:"80px",delay:2,ease:Power4.easeOut}),TweenMax.to(".js-Border--bottom",.5,{width:"232px",delay:2.4,ease:Power4.easeOut})}),$(".js-SectionCaption").on("inview",function(){TweenMax.to(".js-Border--Extra",1,{height:"437px",delay:1,ease:Power1.easeOut})})),$(".js-Question__Item").click(function(){var e=$(this).find(".js-Question__Answer"),o=$(this).find(".Question__Icon--plus");e.hasClass("open")?(e.removeClass("open"),e.slideUp(),o.text("+")):(e.addClass("open"),e.slideDown(),o.text("-"))}),$(".js-Product__Block").on("inview",function(){$(".js-Product__Item").each(function(e){$(this).delay(150*e).css({display:"block",opacity:"0"}).animate({opacity:"1"},1e3)})});var e=$(".Toggle__Lines"),o=$(document.body),t=$(".MasterHead__Navigation");$(".Toggle").on("click",function(n){o.toggleClass("open"),n.preventDefault(),t.toggleClass(),o.hasClass("open")?$(e).addClass("active"):$(e).removeClass("active")}),$(window).resize(function(){$(this).width()>960&&t.is(":hidden")&&t.removeAttr("style")}),$(".js-hideme").on("inview",function(){TweenMax.to(this,1,{opacity:1,y:0,delay:.3})})});