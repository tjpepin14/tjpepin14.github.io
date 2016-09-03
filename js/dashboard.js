$(function() {
   $("#practiceTime").val("5");
   $("#successRate").val("90");
   $("#emailReminder").val("10:00");
   $("select[name=amPm]").val(2);
});

$(function() { // learn button click
   $("#learnButton").click(function() {
      window.location = "tutorial.html#Carbonyl"; // default for now
      return false;
   });
});

$(function() { // review button click
   $("#reviewButton").click(function() { // works, but is only temporary, to show that it works
      // if ($("#reviewButton").hasClass("btn-primary")) {
      //    $("#reviewButton").removeClass("btn-primary");
      //    $("#reviewButton").addClass("btn-default");
      //    $("#reviewButton").prop("disabled", true);
      //    document.getElementById("reviewBadge").innerHTML = ""; // change badge value (in this case, to 0 which causes the badge to disappear)
      // } else {
      //    $("#reviewButton").removeClass("btn-default");
      //    $("#reviewButton").addClass("btn-primary");
      //    $("#reviewButton").prop("disabled", false);
      // }
      window.location = "review.html";
      return false;
   });
});

$(function() { // quiz button click
   $("#quizButton").click(function() {
      window.location = "quiz.html";
      return false;
   });
});

$(function() {
   $("#logOutBtn").click(function() {
      window.location = "front.html";
      return false;
   });
});

$(function() {
   $("#resetBtn").click(function() {
      $("#practiceTime").val("5");
      $("#successRate").val("90");
      $("#emailReminder").val("10:00");
      $("select[name=amPm]").val(2);
   });
});

$(function() {
   $("#submitBtn").click(function() {
      // do stuff
   });
});

//practiceTime
//successRate
//emailReminder

// 5
// 90
// 10:00PM


// resetBtn
// submitBtn