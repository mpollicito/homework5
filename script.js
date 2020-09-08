$(function () {
  alert("Good day!");
  
  $("#currentDay").text(moment().format('MMMM Do, YYYY'));
    
  for (i = 9; i < 17; i++) {
    // if i is less than current hour, provide a class to indicate a current, present or past event
    // $(".container").append("");
    var newTimeBlock = $("<div id='"+ i +"' data-hour='" + i + "'>" + i + "</div>");

    // newTimeBlock.append("<button type='button' class='btn btn-secondary'>" + i + "</button>");
    // look up providing default value for inputs
    newTimeBlock.append("<input/>");
    newTimeBlock.append("<button class='saveBtn'>Save<button/>");
    //  add localStorage(); functionality

    $(".container").append(newTimeBlock);

    if (newTimeBlock = true ) {
      $(".saveBtn").on("click", function() {

        var submitText = $();
        
        submitText.addClass();
        
        });
    } else {
      console.log(submitText);
    }

  }
  //  find how to select different elements of the same class jQuery


  // week 5 activity 11 line#97
  // $(".submit-text").on("click", function() {

  //   var fridgeMagnet = $("<div>");

  //   fridgeMagnet.addClass("letter fridge-color");

  //   fridgeMagnet.text($(this).attr("data-letter"));

  // });


  // $("#clear").on("click", function() {
  //   $("#display").empty();

  // });



});