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
    setTimeout(() => {
        btn.classList.remove('pressed');
    }, 100);
    playSound(randomChosenColor);
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);

        animatePress(userChosenColor);
        playSound(userChosenColor);

        checkAnswer(userClickedPattern.length - 1);

    });

});


function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play().catch(error=>{
        console.error("sound error",error)
        })
}
function animatePress(currentColor) {
    const btn = document.querySelector(`#${currentColor}`);
    btn.classList.add('pressed');
    setTimeout(() => {
        btn.classList.remove('pressed');
    }, 100);
}
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong")
        gameOver();
    }
}
function gameOver() {
    
    started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    document.querySelector("#level-title").textContent = "Game Over, Press Any Key to Restart";
    document.body.classList.add('game-over');

    setTimeout(() => {
        document.body.classList.remove('game-over');
    }, 100);
////
// testing due to conflict
////
}

