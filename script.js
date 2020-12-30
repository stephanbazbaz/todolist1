
// ADDS INPUT FROM USER CREATE DIV SAVE TO LOCAL STORAGE 

var arr = []
function addtask() {
  var taskcontainer = document.getElementById("taskcontainer")
  var myTask = document.getElementById("myTask").value
  var myTime = document.getElementById("myTime").value
  var myDate = document.getElementById("myDate").value

  if (myTask == 0) {
    alert("Must Fill Task")
  }
  else if (myDate == 0) {
    alert("Must Fill Date")
  }
  else {
    let index = arr.length;
    var newTask = document.createElement("div")
    newTask.innerHTML = ` 
    <div class='newNote col' id='newnotetask-${index+1}'><span class='fas fa-times iconx' onclick='deLete(${index+1})'></span>
  <p class='text'>${myTask}</p><div>
  <p class='date'>${myTime}<br>${myDate}</p></div> 
</div> `
    taskcontainer.appendChild(newTask)
    var obj = {
      task: myTask,
      time: myTime,
      date: myDate
    }
    arr.push(obj)
    localStorage.setItem("arr", JSON.stringify(arr))
    removeinput ()

  }
}

// RETURN EMPTY INPUTS
function removeinput (){
 document.getElementById("myTask").value = ""
 document.getElementById("myTime").value = ""
 document.getElementById("myDate").value = ""
}

// CLEAR BUTTON  
function cl() {
  document.getElementById("myForm").reset();
}

// GET FROM LOCAL STORAGE 
function show() {
  var taskcontainer = document.getElementById("taskcontainer")
  if (JSON.parse(localStorage.getItem("arr")) != null) {
    arr = JSON.parse(localStorage.getItem("arr"))
    for (var i = 0; i < arr.length; i++) {
      var newTask = document.createElement("div")
      newTask.innerHTML = ` <div class='newNote col' id='newnotetask-${i+1}'><span class='fas fa-times iconx' onclick='deLete(${i+1})'></span>
  <p class='text'>${arr[i].task}</p><div>
  <p class='date'>${arr[i].time}<br>${arr[i].date}</p></div> 
  </div> `
      taskcontainer.appendChild(newTask)
    }
  }

}
show()

// DELETE NOTE + LOCAL STORAGE 
function deLete(i) {
  var myobj = document.getElementById(`newnotetask-${i}`);
  myobj.parentNode.remove();
  arr.splice(i-1 , 1)
  localStorage.setItem("arr", JSON.stringify(arr))
}

