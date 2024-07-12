let sumElhome = document.getElementById('home-score')
let sumElguest = document.getElementById('guest-score')
let elTimer= document.getElementById('timer')
let elPeriod = document.getElementById('period-number')

let homeTeam= document.getElementById('home-team-name')
let awayTeam= document.getElementById('away-team-name')

let homeScore = 0
let guestScore = 0
let periodNum = 0

function add1(team){
    if (team === 'home'){
        homeScore+=1
        sumElhome.textContent = homeScore
    }else{
        guestScore+=1
        sumElguest.textContent = guestScore
    }
}

function add2(team){
    if (team === 'home'){
        homeScore+=2
        sumElhome.textContent = homeScore
    }else{
        guestScore+=2
        sumElguest.textContent = guestScore
    }
}

function add3(team){
    if (team === 'home'){
        homeScore+=3
        sumElhome.textContent = homeScore
    }else{
        guestScore+=3
        sumElguest.textContent = guestScore
    }
}

function minus1(team){
    if (team === 'home' && homeScore>0){
        homeScore-=1
        sumElhome.textContent = homeScore

    }else if(guestScore>0){
        guestScore-=1
        sumElguest.textContent = guestScore
    }
}


function newGame(){
    homeScore=0
    guestScore=0
    periodNum = 0
    sumElhome.textContent = 0
    sumElguest.textContent = 0
    homeTeam.value = ''
    awayTeam.value = ''
    elTimer.textContent = "00:00"
    elPeriod.textContent = 0
    document.getElementById('guest-score').style.color = "#FCD34D"
    document.getElementById('home-score').style.color = "#FCD34D"
}

function checkLeader(){
    if (homeScore>guestScore){
        document.getElementById('home-score').style.color = "#34D399"
        document.getElementById('guest-score').style.color = "#F94F6D"
    }else if(homeScore<guestScore){
        document.getElementById('guest-score').style.color = "#34D399"
        document.getElementById('home-score').style.color = "#F94F6D"
    }else{
        document.getElementById('guest-score').style.color = "#FCD34D"
        document.getElementById('home-score').style.color = "#FCD34D"
    }
}

var timer;
var seconds = 0;
var mins = 0;
var running = false;

function countdown(minutes) {
    mins = minutes;
    seconds = 60;
    tick();
}

function tick() {
    if (!running) return;

    var counter = document.getElementById("timer");
    var current_minutes = mins - 1;
    seconds--;
    counter.textContent = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);

    if (seconds > 0) {
        timer = setTimeout(tick, 1000);
    } else {
        if (mins > 1) {
            mins--;
            seconds = 60;
            timer = setTimeout(tick, 1000);
        }
    }
}

function startTimer() {
    if (!running) {
        running = true;
        if (!timer) {
            countdown(mins || 15); // Default to 1 minute if not specified
        } else {
            tick();
        }
    }
}

function stopTimer() {
    running = false;
    clearTimeout(timer);
}

function resetTimer() {
    stopTimer();
    mins = 0;
    seconds = 0;
    timer = null;
    document.getElementById("timer").textContent = "00:00";
}

function addPeriod(){
    if(periodNum>=0 && periodNum<4){
        periodNum += 1
        elPeriod.textContent = periodNum
    }

}

function substractPeriod(){
    if(periodNum>0){
        periodNum -= 1
        elPeriod.textContent = periodNum
    }

}
