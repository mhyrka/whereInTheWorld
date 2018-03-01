let rounds = ["continent", "subcontinent", "country", "city", "landmark"];
let currentRound = 0;
let currentLandmark = places[0].buckinghamPalace;
let clues = document.querySelector('.clues');
let choiceSection = document.querySelector('.choices');
let currentClue = 0;

function displayClue() {
  let clueSection = document.querySelector('.clues');

  let clueDiv = document.createElement('div');

  clueDiv.textContent = currentLandmark[rounds[currentRound]].clue[currentClue];
  clueSection.appendChild(clueDiv);
  currentClue++
}


let nextClueButton = document.getElementsByName('nextClue')[0];
nextClueButton.addEventListener('click', displayClue);

function displayChoices() {
  let choices = document.querySelector('.choices');

  for (var i = 0; i < currentLandmark[rounds[currentRound]].choices.length; i++) {
    let choiceDiv = document.createElement('div');
    choiceDiv.textContent = currentLandmark[rounds[currentRound]].choices[i];
    choices.appendChild(choiceDiv);
    choiceDiv.addEventListener('click', guess)
  }

}

function guess() {
  
}

displayChoices();
