$(window).scroll(function() {
    if ($(this).scrollTop()>=100) {      
      $('.aboutme__up').fadeIn('slow','linear');
    }
    else {      
      $('.aboutme__up').fadeOut('fast','swing');
    }
  });

$("#portfolio__slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    dotsEach: 1,                           
    autoplayTimeout: 3000,
    // responsiveClass:true,
    animateIn: 'zoomInRight',
    animateOut: "zoomOutLeft",
    // responsive:{
    //     0 :{
    //         items: 1,
    //         nav: false
    //     },
    //     690 :{
    //         items: 2
    //     },
    //     992 :{
    //         items: 3
    //     }
    // }
});

$('.owl-prev span').html('<img src="../img/portfolio/prev.png"></img>');
$('.owl-next span').html('<img src="../img/portfolio/next.png"></img>');

$('#about').on('click', function(){        
    let dest = document.querySelector('.aboutme'); 
      $('html,body').animate({ 
        scrollTop: $(dest).offset().top}, 700);
    });

$('#scroll').on('click', function(){        
    let dest = document.querySelector('.aboutme'); 
      $('html,body').animate({ 
        scrollTop: $(dest).offset().top}, 700);
    });
        
$('#skills').on('click', function(){        
    let dest = document.querySelector('.skills'); 
      $('html,body').animate({ 
        scrollTop: $(dest).offset().top}, 700);
    });

$('#portfolio').on('click', function(){        
    let dest = document.querySelector('.portfolio'); 
      $('html,body').animate({ 
        scrollTop: $(dest).offset().top}, 700);
    });

$('#contact').on('click', function(){        
    let dest = document.querySelector('.contact'); 
      $('html,body').animate({ 
        scrollTop: $(dest).offset().top}, 700);
    });

$('#up').on('click', function(){        
  let dest = document.querySelector('.header'); 
    $('html,body').animate({ 
      scrollTop: $(dest).offset().top}, 700);
  });


    jQuery(document).ready(function($) {

      $('.tab_ru').hide();
      $('.tab_en').show();
      $('.header__lang p:first').addClass('active');
    
      $('.header__lang p').click(function(event) {
        $('.header__lang p').removeClass('active');
        console.log(this);
        $(this).addClass('active');
        $('.tab_ru').hide();
        $('.tab_en').hide();

        let selectContent = $(this).attr("id");
        console.log(selectContent);        
        $(selectContent).fadeIn();    
      })  
    })