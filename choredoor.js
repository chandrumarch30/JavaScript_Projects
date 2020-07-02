
// User onclick events on 3 doors
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// Interface for start button
let startButton = document.getElementById('start');

//Global variables
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let currentlyPlaying = true;

// Images to be shown on each door click. Default is closed door image
const botDoorPath ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

// playDoor() to determine if the winning strategy is achieved. If closedDoors is 0 or chore door is not opened in other clicks on closedDoors(say 1,2), user wins. Else failure
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0) {
    gameOver('win');
  }else if(isBot(door)){
    gameOver();
  }
}

const isBot = door => {
  if(door.src === botDoorPath)
    return true;
  return false;
}

// Function to check if user clicked the closed door. This method will check any abnormal cheating user behaviors
const isClicked = door => {

  if(door.src === closedDoorPath)
    return false;
  return true;
}

// Onclick events operations on 3 doors where the closed door will be opened with either of the 3 images randomly
doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && (currentlyPlaying=== true) ){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && (currentlyPlaying=== true) ){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if(!isClicked(doorImage3)&& (currentlyPlaying=== true)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

//The method is to reset Data to default for subsequent game plays
const startRound = () => {
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  randomChoreDoorGenerator();
}

//When game ends, user click on start button for new game without refreshing webbrowsers. Calls startRound() to reset data values
startButton.onclick = () => {
  if(!currentlyPlaying)
    startRound();
}

//Updating the game status i.e. if user opens last door as chore image door,user wins. Else computer wins
const gameOver = status => {
  if(status === 'win')
    startButton.innerHTML = "You win! Play again?";
  else
    startButton.innerHTML = 'Game over! Play again?'
  currentlyPlaying = false;
}

// Randome generations of door images for each door for each game
const randomChoreDoorGenerator = () => {

  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

//Function call to start fresh or new games
startRound();
