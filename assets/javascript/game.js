//-----------------------------------------VARIABLE DECLARATIONS-------------------------------------------------------//

var pointsToWin = 0,
    currentPoints = 0,
    wins = 0,
    losses = 0,
    blueNumber = 0,
    redNumber = 0,
    greenNumber = 0,
    mysteryNumber = 0;

//-----------------------------------------RENDER GAME ELEMENTS-------------------------------------------------------//
$(".gameWindow").append(
    `
        <div class="buttonBox">
            <button class="startButton">New Game</button>
            <button class="resetButton">Reset Everything</button>
        </div>
        <div class="scoreBox">
            <div class="wins">Wins: 0</div>
            <div class="losses">Losses: 0</div>
        </div>
        <div class="pointsBox">
                <div class="points">Current Points: 0</div>
                <div class="pointsToWin">Points To Win: ?</div>
            </div>
        <div class="crystalBox">
            <img class="crystal" id="blueCrystal" src="assets/images/blue.png">
            <img class="crystal" id="redCrystal" src="assets/images/red.png">
            <img class="crystal" id="greenCrystal" src="assets/images/green.png">
            <img class="crystal" id="mysteryCrystal" src="assets/images/mystery.png">
        </div>
        `
)

//-----------------------------------------FUNCTIONS-------------------------------------------------------//

var newGame = () => { 
    pointsToWin = getRandomInt(30, 100)
    blueNumber = getRandomInt(2, 5)
    redNumber = getRandomInt(6, 8)
    greenNumber = getRandomInt(9, 11)
    mysteryNumber = getRandomInt(12, 15)
    currentPoints = 0;
    updateScreen()
}

var getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

}

var compareNumbers = () => {
    if (currentPoints === 0 && pointsToWin === 0) {
        newGame()
    }
    else if (currentPoints > pointsToWin) {
        losses++;
        updateScreen()
        newGame();
    }
    else if (currentPoints === pointsToWin) {
        wins++;
        updateScreen()
        newGame()
    }

}
var updateScreen = () => {
    $(".wins").html("Wins: " + wins)
    $(".losses").html("Losses: " + losses)
    $(".points").html("Current Points: " + currentPoints)
    $(".points").html("Current Points: " + currentPoints)
    $(".pointsToWin").html("Points To Win: " + pointsToWin)
}
var fullReset = () => {
    wins = 0;
    losses = 0;
    newGame()
}


//-----------------------------------------CLICK EVENTS-------------------------------------------------------//

$(".startButton").on("click", function(){
    newGame()
})

$(".resetButton").on("click", function(){
    fullReset()
})

$("#blueCrystal").on("click", function() {
    currentPoints += blueNumber
    updateScreen()
    compareNumbers()
})

$("#redCrystal").on("click", function() {
    currentPoints += redNumber
    updateScreen()
    compareNumbers()
})
$("#greenCrystal").on("click", function() {
    currentPoints += greenNumber
    updateScreen()
    compareNumbers()
})
$("#mysteryCrystal").on("click", function() {
    currentPoints += mysteryNumber
    updateScreen()
    compareNumbers()

})