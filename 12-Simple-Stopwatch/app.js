let stopwatchSeconds = 0;
let stopwatchInterval;
let savedTimeInterval;

function startStopWatch() 
{
    stopwatchInterval = setInterval(function() {
        stopwatchSeconds++;
        console.log("Elapsed time: " + stopwatchSeconds + " s");
    }, 1000);

    savedTimeInterval = setInterval(async function() {
        await saveTime(stopwatchSeconds);
    }, 5000);
}

function stopStopWatch() {
    clearInterval(stopwatchInterval);
    clearInterval(savedTimeInterval);
    stopwatchSeconds = 0;
}

function saveTime(saveTime) 
{
    return new Promise(function(resolve, reject) {
        console.log("Saved time: " + saveTime + " s");
        resolve();
    });
}

