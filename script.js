// select all elements
const form = document.querySelector("form");
const inputElement = document.querySelector('#number');
const submitBtnElement = document.querySelector('#submitBtn');
const notificationElement = document.querySelector('#notification');

const correctScoreElement = document.querySelector('#correctScore');
const wrongScoreElement = document.querySelector('#wrongScore');
const successPercentageElement = document.querySelector('#pBarSuccessPercentage');
const wrongPercentageElement = document.querySelector('#pBarWrongPercentage');
// modal
const modal = document.querySelector("#showModal");
const modalScore = document.querySelector("#modalScore");
const confirmBtnElement = document.querySelector("#confirmBtn");


// data layer
let generateRandomNum = Math.round(Math.random() * 8) + 1;
let correctScore = 0;
let wrongScore = 0;
let gameOver = false;
let maxPlayNumber = 2;
let triedNumber = 1;
let successPercentage = 0;
let wrongPercentage = 0;
// console.log(generateRandomNum, 'generateRandomNum');



// show modal
const showModal = (percentage) => {

    modalScore.textContent = percentage;
    let myModal = new bootstrap.Modal(modal, {});
    myModal.show();
}


// form event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userGuessNum = +inputElement.value;
    //validate input number
    if(userGuessNum < 1 || userGuessNum > 9) {
        
        alert('Please provide a number between 1-9');
        return;
    }

    if(gameOver) {
        // reset input value
        inputElement.value = '';

        // show message
        alert('Game is over. Please try again');
        return;
    }

    if(generateRandomNum === userGuessNum) {
        correctScore++;

        // show on dom
        correctScoreElement.textContent = correctScore;

        // show correct notification
        const correct =   `<div class="alert alert-success" role="alert">
                            WoW! Guys great. It was ${generateRandomNum}
                        </div>`
        notificationElement.insertAdjacentHTML('beforeend', correct);
        

        // calculate percentage and show dom
        const cPercentage = (correctScore / maxPlayNumber) * 100;
        successPercentage = cPercentage;
        successPercentageElement.textContent = `${successPercentage}%`;

    } else {
        wrongScore++;

        // show on dom
        wrongScoreElement.textContent = wrongScore;

        // show wrong notification
        const wrong = `<div class="alert alert-danger" role="alert">
                            Sorry!! Wrong Digit. It Was ${generateRandomNum}
                        </div>`
        notificationElement.insertAdjacentHTML('beforeend', wrong);

        // calculate percentage and show dom
        const wPercentage = (wrongScore / maxPlayNumber) * 100;
        wrongPercentage = wPercentage;
        wrongPercentageElement.textContent = `${wrongPercentage}%`;
    }


    // reset input value
    inputElement.value = '';

    // set random number
    generateRandomNum = Math.round(Math.random() * 8) + 1;
    // console.log(generateRandomNum, 'generateRandomNum');

    // check how many times try 
    if(triedNumber < maxPlayNumber && !gameOver) {
        triedNumber++;
    } else {
        gameOver = true;

        // disabled form submit
        inputElement.setAttribute('disabled', 'disabled');
        submitBtnElement.setAttribute('disabled', 'disabled');
        alert('Game is over.');
        showModal(successPercentage);
    }

})


confirmBtnElement.addEventListener('click', () => {

    generateRandomNum = Math.round(Math.random() * 8) + 1;
    correctScore = 0;
    wrongScore = 0;
    gameOver = false;
    maxPlayNumber = 2;
    triedNumber = 1;
    successPercentage = 0;
    wrongPercentage = 0;

    inputElement.removeAttribute('disabled');
    submitBtnElement.removeAttribute('disabled');

    correctScoreElement.textContent = correctScore;
    wrongScoreElement.textContent = wrongScore;

    successPercentageElement.textContent = `${successPercentage}%`;
    wrongPercentageElement.textContent = `${wrongPercentage}%`;

    // remove notification
    notificationElement.innerHTML = '';

})













