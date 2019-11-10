/// <reference path="jquery-3.4.1.js" />

function showPhotos1() {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://jsonplaceholder.typicode.com/photos");
    ajax.onreadystatechange = () => {
        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                const photos = JSON.parse(ajax.responseText);
                displayPhotos1(photos);
            }
            else {
                alert("Error: " + ajax.status);
            }
        }
    };
    ajax.send();
}

function displayPhotos1(photos) {
    const myTBody = document.getElementById("myTBody");
    let content = "";
    for (const item of photos) {
        const tr = `
            <tr>
                <td>
                    ${item.albumId}
                </td>
                <td>
                    ${item.title}
                </td>
                <td>
                    <img src="${item.thumbnailUrl}"
                </td>
            </tr>
        `;
        content += tr;
    }
    myTBody.innerHTML = content;
}

function showPhotos2() {
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/photos", 
        error: err => alert(err.message),
        success: photos => displayPhotos2(photos)
    });
}

function displayPhotos2(photos) {
    let content = "";
    for (const item of photos) {
        const tr = `
            <tr>
                <td>
                    ${item.albumId}
                </td>
                <td>
                    ${item.title}
                </td>
                <td>
                    <img src="${item.thumbnailUrl}"
                </td>
            </tr>
        `;
        content += tr;
    }
    $("tbody").html(content);
}