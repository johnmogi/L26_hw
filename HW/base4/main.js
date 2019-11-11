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

    for (const i of obj) {
      $("#passMe").html(i, i[i]);
    }
  });

  $("#bAsync").click(() => {});
});
