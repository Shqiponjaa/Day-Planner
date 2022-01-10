var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var time = moment();

function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

setPlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});


pastPresentFuture();
$(document).ready(function(){
    let time= moment().format("h:mm:ss");
    let timeSplit = time.split(":"); 
    let minutesToRefresh= 59 - parseInt(timeSplit[1]); 
    let secondsToRefresh= 60- parseInt(timeSplit[2]); 
    let timeToRefresh= minutesToRefresh*60 + secondsToRefresh; 
    let secondsElapsed=0; 
        secondsElapsed++
        if (secondsElapsed === timeToRefresh){
            console.log(moment()); 
            let isReloading= confirm("Would you like to reload the page?"); 
            if (isReloading) {
                window.location.reload(true);
            } else {
                alert("Automatic hourly reloading will no longer occur unless you reload the page."); 
            }
        }
    },1000);

