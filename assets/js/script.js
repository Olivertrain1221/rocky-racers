// last thing i did was fill the circles for ai selection after game logic i need to create and run remove of the css function.
// tomrrow add the hand color fill in depending on user selection 
// then time out for 3 seconds
// then turn the aiselection on


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


function turnOnAiSelectionEffect(ai) {
   console.log("start aieffect function");
   console.log(ai);
    let rockOuterCircle = document.getElementById("rock-circle");
    let paperOuterCircle = document.getElementById("paper-circle");
    let scissorOuterCircle = document.getElementById("scissor-circle");
    
    if (ai == "rock") {
        rockOuterCircle.classList.add("outer-circle-fill");
        console.log("rock on");
    } else if (ai == "paper") {
        paperOuterCircle.classList.add("outer-circle-fill");
        console.log("paper on");
    } else if (ai == "scissor") {
        scissorOuterCircle.classList.add("outer-circle-fill");
        console.log("scissor on");
    }
}

function turnOnHoverAffect() {

    let rockInnerImg = document.getElementById("inner-rock-image");
    let paperInnerImg = document.getElementById("inner-paper-image");
    let scissorInnerImg = document.getElementById("inner-scissor-image");
    
    rockInnerImg.classList.add("inner-tile-hover");
    paperInnerImg.classList.add("inner-tile-hover");
    scissorInnerImg.classList.add("inner-tile-hover");
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
        turnOnHoverAffect()
    }, 3000);

}


let rock = document.getElementById("rock-image");
let paper = document.getElementById("paper-image");
let scissor = document.getElementById("scissor-image");

//  Adds event listeners
// function gameTileEventListeners() {
rock.addEventListener("click", function () {
    //   toggle class for fill
    //  then time interval before userSelection!!
    
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
    aiSelection(user);
    
}



function aiSelection(user) {
    let aiOptions = ["rock", "paper", "scissor"];
    let ai = aiOptions[Math.floor(Math.random() * 3)];
    console.log(ai);
    turnOnAiSelectionEffect(ai);
    setTimeout(function () {
        gameLogic(user, ai);
    }, 3000);   

}

let aiScoreBoard = document.getElementById("ai-score");
let userScoreBoard = document.getElementById("user-score");
let aiScore = 0;
let userScore = 0;


function draw() {
    console.log("draw");
    gameStartup();
}

function win() {
    console.log("win");
    userScore++;
    userScoreBoard.innerHTML = userScore;
    gameStartup();
}

function lose() {
    console.log("lose");
    aiScore++;
    aiScoreBoard.innerHTML = aiScore;
    gameStartup();
}


function gameLogic(user, ai) {
    if (user === ai) {
        draw();
    } else if (user === 'rock') {
        if (ai === 'paper') {
            lose();
        } else {
            win(); // rock beats scissors
        }
    } else if (user === 'paper') {
        if (ai === 'scissor') {
            lose();
        } else {
            win(); // paper beats rock
        }
    } else if (user === 'scissor') {
        if (ai === 'rock') {
            lose();
        } else {
            win(); // scissors beats paper
        }
    }
}