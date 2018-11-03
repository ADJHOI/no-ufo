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