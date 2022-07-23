let equal = document.getElementById("equal");
let text = document.querySelector(".text");
let btns = document.querySelectorAll(".btn");
let clear = document.querySelector("#clear");
let clearAll = document.querySelector("#clear-all");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    text.innerText += btn.innerText;
  });
});

clear.addEventListener("click", function () {
  // removes the last char from equation
  text.innerText = text.innerText.slice(0, -1);
});

clearAll.addEventListener("click", function () {
  text.innerText = "";
});

equal.addEventListener("click", function () {
  try {
    text.innerText = eval(text.innerText);
  } catch (error) {
    text.innerText = "Syntax Error";
  }
});
