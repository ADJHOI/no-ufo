$('#right-nav').click(function(){
    $('#right-nav').addClass('open');
    $('#left-nav').addClass('open');
    $('.left-wrapper').addClass('open');
    $('.right-wrapper').addClass('open');
});

$('#left-nav').click(function(){
    $('#right-nav').removeClass('open');
    $('#left-nav').removeClass('open');
    $('.left-wrapper').removeClass('open');
    $('.right-wrapper').removeClass('open'); 
});

$('.view-map').click(function(){
    $('#map').addClass('open'); 
});

$('.exit').click(function(){
    $('#map').removeClass('open'); 
});

$(window).resize(function(){
    var width = $(window).innerWidth();
//    console.log(width);
    if (width > 1024) {
        $('#right-nav').removeClass('open');
        $('#left-nav').removeClass('open');
        $('.left-wrapper').removeClass('open');
        $('.right-wrapper').removeClass('open'); }   
});

//scroll anim. START

$('#left-scroll')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('.left-wrapper, .left').animate({
            scrollTop: target.offset().top }, 700, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });


$('#right-scroll')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('.right-wrapper, .right').animate({
          scrollTop: target.offset().top
        }, 700, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });


 //-----Remove Hover for mobile | START -----//

$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { 
    try { 
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });

 //-----Remove Hover for mobile | END -----//

//Map View START


