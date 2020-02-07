// $(window).scroll(function() {
//     if ($(this).scrollTop()>=900) {
//       // длительность анимации - 'slow'
//       // тип анимации -  'linear'
//       $('.aboutme__block1').fadeIn('slow','linear');
//     }
//     else {
//       // длительность анимации - 'fast'
//       // тип анимации -  'swing'
//       $('.aboutme__block1').fadeOut('fast','swing');
//     }
//   });

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