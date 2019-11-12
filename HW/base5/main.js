/// <reference path="jquery-3.4.1.js" />
$(() => {

  function getAjaxData() {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1", 
        error: err => alert(err.message),
        success: myObj => displayDiv(myObj)
    });
}

function displayDiv(myObj){
        const div = `
        <p>userId : ${myObj.userId}</p>
        <p>id : ${myObj.id}</p>
        <p>title : ${myObj.title}</p>
        <p>completed : ${myObj.completed}</p>
        ` ;
        $("#passMe").append(div);
}
$("#bAsync").click(() => {
getAjaxData();

}); 
}); 