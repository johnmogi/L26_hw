/// <reference path="jquery-3.4.1.js" />
$(() => {
function getAjaxData(url, callback) {
  $.ajax({
      method: "GET",
      url: url, 
      error: err => alert(err.message),
      success: response => callback(response)
  });
}

// Display the users: 
function displayData() {
  console.log(callback)
}

function showData() {
  getAjaxData("https://jsonplaceholder.typicode.com/todos/", finalData => displayData(callback));

}




$("#bAsync").click(() => {

  // showData()

  $("#passMe").html(showData());

});

}); 