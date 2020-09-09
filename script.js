$(function () {
  alert("Good day!");
  
  $("#currentDay").text(moment().format('MMMM Do, YYYY'));


  saveButton.on("click", function () {
    var rowHourLS = $(this).attr("data-hour");
    var input = $("#" + rowHourLS + "Row").val();
    localStorage.setItem(rowHourLS, input);

    $(".container").append(newTimeBlock);
  });
});