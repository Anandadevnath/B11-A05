document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".status.completed");
    const logEntry = document.querySelector(".log-entry");

    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskName = this.closest(".task-card").querySelector("h3").innerText;

            const now = new Date();
            let hours = now.getHours();
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            const time = `${String(hours).padStart(2)}:${minutes}:${seconds} ${ampm}`;
            const message = `You have completed the task "${taskName}" at ${time}`;

            const logItem = document.createElement("p");
            logItem.textContent = message;
            logItem.classList.add("log-message");
            logEntry.appendChild(logItem);
        });
    });
});