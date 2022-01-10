var today = moment().format("dddd, MMMM Do");

var now = moment().format("H A");

/* planWorkday entries for each hour of the workday */
var scheduleDay = [
{ time: "12 PM", event: "" },
{ time: "1 PM", event: "" },
{ time: "2 PM", event: "" },
{ time: "3 PM", event: "" },
 { time: "4 PM", event: "" },
 { time: "6 PM", event: "" },
 { time: "7 PM", event: "" },
 { time: "8 PM", event: "" },
];


var workEvents = JSON.parse(localStorage.getItem("Day"));
if (workEvents) {
  scheduleDay = workEvents;
}






//save events

$(".saveBtn").on("click", function() {
	var  = parseInt(
		$(this)
			.closest(".time-block")
			.attr("id")
	);
	var userEntry = $.trim(
		$(this)
			.parent()
			.siblings("textarea")
			.val()
	);
	scheduleDay[blockID].event = userEntry;


	//Set local storage 
	localStorage.setItem("Day", JSON.stringify(scheduleDay));
});
    