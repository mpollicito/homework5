$(function () {
  alert("Good day!");
  
  $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    
  for (i = 9; i < 17; i++) {
    // if i is less than current hour, provide a class to indicate a current, present or past event
    // $(".container").append("");
    var newTimeBlock = $("<div id='"+ i +"' data-hour='" + i + "'>" + i + "</div>");

    newTimeBlock.append("<button type='button' class='btn btn-secondary'>"+ i +"</button>");
    // look up providing default value for inputs
    newTimeBlock.append("<input/>");
    newTimeBlock.append("<button class='submitText'>Save<button/>");
    //  add localStorage(); functionality

    $(".container").append(newTimeBlock);

  }
  
  //  find how to select different elements of the same class jQuery
  // week 5 activity 11 line#97
});