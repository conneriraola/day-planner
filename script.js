var saveButton = document.querySelectorAll(".saveBtn");
var hourBlockEl = document.querySelectorAll(".hour-content");
var hourEl = document.querySelectorAll(".hour");
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY")); 

function renderEntries() {
  for ( var i = 0; i < hourEl.length; i++) { 
    var time = hourEl[i].textContent;
    var text = localStorage.getItem(time);
    hourEl[i].nextElementSibling.value = text;
  }
}
renderEntries();

var hourArray = [];
for ( var i = 0; i < hourEl.length; i++) {
  console.log(hourEl[i]);
  var hourVal = parseInt(hourEl[i].getAttribute("id"));
  hourArray.push(hourVal);
}
console.log(hourArray);

var hourNow = moment();
hourNow = parseInt(hourNow.format("H"));
console.log(hourNow);


for ( var i = 0; i < hourArray.length; i++) {
  console.log(hourArray[i]);
  if (hourNow == hourArray[i]) {
    hourBlockEl[i].classList.add("present");
  } else if (hourNow < hourArray[i]) {
    hourBlockEl[i].classList.add("future");
  } else {
    hourBlockEl[i].classList.add("past");
  }
}

for ( var i = 0; i < saveButton.length; i++) { 
  saveButton[i].addEventListener("click", function (event) {
    var entry = event.target.previousElementSibling.value;
    console.log(entry);
    if(entry == null) {
      return;
    }
    var timeName = event.target.previousElementSibling.previousElementSibling.textContent;
    localStorage.setItem(timeName, entry);
  })
};