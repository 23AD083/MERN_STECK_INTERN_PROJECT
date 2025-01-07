let count = 0; // Initialize the variable

const button = document.getElementById('incrementButton');
const display = document.getElementById('counterDisplay');

button.addEventListener('click', () {
    count++; // Increment the variable
    display.textContent = count; // Update the display
});
