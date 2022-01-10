
    
   
    function updateOutput8() {
      localStorage.setItem("4-PM", input_textarea8.value);
    }
  
    var input_textarea9 = document.querySelector("#toDo9");
    var save_button9 = document.querySelector("#saveThis9");
    input_textarea9.value = localStorage.getItem("5-PM");
    save_button9.addEventListener("click", updateOutput9);
  
    function updateOutput9() {
      localStorage.setItem("5-PM", input_textarea9.value);
    }
    var current = new Date().getHours();
    function displayColor() {
        if (current > 12) {
            $("#toDo5").addClass("past");
          } else if (current >= 13 && current < 14) {
            $("#toDo5").addClass("present");
          } else if (current < 12) {
            $("#toDo5").addClass("future");
          }
      if (current > 13) {
        $("#toDo5").addClass("past");
      } else if (current >= 13 && current < 14) {
        $("#toDo5").addClass("present");
      } else if (current < 13) {
        $("#toDo5").addClass("future");
      }
      if (current > 14) {
        $("#toDo6").addClass("past");
      } else if (current >= 14 && current < 15) {
        $("#toDo6").addClass("present");
      } else if (current < 14) {
        $("#toDo6").addClass("future");
      }
      if (current > 15) {
        $("#toDo7").addClass("past");
      } else if (current >= 15 && current < 16) {
        $("#toDo7").addClass("present");
      } else if (current < 15) {
        $("#toDo7").addClass("future");
      }
      if (current > 16) {
        $("#toDo8").addClass("past");
      } else if (current >= 16 && current < 17) {
        $("#toDo8").addClass("present");
      } else if (current < 16) {
        $("#toDo8").addClass("future");
      }
     
      }
    }
    displayColor();
  });