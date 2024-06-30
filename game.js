const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = [];
let userClickedPattern = []
let started = false
let level = 0

document.addEventListener('keypress', () => {

    if (!started) {
        document.querySelector("#level-title").textContent = `Level ${level}`
        nextSequence();
        started = true
    }
})

function nextSequence() {
    userClickedPattern = [];
    level++;
    document.querySelector("#level-title").textContent = `Level ${level}`;

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
    const btn = document.querySelector(`#${randomChosenColor}`);
    btn.classList.add('pressed');

}
function nextSequence() {
    userClickedPattern = [];
    level++;
    document.querySelector("#level-title").textContent = `Level ${level}`;

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    
    gamePattern.push(randomChosenColor);
    const btn = document.querySelector(`#${randomChosenColor}`);
    btn.classList.add('pressed');
}


