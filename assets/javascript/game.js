var pointsToWin = 0,
    currentPoints = 0,
    wins = 0,
    losses = 0,
    blueNumber = 0,
    redNumber = 0,
    greenNumber = 0,
    mysteryNumber =0;
$(".gameWindow").append(


    `
    <div class="gameWindow" style="width: 800px; height: 700px; background: red;">
        <div class="buttonBox" stlye="width:100%; height:20%;">
            <button class="startButton" style="width: 25%; height: 80px;">New Game</button>
            <button class="resetButton" style="width: 25%; height: 80px;">Reset</button>
        </div>
        <div class="scoreBox"       style="width:100%; height:10%;">
            <div class="wins"       style="width: 25%">Wins: 0</div>
            <div class="losses"     style="width: 25%">Losses: 0</div>
        </div>
        <div class="pointsBox" style="width:100%; height:10%;">
                <div class="borderBox"  style="width: 25%"></div>
                <div class="points" style="width: 25%">Current Points: 0</div>
                <div class="pointsToWin" style="width: 25%">Points To Win: ?</div>
                <div class="borderBox"  style="width: 25%"></div>
            </div>
        <div class="crystalBox" style="width:100%; height:20%;">
            <img src="assets/images/blue.png" style="width: 24%; height: 100%;">
            <img src="assets/images/red.png" style="width: 24%; height: 100%;">
            <img src="assets/images/green.png" style="width: 24%; height: 100%;">
            <img src="assets/images/mystery.png" style="width: 24%; height: 100%;">
            <br>
            <button class="blueButton" style="width: 24%; height: 50%;">Blue</button>
            <button class="redButton" style="width: 24%; height: 50%;">Red</button>
            <button class="greenButton" style="width: 24%; height: 50%;">Green</button>
            <button class="mysteryButton" style="width: 24%; height: 50%;">Mystery</button>
        </div>
        `



)


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
$(".blueButton").on("click", function() {
    currentPoints += blueNumber
    $(".points").html("Current Points: " + currentPoints)
    compareNumbers()
})
$(".redButton").on("click", function() {
    currentPoints += redNumber
    $(".points").html("Current Points: " + currentPoints)
    compareNumbers()
})
$(".greenButton").on("click", function() {
    currentPoints += greenNumber
    $(".points").html("Current Points: " + currentPoints)
    compareNumbers()
})
$(".mysteryButton").on("click", function() {
    currentPoints += mysteryNumber
    $(".points").html("Current Points: " + currentPoints)
    compareNumbers()

})


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