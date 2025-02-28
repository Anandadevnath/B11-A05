document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.querySelector(".clear-btn");
    const logEntry = document.querySelector(".log-entry");

    clearButton.addEventListener("click", function () {
        logEntry.innerHTML = '';
    });
});