/// <reference path="jquery-3.4.1.js" />

$(() => {


    $("#bSync").click(() => {
        var randomstring = Math.random().toString(36).slice(-6);

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
            var randomstring = Math.random().toString(36).slice(-6);
            callback(randomstring);
        }, 2000);
    }

});