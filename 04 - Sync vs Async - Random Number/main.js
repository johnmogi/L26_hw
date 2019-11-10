function testSync() {
    // alert קיראו לפונקציה שבניתם, קבלו ממנה את המספר והציגו אותו ע"י
    const num = getRandomNumber(); // אין בעיה להמתין לפונקציה סינכרונית שלא לוקחת זמן
    alert(num);
}

// צרו פונקציה סינכרונית המייצרת מספר רנדומלי בין 1 ל-100 ומחזירה אותו
function getRandomNumber() {
    const num = Math.floor(Math.random() * 100) + 1;
    return num; // return אין בעיה להחזיר את התוצאה הסופית מפונקציה סינכרונית ע"י
}

function testAsync() {
    // alert קיראו לפונקציה האסינכרונית, קבלו ממנה את המספר והציגו אותו ע"י
    getRandomNumberAsync(num => {
        alert(num);
    });
}

// callback-צרו פונקציה אסינכרונית המייצרת מספר רנדומלי בין 1 ל-100 לאחר 3 שניות ומדווחת לנו אותו ע"י שליחה ל
function getRandomNumberAsync(callback) {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 100) + 1;
        callback(num);
    }, 3000);
}
