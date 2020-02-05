$(window).scroll(function() {
    if ($(this).scrollTop()>=100) {
      // длительность анимации - 'slow'
      // тип анимации -  'linear'
      $('.aboutme__block1').fadeIn('slow','linear');
    }
    else {
      // длительность анимации - 'fast'
      // тип анимации -  'swing'
      $('.aboutme__block1').fadeOut('fast','swing');
    }
  });