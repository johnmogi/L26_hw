/// <reference path="jquery-3.4.1.js" />

$(() => {
  const obj = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  };

  $("#bSync").click(() => {
    // alert(JSON.stringify(obj));
    $("#passMe").html(JSON.stringify(obj));
  });


  function showPhotos1(callback) {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                let obj2 = JSON.parse(ajax.responseText);
          $("#passMe").html(JSON.stringify(obj2))
                // console.log(obj2)
                // displayPhotos1(obj2);
            }
            else {
                alert("Error: " + ajax.status);
            }
        }
    };
    ajax.send();
}


  $("#bAsync").click(() => {

    $("#passMe").html(showPhotos1());
  });
});
