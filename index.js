var a = Math.floor(Math.random() * 6) + 1;
var aimg = "images/dice" + a + ".png";
var target = document.querySelectorAll("img")[0];
target.setAttribute("src", aimg);

var b = Math.floor(Math.random() * 6) + 1;
var bimg = "images/dice" + b + ".png";
var target1 = document.querySelectorAll("img")[1];
target1.setAttribute("src", bimg);

if (a > b) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
} else if (a < b) {
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}