document.querySelectorAll('.status.completed').forEach(function (button) {
    button.addEventListener('click', function () {
        const idTaskElement = document.querySelector('.id-task');
        let idTaskValue = parseInt(idTaskElement.textContent);
        idTaskElement.textContent = idTaskValue > 0 ? idTaskValue - 1 : 0;

        const countElement = document.querySelector('.count');
        let countValue = parseInt(countElement.textContent);
        countElement.textContent = countValue + 1;

        button.disabled = true;
        button.style.backgroundColor = '#4a90e2';

        if (parseInt(idTaskElement.textContent) === 0) {
            alert('Congratulations! You have completed all tasks!');
            alert('Board updated successfully!');
        } else {
            alert('Board updated successfully!');
        }
    });
});