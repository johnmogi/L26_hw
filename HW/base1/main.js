/// <reference path="jquery-3.4.1.js" />

$(() => {
    $("#bSync").click(() => {
        var randomstring = Math.random().toString(36).slice(-6);
        $("#passMe").html(randomstring)
        // console.log(randomstring)
    });


    $("#bAsync").click(() => {

        getSomeAsyncData(result => {
            var randomstring = Math.random().toString(36).slice(-6);
            $("#passMe").html(randomstring)
            // console.log("result: " + result); // קריאה אסינכרונית
        });

    });

    // פונקציה אסינכרונית
    // פונקציה שהקוד שקורא לה לא ממתין לסיומה
    function getSomeAsyncData(callback) {
        setTimeout(() => { // אסינכרונית

        }, 3000);
    }



});