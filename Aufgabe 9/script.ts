// Create a "close" button and append it to each list item
var myToDolist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myToDolist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myToDolist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("TxtInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Oh, so you're gonna do nothing? Go on, waste your life! >:(");
  } else if (inputValue === "Nothing" ) {
    alert("Oh, so you're really gonna write 'Nothing'? Nuh-ah, not on my watch.");
    } else if (inputValue === "nothing" ) {
    alert("Oh, so you're really gonna write 'nothing'? Nuh-ah, not on my watch.");
    } else if (inputValue === "murder someone" ) {
    alert("Nice, I can be your alibi. ;)");
  } else {
    document.getElementById("List").appendChild(li);
  }
  document.getElementById("TxtInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}