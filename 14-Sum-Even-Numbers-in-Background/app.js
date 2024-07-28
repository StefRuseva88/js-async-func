let sum = 0;
let calculating = false;
let currentNumber = 1;
let intervalHandle = null;

function startCalculation() {
    if (calculating) return;

    calculating = true;
    sum = 0;
    currentNumber = 1;

    function calculateChunk() {
        if (!calculating) return;

        const chunkSize = 1000000; // Calculate in chunks of 1 million numbers at a time
        const endNumber = currentNumber + chunkSize;

        for (let i = currentNumber; i < endNumber; i++) {
            if (i % 2 === 0) {
                sum += i;
            }
        }

        currentNumber = endNumber;

        if (currentNumber < 1000000000) {
            setTimeout(calculateChunk, 0); // Schedule the next chunk calculation
        } else {
            calculating = false;
            console.log("Calculation complete!");
        }
    }

    calculateChunk();
}

function handleCommand(command) {
    if (command.toLowerCase() === 'show') {
        console.log("Current sum of even numbers:", sum);
    } else if (command.toLowerCase() === 'exit') {
        calculating = false;
        if (intervalHandle) {
            clearInterval(intervalHandle);
        }
        console.log("Calculation stopped.");
    } else {
        console.log("Unknown command. Available commands: show, exit.");
    }
}

document.querySelector('button').addEventListener('click', startCalculation);

document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const command = prompt("Enter command (show/exit):");
        handleCommand(command);
    }
});
