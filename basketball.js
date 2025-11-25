let team1El = document.getElementById("team1");
let team2El = document.getElementById("team2");

let currentHomeScore = parseInt(team1El.textContent);
function homePlus1(){
    console.log("Button clicked!");
    currentHomeScore +=1;
    team1El.textContent = currentHomeScore;
}
function homePlus2(){
    console.log("Button clicked!");
    currentHomeScore +=2;
    team1El.textContent = currentHomeScore;
}
function homePlus3(){
    console.log("Button clicked!");
    currentHomeScore +=3;
    team1El.textContent = currentHomeScore;
}


let currentGuestScore = parseInt(team2El.textContent);
function guestPlus1(){
    console.log("Button clicked!");
    currentGuestScore +=1;
    team2El.textContent = currentGuestScore;
}
function guestPlus2(){
    console.log("Button clicked!");
    currentGuestScore +=2;
    team2El.textContent = currentGuestScore;
}
function guestPlus3(){
    console.log("Button clicked!");
    currentGuestScore +=3;
    team2El.textContent = currentGuestScore;
}

