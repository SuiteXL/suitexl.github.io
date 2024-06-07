let counter = 1.0;
let counterInterval;

function startCounter() {
    counter = 1.0; // Reset counter
    clearInterval(counterInterval); // Clear any existing interval

    // Generate a random stop value between 1.0 and 3.0 each time the counter starts
    const stopValue = Math.random() * (3 - 1) + 1;
    // console.log('Counter will stop at:', stopValue.toFixed(2));

    const counterElement = document.getElementById('counter');
    counterElement.style.color = 'green'; // Reset color to green
    counterElement.textContent = counter.toFixed(2); // Reset counter text
    counterElement.classList.remove('hidden'); // Make the counter visible

    counterInterval = setInterval(() => updateCounter(stopValue), 100); // Update every 50 milliseconds
}

function updateCounter(stopValue) {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counter.toFixed(2); // Adjust toFixed() as needed

    counter += 0.01; // Adjust increment to be smaller for more accuracy

    if (counter >= stopValue) {
        clearInterval(counterInterval);
        counter = stopValue; // Set counter to stopValue exactly
        counterElement.style.color = 'red';
        console.log('Stopped at:', counter.toFixed(2));
    }
}
