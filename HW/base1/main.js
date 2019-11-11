/// <reference path="jquery-3.4.1.js" />

$(() => {
    $("button").click(() => {
        var randomstring = Math.random().toString(36).slice(-6);
        console.log(randomstring)
    });
});