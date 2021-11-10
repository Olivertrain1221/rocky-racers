/* jshint esversion: 8 */
let roundsWanted = 3;

// Night mode toggle.
function nightMode() {
    bodyTag.classList.toggle("night-background");
    trafficLight.classList.add("traffic-light-at-night");
    titleColorChange();
}

function titleColorChange() {
    let title = document.getElementById("main-heading");
    title.classList.toggle("title-change");
}

// Opens the instruction modal.
function openModal() {
    modalContainer.style.display = "block";
}

let userName = "";
let settingsCloseButton = document.getElementById("settings-close-button");
settingsCloseButton.addEventListener("click", closeSettingsModal);

// closesModal.
function closeModal() {
    modalContainer.style.display = "none";
}

// Modal container element assignement.
let buttonSettings = document.getElementById("button-settings");
buttonSettings.addEventListener("click", openSettingsModal);

function openSettingsModal() {
    let settingsModal = document.getElementById("settings-modal");
    settingsModal.style.display = "block";
}

function closeSettingsModal() {
    let settingsModal = document.getElementById("settings-modal");
    settingsModal.style.display = "none";
}

let nightDayToggle = document.getElementById("night-day-checkbox");
nightDayToggle.addEventListener("change", nightMode);

let roundsToggle = document.getElementById("rounds-checkbox");

roundsToggle.addEventListener("change", function (e) {
    if (roundsToggle.checked) {
        roundsWanted = 5;
    } else {
        roundsWanted = 3;
    }
});

// Checking the winner result via the ai.
function checkWinner() {
    if (userScoreBoard.innerHTML == roundsWanted) {
        // what to do if the user wins.
        location.reload();
    } else if (aiScoreBoard.innerHTML == roundsWanted) {
        // what to do if the AI wins.
        location.reload();
    }
}

let bodyTag = document.getElementsByTagName("body")[0];
let modalContainer = document.getElementById("modal-container");
let buttonInstruction = document.getElementById("button-instruction");
let closeInstructionButton = document.getElementById("close-button");
let nightButton = document.getElementById("night-button");
let mainMenuButton = document.getElementById("menu-button");

// modalContainers event listeners to open/close.
closeInstructionButton.addEventListener("click", closeModal);
buttonInstruction.addEventListener("click", openModal);
nightButton.addEventListener("click", nightMode);
mainMenuButton.addEventListener("click", mainMenuReset);

// Called when the menu is selected.
function mainMenuReset() {
    location.reload();
}

// Event listener for whole window to run the modalContainerClick function.
window.addEventListener("click", modalContainerClick);

// Getting main container and button elements to link with traffic lights.
let mainContainer = document.getElementById("main-container");
let playButton = document.getElementById("button-play");
let trafficLight = document.getElementById("traffic-light");

// Turns the color of the game tiles depending on ai selection.
function turnOffAiSelectionEffect() {
    let rockOuterCircle = document.getElementById("rock-circle");
    let paperOuterCircle = document.getElementById("paper-circle");
    let scissorOuterCircle = document.getElementById("scissor-circle");

    rockOuterCircle.classList.remove("outer-circle-fill");
    paperOuterCircle.classList.remove("outer-circle-fill");
    scissorOuterCircle.classList.remove("outer-circle-fill");
}

// PlayButton event listener to run the username function.
playButton.addEventListener("click", getUserName);

// Gets the Users name input.
function getUserName() {
    let nameModal = document.getElementById("name-modal");
    nameModal.style.display = "block";
    let nameSubmitButton = document.getElementById("name-submit");
    nameSubmitButton.addEventListener("click", function (e) {
        e.preventDefault();
        let name = document.getElementById("name");
        if (name.value) {
            userName = name.value;
            nameModal.style.display = "none";
            mainContainer.style.display = "none";
            gameStartup();
        }
    });
}

// Closes the instructions modal.
function modalContainerClick(e) {
    if (e.target == modalContainer) {
        modalContainer.style.display = "none";
    }
}

// Adds the class and calculates wether winner or loser or draw.
function winner(result) {
    let winnerMessage = document.getElementById("winner-message");
    if (result == "win") {
        winnerMessage.classList.add("win-message");
        winnerMessage.classList.remove("lose-message", "draw-message");
        winnerMessage.innerText = "Wahooo Winner";
    } else if (result == "draw") {
        winnerMessage.classList.add("draw-message");
        winnerMessage.classList.remove("win-message", "lost-message");
        winnerMessage.innerText = "Draww!!!";
    } else if (result == "lose") {
        winnerMessage.classList.add("lose-message");
        winnerMessage.classList.remove("draw-message", "win-message");
        winnerMessage.innerText = "Loserrrr unlucky!";
    }
}

// The traffic lights coming on.
function redLightOn() {
    let redLight = document.getElementById("red");
    redLight.classList.add("red-light-on");
}

function yellowLightOn() {
    let yellowLight = document.getElementById("yellow");
    yellowLight.classList.add("yellow-light-on");
}

function greenLightOn() {
    let greenLight = document.getElementById("green");
    greenLight.classList.add("green-light-on");
}

