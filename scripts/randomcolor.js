document.querySelectorAll('.theme-logo').forEach(function (button) {
    button.addEventListener('click', function () {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
});