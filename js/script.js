var count = 0;

    $('.mobile-nav').click(function(){
        count ++;
        if (count > 2) {
            count = 1;
        }
        if (count == 1) {
        $('.mobile-nav').css({'-webkit-transform': 'scaleX(-1)', 'transform': 'scaleX(-1)'});    
        $('.left-wrapper').css({'display': 'none'});
        $('.right-wrapper').css({'display': 'block'});
    }   else {
        $('.mobile-nav').css({'-webkit-transform': 'scaleX(1)', 'transform': 'scaleX(1)'});        
        $('.left-wrapper').css({'display': 'block'});
        $('.right-wrapper').css({'display': 'none'});
    }
});

$(window).resize(function(){
    var width = $(window).width();
    if (width > 1024) {
        count = 0;
        $('.left-wrapper').css({'display': 'block'});
        $('.right-wrapper').css({'display': 'block'});
    } else {
        $('.mobile-nav').css({'-webkit-transform': 'scaleX(1)', 'transform': 'scaleX(1)'});         
        $('.left-wrapper').css({'display': 'block'});
        $('.right-wrapper').css({'display': 'none'});
    }
});


//    },function(){
//        $('.mobile-nav').toggleClass('open');
//        $('.left-wrapper').toggleClass('open');
//        $('.right-wrapper').toggleClass('open');
        
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

window.onload=function() {
  upTime('jul,8,2018,00:00:00');
}

function upTime(countTo) {
    
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);

  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

  document.getElementById('days').firstChild.nodeValue = days;
  document.getElementById('hours').firstChild.nodeValue = hours;
  document.getElementById('minutes').firstChild.nodeValue = mins;
  document.getElementById('seconds').firstChild.nodeValue = secs;

  clearTimeout(upTime.to);
    
  upTime.to=setTimeout(function(){ 
      upTime(countTo); },1000);
};

var timerId = 
    countdown(
        new Date(2025, 1, 1),
        function(ts) {
        document.getElementById('y1').innerHTML = 'in ' + ts.toHTML("strong");
    },
    countdown.YEARS);

if (new Date() >= new Date(2025, 1, 1)) {
    timerId =
    countdown(
        new Date(2025, 1, 1),
        function(ts) {
        document.getElementById('y1').innerHTML = 'NOW';
        $('#a1').css({'text-shadow': 'none', 'color': 'black'});
        },
    countdown.YEARS);
}

var timerId2 =
  countdown(
    new Date(2049, 1, 1),
    function(ts) {
      document.getElementById('y2').innerHTML = 'in ' + ts.toHTML("strong");
    },
    countdown.YEARS);

if (new Date() >= new Date(2049, 1, 1)) {
    timerId2 =
    countdown(
        new Date(2049, 1, 1),
        function(ts) {
        document.getElementById('y2').innerHTML = 'NOW';
        $('#a2').css({'text-shadow': 'none', 'color': 'black'});  
        },
    countdown.YEARS);
}

var timerId3 =
  countdown(
    new Date(2050, 1, 1),
    function(ts) {
      document.getElementById('y3').innerHTML = 'in ' + ts.toHTML("strong");
    },
    countdown.YEARS);

if (new Date() >= new Date(2050, 1, 1)) {
    timerId3 =
    countdown(
        new Date(2050, 1, 1),
        function(ts) {
        document.getElementById('y3').innerHTML = 'NOW';
        $('#a3').css({'text-shadow': 'none', 'color': 'black'});
        },
    countdown.YEARS);
}

var timerId4 =
  countdown(
    new Date(2054, 1, 1),
    function(ts) {
      document.getElementById('y4').innerHTML = 'in ' + ts.toHTML("strong");
    },
    countdown.YEARS);

if (new Date() >= new Date(2054, 1, 1)) {
    timerId4 =
    countdown(
        new Date(2054, 1, 1),
        function(ts) {
        document.getElementById('y4').innerHTML = 'NOW';
        $('#a4').css({'text-shadow': 'none', 'color': 'black'});
        },
    countdown.YEARS);
}

var timerId5 =
  countdown(
    new Date(2043, 1, 1),
    function(ts) {
      document.getElementById('y5').innerHTML = 'in ' + ts.toHTML("strong");
        
    },
    countdown.YEARS);

if (new Date() >= new Date(2043, 1, 1)) {
    timerId5 =
    countdown(
        new Date(2043, 1, 1),
        function(ts) {
        document.getElementById('y5').innerHTML = 'NOW';
        $('#a5').css({'text-shadow': 'none', 'color': 'black'});
        },
    countdown.YEARS);
}

var timerId6 =
  countdown(
    new Date(2040, 1, 1),
    function(ts) {
      document.getElementById('y6').innerHTML = 'in ' + ts.toHTML("strong");
    },
    countdown.YEARS);

if (new Date() >= new Date(2040, 1, 1)) {
    timerId6 =
    countdown(
        new Date(2040, 1, 1),
        function(ts) {
        document.getElementById('y6').innerHTML = 'NOW';
        $('#a6').css({'text-shadow': 'none', 'color': 'black'});
        },
    countdown.YEARS);
}

var timerId7 =
  countdown(
    new Date(2051, 1, 1),
    function(ts) {
      document.getElementById('y7').innerHTML = 'in ' + ts.toHTML("strong");
    },
    countdown.YEARS);

if (new Date() >= new Date(2051, 1, 1)) {
    timerId7 =
    countdown(
        new Date(2051, 1, 1),
        function(ts) {
        document.getElementById('y7').innerHTML = 'NOW';
        $('#a7').css({'text-shadow': 'none', 'color': 'black'});
        },
    countdown.YEARS);
}

var timerId8 =
  countdown(
    new Date(2059, 1, 1),
    function(ts) {
      document.getElementById('y8').innerHTML = 'in ' + ts.toHTML("strong");
    },
    countdown.YEARS);

if (new Date() >= new Date(2059, 1, 1)) {
    timerId8 =
    countdown(
        new Date(2059, 1, 1),
        function(ts) {
        document.getElementById('y8').innerHTML = 'NOW';
        $('#a8').css({'text-shadow': 'none', 'color': 'black'});
        },
    countdown.YEARS);
}

var timerId9 =
  countdown(
    new Date(2080, 1, 1),
    function(ts) {
      document.getElementById('y9').innerHTML = 'in ' + ts.toHTML("strong");
    },
    countdown.YEARS);

if (new Date() >= new Date(2080, 1, 1)) {
    timerId9 =
    countdown(
        new Date(2080, 1, 1),
        function(ts) {
        document.getElementById('y9').innerHTML = 'NOW';
        $('#a9').css({'text-shadow': 'none', 'color': 'black'});
        },
    countdown.YEARS);
}

 //-----Remove Hover for mobile | START -----//

$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
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