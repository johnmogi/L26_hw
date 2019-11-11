/// <reference path="jquery-3.4.1.js" />

$(() => {


    $("#bSync").click(() => {

        var min = parseInt(prompt("enter a number"));
        var max = parseInt(prompt("enter a number"));

        // var randomstring = Math.floor(Math.random() * firstNum) + secondNum

        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        $("#passMe").html(randomIntFromInterval)
        // console.log(randomstring)
    });

    //     $("#bAsync").click(() => {
    //         makePassword(result => {
    //             $("#passMe").html(result)
    //         });

    //     });

    //     function makePassword(callback) {
    //         setTimeout(() => {
    //             var randomstring = Math.floor(Math.random() * 200)
    //             callback(randomstring);
    //         }, 2000);
    //     }

});