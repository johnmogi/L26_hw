function paintSync() {
    // קיראו לפונקציה הסינכרונית שמייצרת צבע רנדומלי, קבלו את הצבע וציבעו את הדף בצבע הזה
    const pageBody = document.getElementById("pageBody");
    pageBody.style.backgroundColor = randColor();
}

function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r},${g},${b})`;
    return color;
}

function paintAsync() {
    // השתמשו בפונקציה האסינכרונית בכדי לצבוע את הדף
    randColorAsync(color => {
        const pageBody = document.getElementById("pageBody");
        pageBody.style.backgroundColor = color;
    });
}

// ושולחת לה צבע רנדומלי כעבור שנייה אחת callback צרו פונקציה אסינכרונית המקבלת כארגומנט פונקציית
function randColorAsync(callback) {
    setTimeout(() => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r},${g},${b})`;
        callback(color);
    }, 1000);
}