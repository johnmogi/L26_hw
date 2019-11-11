/// <reference path="jquery-3.4.1.js" />

$(() => {


    $("#bSync").click(() => {
        var randomstring = Math.floor(Math.random() * 200)

        $("#passMe").html(randomstring)
        // console.log(randomstring)
    });

    $("#bAsync").click(() => {
        makePassword(result => {
            $("#passMe").html(result)
        });

    });

    function makePassword(callback) {
        setTimeout(() => {
            var randomstring = Math.floor(Math.random() * 200)
            callback(randomstring);
        }, 2000);
    }

});