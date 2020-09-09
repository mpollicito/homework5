$(document).ready(function () {
  var saveButton = $(".savebtn");

  var currHour = moment().format("HH");
  
  var currHourParInt = parseInt(currHour);

  $("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
  $("#10Row").attr("data-time", moment("10:00 am", "hh:mm a").format("HH"));
  $("#11Row").attr("data-time", moment("11:00 am", "hh:mm a").format("HH"));
  $("#12Row").attr("data-time", moment("12:00 pm", "hh:mm a").format("HH"));
  $("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
  $("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
  $("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
  $("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));

  getStoredTask();

  alert("Good day!");

  $("#currentDay").text(moment().format('MMMM Do, YYYY'));

  for (var i = 0; i <= 12; i++) {
    var rowHour = $("#" + i + "Row").attr("data-time");
    var rowHourInt = parseInt(rowHour);

    if (currHourParInt === rowHourInt) {
      $("#" + i + "Row").addClass("present");
    }

    if (currHourParInt > rowHourInt) {
      $("#" + i + "Row").addClass("past");
    }

    if (currHourParInt < rowHourInt) {
      $("#" + i + "Row").addClass("future");
    }
  }

  saveButton.on("click", function () {
    var rowHourLS = $(this).attr("data-hour");
    var input = $("#" + rowHourLS + "Row").val();
    localStorage.setItem(rowHourLS, input);
  });

  function getStoredTask() {
    for (var i = 0; i <= 12; i++) {
      $("#" + i + "Row").val(localStorage.getItem(i));
    }
  }

});