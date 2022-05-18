function blastoffTimerV1{
    console.log("blastoffTimerV1() started");
    var countdownTimer = 20;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function () {
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 2000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 4000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 6000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 8000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000)
    setTimeout(function () {
        countdownTimer = countdownTimer - 2;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 12000)
}