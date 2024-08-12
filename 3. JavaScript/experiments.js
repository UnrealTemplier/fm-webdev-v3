const body = document.querySelector("body");
body.style.backgroundColor = "black";
body.style.color = "white";

const square = document.querySelector(".red-square");
square.style.backgroundColor = "blue";
square.style.width = "200px";
square.style.border = "1px solid white";
square.style.borderRadius = "5px";
square.innerHTML = "Changed by JS!";
square.style.color = "white";

const listItems = document.querySelectorAll(".js-target");
listItems.forEach(function(item) {
    item.innerHTML = "<em>Changed by JS!</em>";
});