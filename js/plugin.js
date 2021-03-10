$(function(){
    // adjust Header Hieght
let myheader = $('header');
let myslider = $(".bxslider");
myheader.height($(window).height());
    $(window).resize(function(){
        myheader.height($(window).height());

    });

    // links add active class
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // adjust bxslider li item center
    myslider.each(function(){
        $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) / 2);
    })
    // trigger bxslide
    myslider.bxSlider({
        
        pager: false,
       
      });

      // Smoth  To Div
      $('.links li a').click(function(){
          $('html,body').animate({
              scrollTop: $('#'+ $(this).data('value')).offset().top 
          },1000)
      })

      // our Auto SLider code
     $ (function autoSlider(){
          $('.slider .active').each(function(){
              if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(5000,function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
              } else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                })
              }
          });

      }());
      // trigger mix it
      var mix = $('#mix');
      var mixer = mixitup(mix);

      // adjust suffle links
      $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');

      })

      // trigger nice scroll
      
      $("html").niceScroll({
        cursorwidth:12,
        cursoropacitymin:0.1,
        cursorcolor:'#ff0f87',
        cursorborder:'none',
        cursorborderradius:4,
        autohidemode:'leave'
  });  
  // adjust drop nav bar
  $(".menu-toggle i").click(function(){
      $(this).toggleClass('fa fa-times');
    $('nav .links').toggleClass('active');


  })



});
