var body = document.querySelector("body");
var light = document.getElementById("light");
var dark = document.getElementById("dark");
var headingOne = document.querySelector("h2");
var headingTwo = document.querySelector("h3");

if (localStorage.getItem("dark")) {
  body.style.backgroundColor = localStorage.getItem("dark");
  headingOne.style.color = "white";
  headingTwo.style.color = "white";
} else {
  body.style.backgroundColor = localStorage.getItem("light");
  headingOne.style.color = "black";
  headingTwo.style.color = "black";
}

function darkTheme() {
  localStorage.setItem("dark", "black");
  localStorage.getItem("dark");
  body.style.backgroundColor = localStorage.getItem("dark");
  headingOne.style.color = "white";
  headingTwo.style.color = "white";
}
function lightTheme() {
  localStorage.setItem("light", "white");
  localStorage.getItem("light");
  body.style.backgroundColor = localStorage.getItem("light");
  headingOne.style.color = "black";
  headingTwo.style.color = "black";
  localStorage.removeItem("dark");
}

dark.addEventListener("click", darkTheme);
light.addEventListener("click", lightTheme);
