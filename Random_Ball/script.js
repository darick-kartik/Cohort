const box = document.querySelector(".box");
const ball = document.querySelector(".ball");
const timer = document.querySelector("#timer");
const startBtn = document.querySelector(".startbtn");

let count = 0;

startBtn.addEventListener("click", function () {

    // Prevent multiple clicks
    startBtn.disabled = true;

    // Reset timer
    count = 0;
    timer.innerText = count;

    // Place ball at starting position
    ball.style.left = "0px";
    ball.style.top = "0px";

    const interval = setInterval(function () {

        // Increase timer
        count++;
        timer.innerText = count;

        // Maximum possible positions
        const maxX = box.clientWidth - ball.clientWidth;
        const maxY = box.clientHeight - ball.clientHeight;

        // Generate random positions
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Move the ball
        ball.style.left = randomX + "px";
        ball.style.top = randomY + "px";

        // Generate random RGB color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        ball.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        // Stop after 10 seconds
        if (count === 10) {
            clearInterval(interval);
            startBtn.disabled = false;
        }

    }, 1000);

});