
    
    var input_textarea4 = document.querySelector("#toDo4");
    var save_button4 = document.querySelector("#saveThis4");
    input_textarea4.value = localStorage.getItem("12-PM");
    save_button4.addEventListener("click", updateOutput4);
  
    function updateOutput4() {
      localStorage.setItem("12-PM", input_textarea4.value);
    }
  
    var input_textarea5 = document.querySelector("#toDo5");
    var save_button5 = document.querySelector("#saveThis5");
    input_textarea5.value = localStorage.getItem("1-PM");
    save_button5.addEventListener("click", updateOutput5);
  
    function updateOutput5() {
      localStorage.setItem("1-PM", input_textarea5.value);
    }
  
    var input_textarea6 = document.querySelector("#toDo6");
    var save_button6 = document.querySelector("#saveThis6");
    input_textarea6.value = localStorage.getItem("2-PM");
    save_button6.addEventListener("click", updateOutput6);
  
    function updateOutput6() {
      localStorage.setItem("2-PM", input_textarea6.value);
    }
  
    var input_textarea7 = document.querySelector("#toDo7");
    var save_button7 = document.querySelector("#saveThis7");
    input_textarea7.value = localStorage.getItem("3-PM");
    save_button7.addEventListener("click", updateOutput7);
  
    function updateOutput7() {
      localStorage.setItem("3-PM", input_textarea7.value);
    }
  
    var input_textarea8 = document.querySelector("#toDo8");
    var save_button8 = document.querySelector("#saveThis8");
    input_textarea8.value = localStorage.getItem("4-PM");
    save_button8.addEventListener("click", updateOutput8);
  
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