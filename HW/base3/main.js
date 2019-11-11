/// <reference path="jquery-3.4.1.js" />

$(() => {
  $("#bSync").click(() => {
    var firstNum = parseInt(prompt("enter a number"));
    var secondNum = parseInt(prompt("enter a number"));

    // var randomstring = Math.floor(Math.random() * firstNum) + secondNum

    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (firstNum - secondNum + 1) + secondNum);
    }

    $("#passMe").html(randomIntFromInterval);
    // console.log(randomstring)
  });

  $("#bAsync").click(() => {
    makePassword(result => {
      $("#passMe").html(result);
    });
  });

  function makePassword(callback1, callback2) {
    var firstNum = parseInt(prompt("enter a number"));
    var secondNum = parseInt(prompt("enter a number"));
    setTimeout(() => {
      let randomstring = Math.floor(
        Math.random() * (firstNum - secondNum + 1) + secondNum
      );
      callback1(randomstring);
    }, 2000);
  }
});
