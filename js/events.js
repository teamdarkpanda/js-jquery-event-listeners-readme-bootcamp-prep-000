//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty");
  });
}

function pressIt() {
  $('form').submit(function(event) {
    
  });
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});
