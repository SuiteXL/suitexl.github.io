let counter = 1.0;
let counterInterval;

function startCounter() {
    counter = 1.0;
    clearInterval(counterInterval);

    const stopValue = Math.random() * (3 - 1) + 1;
    // console.log('Counter will stop at:', stopValue.toFixed(2)); // USED FOR DEBUGGING AND TESTING

    const counterElement = document.getElementById('counter');
    counterElement.style.color = 'green';
    counterElement.textContent = counter.toFixed(2);
    counterElement.classList.remove('hidden');

    counterInterval = setInterval(() => updateCounter(stopValue), 100);
}

function updateCounter(stopValue) {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counter.toFixed(2); // Adjust toFixed() as needed

    counter += 0.01;

    if (counter >= stopValue) {
        clearInterval(counterInterval);
        counter = stopValue;
        counterElement.style.color = 'red';
        console.log('Stopped at:', counter.toFixed(2));
    }
}
