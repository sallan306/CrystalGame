var pointsToWin = 0,
    currentPoints = 0,
    wins = 0,
    losses = 0,
    blueNumber = 0,
    redNumber = 0,
    greenNumber = 0,
    mysteryNumber =0;



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