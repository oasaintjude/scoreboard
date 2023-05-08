let homeScore = document.getElementById("scoreBoardHome")
let awayScore = document.getElementById("scoreBoardAway")
// let qscore = document.getElementById("qScore")

defaultScoreHome = 0;
defaultScoreAway = 0;
let initialP = qScore.textContent

// HOME SCOREBOARD
function increment1Home() {
    defaultScoreHome += 1;
    scoreBoardHome.textContent = defaultScoreHome;
}
function increment2Home() {
    defaultScoreHome += 2;
    scoreBoardHome.textContent = defaultScoreHome;
}
function increment3Home() {
    defaultScoreHome += 3;
    scoreBoardHome.textContent = defaultScoreHome;
}


// AWAY SCOREBOARD
function increment1Away() {
    defaultScoreAway += 1;
    scoreBoardAway.textContent = defaultScoreAway;
}
function increment2Away() {
    defaultScoreAway += 2;
    scoreBoardAway.textContent = defaultScoreAway;
}
function increment3Away() {
    defaultScoreAway += 3;
    scoreBoardAway.textContent = defaultScoreAway;
}

// RESET
function reset() {
    scoreBoardAway.textContent = 0
    defaultScoreAway = 0
    scoreBoardHome.textContent = 0
    defaultScoreHome = 0
}

// SAVE
function save() {
   let score = "Home: " + scoreBoardHome.textContent + ", Away: " + scoreBoardAway.textContent + ". "
   qScore.textContent += score 
}

// CLEAR 
function clearRecord() {
    let yesno = confirm("Are you sure you want to do this?. This action cannot be undone!")
    if (yesno === true) {
        qScore.textContent = initialP
    } else if (yesno === false) {
        qScore.textContent = qScore.textContent
    }
    
}



// COUNTDOWN TIMER