function LightOff() {
    document.getElementById("yellow").classList.remove("yellow-light-on");
    document.getElementById("green").classList.remove("green-light-on");
}

// Determines what game tile to put the effect onto.
function turnOnAiSelectionEffect(ai) {
    let rockOuterCircle = document.getElementById("rock-circle");
    let paperOuterCircle = document.getElementById("paper-circle");
    let scissorOuterCircle = document.getElementById("scissor-circle");

    switch (ai) {
        case "rock":
            rockOuterCircle.classList.add("outer-circle-fill");
            break;
        case "paper":
            paperOuterCircle.classList.add("outer-circle-fill");
            break;
        case "scissor":
            scissorOuterCircle.classList.add("outer-circle-fill");
            break;
    }

    setTimeout(function () {
        turnOffAiSelectionEffect();
    }, 3000);
}

let svgs = document.querySelectorAll("svg");

// Enables the games svgs.
function enableGameSvgs() {
    svgs.forEach(svg => {
        svg.classList.remove("disable-svg-effects");
    });
}

// Disables the games svgs.
function disableGameSvgs() {
    svgs.forEach(svg => {
        svg.classList.add("disable-svg-effects");
    });
}

let scoreBoard = document.getElementById("score-board");

function gameStartup() {
    let userNameSpan = document.getElementById("users-name");
    userNameSpan.innerHTML = userName;
    let gameTiles = document.getElementsByClassName("rock-paper-scissor-logo")[0];
    gameTiles.classList.add("flex");
    scoreBoard.classList.add("flex");
    trafficLightAnimation();
}

// Adds the time sequence.
function trafficLightAnimation() {
    let trafficLight = document.getElementById("traffic-light");
    trafficLight.classList.add("inline-block");

    // Time section for traffic light.
    setTimeout(function () {
        redLightOn();
    }, 2000);

    setTimeout(function () {
        yellowLightOn();
    }, 2500);

    setTimeout(function () {
        greenLightOn();
        enableGameSvgs();
    }, 3000);
}

let rock = document.getElementById("rock-image");
let paper = document.getElementById("paper-image");
let scissor = document.getElementById("scissor-image");

// Game tile event listeners.
rock.addEventListener("click", function () {
    userSelection("r");
    LightOff();

});
paper.addEventListener("click", function () {
    userSelection("p");
    LightOff();
});
scissor.addEventListener("click", function () {
    userSelection("s");
    LightOff();
});

let rockInnerCircle = document.getElementById("inner-rock-image");
let paperInnerCircle = document.getElementById("inner-paper-image");
let scissorInnerCircle = document.getElementById("inner-scissor-image");

// What the user selects adds appropriate class.
function userSelection(tile) {
    let user = "";
    if (tile == "r") {
        user = "rock";
        rockInnerCircle.classList.add("inner-image-fill");
    } else if (tile == "p") {
        user = "paper";
        paperInnerCircle.classList.add("inner-image-fill");
    } else if (tile == "s") {
        user = "scissor";
        scissorInnerCircle.classList.add("inner-image-fill");
    }
    aiSelection(user);
}

// Calculates the actual ai selection.
function aiSelection(user) {
    let aiOptions = ["rock", "paper", "scissor"];
    let ai = aiOptions[Math.floor(Math.random() * 3)];
    disableGameSvgs();
    turnOnAiSelectionEffect(ai);

    setTimeout(function () {
        gameLogic(user, ai);
    }, 3000);
}

let aiScoreBoard = document.getElementById("ai-score");
let userScoreBoard = document.getElementById("user-score");
let aiScore = 0;
let userScore = 0;

// Removes the user selections.
function removeUserSelectionColor() {
    paperInnerCircle.classList.remove("inner-image-fill");
    rockInnerCircle.classList.remove("inner-image-fill");
    scissorInnerCircle.classList.remove("inner-image-fill");
}

//Turns off effects and restarts game startup if a Draw.
function win() {
    userScore++;
    userScoreBoard.innerHTML = userScore;
    removeUserSelectionColor();
    winner("win");
    checkWinner();
    gameStartup();
}

//Turns off effects and restarts game startup if a Draw.
function lose() {
    aiScore++;
    aiScoreBoard.innerHTML = aiScore;
    removeUserSelectionColor();
    winner("lose");
    checkWinner();
    gameStartup();
}

//Turns off effects and restarts game startup if a Draw.
function draw() {
    removeUserSelectionColor();
    winner("draw");
    gameStartup();
}

// Game logic comparing user and ai.
function gameLogic(user, ai) {
    switch (user) {
        case ai:
            draw();
            break;
        case "rock":
            if (ai === 'paper') {
                lose();
            } else {
                win(); // rock beats scissors.
            }
            break;
        case "paper":
            if (ai === 'scissor') {
                lose();
            } else {
                win(); // paper beats rock.
            }
            break;
        case "scissor":
            if (ai === 'rock') {
                lose();
            } else {
                win(); // scissors beats paper.
            }
            break;
        default:
            break;
    }
}