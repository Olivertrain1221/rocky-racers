// last thing i did was fill the circles for ai selection after game logic i need to create and run remove of the css function.
// tomrrow add the hand color fill in depending on user selection 
// then time out for 3 seconds
// then turn the aiselection on
// add tiny png.



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


// Temporary bypass of username, remove line 40-45 and uncomment below
// playButton.addEventListener("click", getUserName);
playButton.addEventListener("click", tempStart);

function tempStart(){
    userName="temp";
    mainContainer.style.display = "none";
    gameStartup();
}


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

function winner(result) {
    let winnerMessage = document.getElementById("winner-message");
    if (result == "win"){
        winnerMessage.innerText = "Wahooo Winner"
    } else if (result== "draw") {
        winnerMessage.innerText = "Draww!!!"
    } else if (result == "lose") {
        winnerMessage.innerText = "Loserrrr unlucky!"
    }
        
    console.log(winnerMessage)
}


function redLightOn() {
    let redLight = document.getElementById("red");
    redLight.classList.add("red-light-on")
}

function yellowLightOn() {
    let yellowLight = document.getElementById("yellow");
    yellowLight.classList.add("yellow-light-on")

}

function greenLightOn() {
    let greenLight = document.getElementById("green");
    greenLight.classList.add("green-light-on")
}

function LightOff(){
    document.getElementById("yellow").classList.remove("yellow-light-on")
    document.getElementById("green").classList.remove("green-light-on");
}

function turnOffAiSelectionEffect() {
    let rockOuterCircle = document.getElementById("rock-circle");
    let paperOuterCircle = document.getElementById("paper-circle");
    let scissorOuterCircle = document.getElementById("scissor-circle");

    rockOuterCircle.classList.add("outer-circle-fill");
    paperOuterCircle.classList.add("outer-circle-fill");
    scissorOuterCircle.classList.add("outer-circle-fill");

    rockOuterCircle.classList.remove("outer-circle-fill");
    paperOuterCircle.classList.remove("outer-circle-fill");
    scissorOuterCircle.classList.remove("outer-circle-fill");
}

// function turnOffUserSelectionEffect() {
//     let rockInnerImage = document.getElementById("inner-rock-image");
//     let paperInnerImage = document.getElementById("inner-paper-image");
//     let scissorInnerImage = document.getElementById("inner-scissor-image");

//     rockInnerImage.classList.add("inner-image-fill");
//     paperInnerImage.classList.add("inner-image-fill");
//     scissorInnerImage.classList.add("inner-image-fill");

//     rockInnerImage.classList.remove("inner-image-fill");
//     paperInnerImage.classList.remove("inner-image-fill");
//     scissorInnerImage.classList.remove("inner-image-fill");

// }

// function turnOnUserSelectionEffect(user) {
   
//     let rockInnerImage = document.getElementById("inner-rock-image");
//     let paperInnerImage = document.getElementById("inner-paper-image");
//     let scissorInnerImage = document.getElementById("inner-scissor-image");
     
//      if (user == "rock") {
//          rockInnerImage.classList.add("inner-image-fill");
//          console.log("rock on");
//      } else if (user == "paper") {
//          paperInnerImage.classList.add("inner-image-fill");
//          console.log("paper on");
//      } else if (user == "scissor") {
//          scissorInnerImage.classList.add("inner-image-fill");
//          console.log("scissor on");
//      }
//  }






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

let svgs = document.querySelectorAll("svg");
function enableGameSvgs() {
    svgs.forEach(svg => {
        svg.classList.remove("disable-svg-effects");
    });
}

function disableGameSvgs() {
    svgs.forEach(svg => {
        svg.classList.add("disable-svg-effects");
    });
}




function gameStartup() {
    let userNameSpan = document.getElementById("users-name");
    userNameSpan.innerHTML = userName;
    let scoreBoard = document.getElementById("score-board");
    scoreBoard.style.display = "flex";
    let gameTiles = document.getElementsByClassName("rock-paper-scissor-logo")[0];
    gameTiles.style.display = "flex";
    trafficLightAnimation();
}


function trafficLightAnimation() {
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
        enableGameSvgs();
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
    disableGameSvgs();
    // turnOnUserSelectionEffect(user);
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
    turnOffAiSelectionEffect();
    winner("draw");
    gameStartup();
}

function win() {
    console.log("win");
    userScore++;
    userScoreBoard.innerHTML = userScore;
    turnOffAiSelectionEffect();
    winner("win");
    gameStartup();
    
}

function lose() {
    console.log("lose");
    aiScore++;
    aiScoreBoard.innerHTML = aiScore;
    turnOffAiSelectionEffect();
    winner("lose");
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