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
    items: 3,
    loop: true,
    margin: 30,
    nav: true,
    autoplay: true,
    dotsEach: 1,                           
    autoplayTimeout: 2000,
    responsiveClass:true,
    responsive:{
        0 :{
            items: 1,
            nav: false
        },
        690 :{
            items: 2
        },
        992 :{
            items: 3
        }
    }
});