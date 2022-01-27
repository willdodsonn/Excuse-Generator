/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const excuseGenerator = () => {
  let who = ["I", "He", "They", "Sally"];
  let action = [
    "slept through",
    "sang karaoke",
    "went skydiving",
    "ate broccoli"
  ];
  let what = ["my alarm", "in the freezer", "on the dishwasher"];
  let result =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * action.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)];
  return result;
};
document.getElementById("excuse").innerHTML = excuseGenerator();
