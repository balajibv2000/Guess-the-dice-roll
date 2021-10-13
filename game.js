var started = true;
var timeLeft = 10;
var userChosenNumber
var randomNumber 
var score = 0

setTimeout(function(){
    started = false;
    $("#load").addClass("hide")
    $("#start-btn").removeClass("hide")
}, 3000)

function startGame(){
    $("#start-btn").addClass("hide")
    $("#result").addClass("hide")
    $("#time").removeClass("hide")
    if(!started){
      select();
      started = true;
      document.getElementById("seconds").innerHTML = String( 10 );
    }
}

function select(){
    randomNumber = Math.floor(Math.random()*6) + 1;
    $(".btn").click(function (){
        $(".btn").removeClass("pressed")
        userChosenNumber = $(this).attr("id");
        $(this).addClass("pressed");
        document.getElementById("variable").innerHTML = String( userChosenNumber )
    })
    setTimeout(countdown, 1000);
}

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
    if (timeLeft === 0){
        document.getElementById("img").setAttribute("src","./img/dice" + randomNumber + ".png");
        if(randomNumber == userChosenNumber){
            console.log("Your answer is correct")
            score++
            document.getElementById("score").innerHTML = String( score )
            $("#result").removeClass("hide")
            $("#right").removeClass("hide")
        }
        else {
            console.log("Your answer is wrong")
            console.log("correct answer is " + randomNumber)
            $("#result").removeClass("hide")
            $("#wrong").removeClass("hide")
        }
        timeLeft = 10
        started = false
        $("#start-btn").removeClass("hide")
        $("#time").addClass("hide")
    }
};



