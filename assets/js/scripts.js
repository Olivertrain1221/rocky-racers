let userName = "";

// modal container element assignement
let modalContainer = document.getElementById("modal-container");
let buttonInstruction = document.getElementById("button-instruction");
let closeInstructionButton = document.getElementById("close-button");


// modalContainers event listeners to open/close
buttonInstruction.addEventListener("click", openModal);
closeInstructionButton.addEventListener("click", closeModal);


// Event listener for whole window to run the modalContainerClick func.
window.addEventListener("click", modalContainerClick);

// Opens the instruction modal
function openModal() {
    modalContainer.style.display = "block";
}

// Getting main container and button elements to link with traffic lights.
let mainContainer = document.getElementById("main-container");
let playButton = document.getElementById("button-play");
let trafficLight = document.getElementById("traffic-light");

playButton.addEventListener("click", getUserName);


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
            console.log(userName);
            mainContainer.style.display = "none";
            gameStartup();
        }



    });
};


function closeModal() {
    modalContainer.style.display = "none";
    console.log("testing button")
}
// Closes the instructions modal
function modalContainerClick(e) {
    if (e.target == modalContainer) {
        modalContainer.style.display = "none";
        console.log("testing")
    }
}


function redLightOn() {
    let redLight = document.getElementById("red");
    redLight.style.backgroundColor = "red";
}

function yellowLightOn() {
    let yellowLight = document.getElementById("yellow");
    yellowLight.style.backgroundColor = "yellow";

}

function greenLightOn() {
    let greenLight = document.getElementById("green");
    greenLight.style.backgroundColor = "green";

}

function gameStartup() {
    let userNameSpan = document.getElementById("users-name");
    userNameSpan.innerHTML = userName;
    let scoreBoard = document.getElementById("score-board");
    scoreBoard.style.display = "flex";
    let gameTiles = document.getElementsByClassName("rock-paper-scissor-logo")[0];
    gameTiles.style.display = "flex";
    let trafficLight = document.getElementById("traffic-light");
    trafficLight.style.display = "inline-block";

    // time section for traffic light
    setTimeout(function () {
        redLightOn();
    }, 2000);

    setTimeout(function () {
        yellowLightOn();
    }, 2500);

    setTimeout(function () {
        greenLightOn();
        // gameTileEventListeners();
    }, 3000);

}


let rock = document.getElementById("rock-image");
let paper = document.getElementById("paper-image");
let scissor = document.getElementById("scissor-image");

//  Adds event listeners
// function gameTileEventListeners() {
rock.addEventListener("click", function () {
    userSelection("r");
});
paper.addEventListener("click", function () {
    userSelection("p");
});
scissor.addEventListener("click", function () {
    userSelection("s");
});



function userSelection(tile) {
    console.log(tile);
    let user = "";
    if (tile == "r") {
        user = "rock";
        console.log("rock test");
    } else if (tile == "p") {
        user = "paper";
    } else if (tile == "s") {
        user = "scissor";
    }

    console.log(user);
    // removeGameTileEventListeners();
    aiSelection(user);
}

function aiSelection(user) {
    let aiOptions = ["rock", "paper", "scissor"];
    let ai = aiOptions[Math.floor(Math.random() * 3)];
    console.log(ai);
    gameLogic(user, ai);
}