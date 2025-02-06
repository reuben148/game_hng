const border = document.getElementById("border");
const buttons = document.querySelectorAll(".btn button");
const scoreDisplay = document.getElementById("score");
const resetButton = document.getElementById("reset");
const message = document.getElementById("message");

let colors = ["red", "blue", "green", "yellow", "purple", "gray"];
let targetColor = "";
let score = 0;


function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    border.style.backgroundColor = targetColor;
    scoreDisplay.textContent = `Score: ${score}`;
    message.textContent = ""; 
}


buttons.forEach(button => {
    button.style.backgroundColor = button.id;
    button.addEventListener("click", () => {
        if (button.id === targetColor) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            message.textContent = "🎉 Congratulations!";
            message.style.color = "green";

            
            setTimeout(() => {
                message.textContent = "";
                startGame();
            }, 1000);
        } else {
            score = 0;
            scoreDisplay.textContent = `Score: ${score}`;
            message.textContent = "😢 opps Try Again!";
            message.style.color = "red";

            
            setTimeout(() => {
                message.textContent = "";
            }, 1000);
        }
    });
});

// Restart the game
resetButton.addEventListener("click", () => {
    score = 0;
    startGame();
});


startGame();
