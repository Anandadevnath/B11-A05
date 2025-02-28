document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    dateElement.textContent = formattedDate;
});