function doWorkSync() {
    console.log("Begin");
    const result = getSomeData();
    console.log("result: " + result);
    console.log("End");
}


// פונקציה סינכרונית
// פונקציה שהקוד שקורא לה ממתין לסיומה
function getSomeData() {
    console.log("Start Calc...");
    const value = 42;
    console.log("End Calc...");
    return value;
}

// ----------------------------------

function doWorkAsync() {
    console.log("Begin");
    getSomeAsyncData(result => {
        console.log("result: " + result); // קריאה אסינכרונית
    });
    console.log("End");
}

// פונקציה אסינכרונית
// פונקציה שהקוד שקורא לה לא ממתין לסיומה
function getSomeAsyncData(callback) {
    setTimeout(() => { // אסינכרונית
        console.log("Start Calc...");
        const value = 42;
        console.log("End Calc...");
        callback(value);
    }, 3000);
}

