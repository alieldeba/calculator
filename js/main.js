let equal = document.getElementById("equal");
let text = document.querySelector(".text");
let btns = document.querySelectorAll(".btn");
let clear = document.querySelector("#clear");
let clearAll = document.querySelector("#clear-all");

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // checking if Syntax Error or undefined or NaN or infinity
    if (text.innerText.match(/s|u|n|i/gi)) {
      text.innerText = "";
    }
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
