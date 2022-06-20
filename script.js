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
let triedNumber = 0;
let successPercentage = 0;
let wrongPercentage = 0;


// show modal
const showModal = (percentage) => {

    modalScore.textContent = percentage;
    let myModal = new bootstrap.Modal(modal, {});
    myModal.show();
}

// handle score
// const handleScore = (isCorrect, notifyElm, maxPlayNumber) => {
//     // handleScore(true, correctScore);
//     let notifyNode;
//     let scoreElement;
//     let score;
//     if(isCorrect) {
//         correctScore++;
//         notifyNode =   `<div class="alert alert-success" role="alert">
//                             WoW! Guys great. It was ${generateRandomNum}
//                         </div>`
//         scoreElement = correctScoreElement;
//         score = correctScore;
//     } else {
//         wrongScore++;
//         notifyNode =   `<div class="alert alert-danger" role="alert">
//                             Sorry!! Wrong Digit. It Was ${generateRandomNum}
//                         </div>`
//         scoreElement = wrongScoreElement;
//         score = wrongScore;
//     }

    

//     // show on dom
//     scoreElement.textContent = score;

//     // show notification
//     notifyElm.innerHTML = notifyNode;
    
    
//     // calculate percentage and show dom
//     const percentage = (incScore / maxPlayNumber) * 100;
//     score = percentage;
//     successPercentageElement.textContent = `${score}%`;

// }


// form event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userGuessNum = +inputElement.value;
    // reset input value
    inputElement.value = '';

    // set random number
    generateRandomNum = Math.round(Math.random() * 8) + 1;

    //validate input number
    if(userGuessNum < 1 || userGuessNum > 9) {
        
        alert('Please provide a number between 1-9');
        return;
    }

    // if dom manipulate and remove input disabled attribute trigger condition
    if(gameOver) {
        // reset input value
        inputElement.value = '';

        // show message
        alert('Game is over. Please try again');
        return;
    }

  
    if(!gameOver) {
        triedNumber++;

        if(generateRandomNum === userGuessNum) {
            
            correctScore++;
            console.log('Correct');
    
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
            console.log('Wrong');
    
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

        if(triedNumber === maxPlayNumber) {
            gameOver = true;
            // disabled form submit
            inputElement.setAttribute('disabled', 'disabled');
            submitBtnElement.setAttribute('disabled', 'disabled');
            // reset input value
            inputElement.value = '';
            // debugger;
            alert('Game is over. Please try again');
            // showModal(successPercentage);
        }
    }

})


confirmBtnElement.addEventListener('click', () => {

    generateRandomNum = Math.round(Math.random() * 8) + 1;
    correctScore = 0;
    wrongScore = 0;
    gameOver = false;
    maxPlayNumber = 5;
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




