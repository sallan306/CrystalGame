//-----------------------------------------VARIABLE DECLARATIONS-------------------------------------------------------//

var pointsToWin = 0,
    currentPoints = 0,
    wins = 0,
    losses = 0,
    blueNumber = 0,
    redNumber = 0,
    greenNumber = 0,
    mysteryNumber =0;

//-----------------------------------------RENDER GAME ELEMENTS-------------------------------------------------------//
$(".gameWindow").append(
    `
        <div class="buttonBox">
            <button class="startButton">New Game</button>
            <button class="resetButton">Reset</button>
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

function resetGame() {
    pointsToWin = getRandomInt(30, 100)
    blueNumber = getRandomInt(2, 5)
    redNumber = getRandomInt(6, 8)
    greenNumber = getRandomInt(9, 11)
    mysteryNumber = getRandomInt(12, 15)
    currentPoints = 0;
    $(".points").html("Current Points: " + currentPoints)
    $(".pointsToWin").html("Points To Win: " + pointsToWin)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive

}

function compareNumbers() {
    if (currentPoints > pointsToWin) {
        losses++;
        $(".losses").html("Losses: " + losses)
        resetGame()
    }
    else if (currentPoints === pointsToWin) {
        wins++;
        $(".wins").html("Wins: " + wins)
        resetGame()

    }
}
//-----------------------------------------CLICK EVENTS-------------------------------------------------------//

$(".startButton").on("click", function(){
    resetGame()
})
$(".resetButton").on("click", function(){
    resetGame()
    wins = 0;
    losses = 0;
    $(".losses").html("Losses: " + losses)
    $(".wins").html("Wins: " + wins)
})

$("#blueCrystal").on("click", function() {
    currentPoints += blueNumber
    $(".points").html("Current Points: " + currentPoints)
    compareNumbers()
})

$("#redCrystal").on("click", function() {
    currentPoints += redNumber
    $(".points").html("Current Points: " + currentPoints)
    compareNumbers()
})
$("#greenCrystal").on("click", function() {
    currentPoints += greenNumber
    $(".points").html("Current Points: " + currentPoints)
    compareNumbers()
})
$("#mysteryCrystal").on("click", function() {
    currentPoints += mysteryNumber
    $(".points").html("Current Points: " + currentPoints)
    compareNumbers()

})