var countUpBy = function(number) {
    return "25";
};


$(document).ready(function() {
  $('countUpBy form').submit(function(event) {
    var userNumbers = ["user_number", "multiplier"];

    userNumbers.forEach(function(userNumber) {
      var userInput = $("input#" + userNumber).val();
      $("." + userNumber).text(userInput);
    });



    $("#result").show();
    event.preventDefault();
  });
});



// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
