var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
 
    $(".saveBtn").on("click", function () {
     
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
   
    function timeBlockTracker() {
    
        var currentHour = moment().hour();

            $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

                if (blockHour < currentHour) {
                $(this).addClass("past");
                }
                else if (blockHour === currentHour) {
                $(this).addClass("present");
                }
                else {
                $(this).addClass("future");

            }
        })
    }
    
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    timeBlockTracker();
})

