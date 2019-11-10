/// <reference path="jquery-3.4.1.js" />

"use strict";

$(function () {

    $("#buttonUsers").click(() => {
        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users",
            error: err => alert(err.message),
            success: users => displayUsers(users)
        });
    });

    function displayUsers(users) {
        let content = "";
        for (const item of users) {
            const tr = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.username}</td>
                    <td>${item.email}</td>
                    <td>${item.phone}</td>
                    <td>${item.address.city}</td>
                    <td>${item.address.street}</td>
                </tr>
            `;
            content += tr;
        }
        $("tbody").html(content);
    }

});
