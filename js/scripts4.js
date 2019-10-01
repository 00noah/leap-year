// business logic

var result = function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
};

// user interface logic
$(document).ready(function() {
  $("form#primes").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());

    $(".factor").text(n);
    // $(".factorialResult").text(result(n));

    $("#result").show();
  });
});
