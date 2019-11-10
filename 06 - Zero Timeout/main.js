function paintPage() {
    const pageBody = document.getElementById("pageBody");
    const color = randColor();
    pageBody.style.backgroundColor = color;
    setTimeout(() => {
        alert(color);
    }, 0);
}

function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    return color;
}

