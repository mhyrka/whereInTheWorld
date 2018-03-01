let rounds = ["continent", "subcontinent", "country", "city", "landmark"];
let currentRound = 0;
let currentLandmark = places[0].buckinghamPalace;
let clues = document.querySelector('.clues');
let choiceSection = document.querySelector('.choices');
let currentClue = 0;

function displayClue() {
  let clueSection = document.querySelector('.clues');

  let clueDiv = document.createElement('div');
  clueDiv.classList.add('clue');
  clueDiv.textContent = currentLandmark[rounds[currentRound]].clue[currentClue];
  clueSection.appendChild(clueDiv);
  currentClue++
  totalSeconds += 30;
}


let nextClueButton = document.getElementsByName('nextClue')[0];
nextClueButton.addEventListener('click', displayClue);

function displayChoices() {
  let choices = document.querySelector('.choices');

  for (var i = 0; i < currentLandmark[rounds[currentRound]].choices.length; i++) {
    let choiceDiv = document.createElement('div');
    choiceDiv.textContent = currentLandmark[rounds[currentRound]].choices[i];
    choiceDiv.id = i;
    choiceDiv.classList.add('choice');
    choices.appendChild(choiceDiv);
    addClickListener(choiceDiv);
    // choiceDiv.addEventListener('click', guess)
    // console.log(choiceDiv);
  }

}

function addClickListener(element){
  element.addEventListener('click', function(){
    guess(element)
  })
}



function guess(element) {
  if (element.textContent === 'Buckingham Palace') {
    Array.from(document.getElementsByClassName('choice')).forEach(c => {
      document.querySelector('.choices').removeChild(c);
    })
    let choices = document.querySelector('.choices');
    let congratulations = document.createElement('div');
    congratulations.classList.add('choice');
    var secs = secondsLabel.innerHTML = pad(totalSeconds % 60);
    var mins = minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    congratulations.textContent = "Congratulations, you win!! Your time was: " + mins + ":" + secs;
    choices.appendChild(congratulations);
  }
  else if (element.textContent === currentLandmark[rounds[currentRound]].name) {
    currentRound ++;
    currentClue = 0;
    Array.from(document.getElementsByClassName('choice')).forEach(c => {
      document.querySelector('.choices').removeChild(c);
    })
    Array.from(document.getElementsByClassName('clue')).forEach(c => {
      document.querySelector('.clues').removeChild(c);
    })
    displayChoices();

  } else {
    totalSeconds += 60;
    document.getElementById(element.id).textContent = ""
    element.style.backgroundImage = "url(X.png)";
    element.style.backgroundRepeat = "no-repeat";
    element.style.backgroundSize = "cover";
    
  }


}

displayChoices();
