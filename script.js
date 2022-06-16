// select all elements
const form = document.querySelector("form");
const inputElement = document.querySelector('#number');
const submitBtnElement = document.querySelector('#submitBtn');
const notificationElement = document.querySelector('#notification');

const correctScoreElement = document.querySelector('#correctScore');
const wrongScoreElement = document.querySelector('#wrongScore');
const successPercentageElement = document.querySelector('#pBarSuccessPercentage');
const wrongPercentageElement = document.querySelector('#pBarWrongPercentage');


// data layer
let generateRandomNum = Math.round(Math.random() * 9);
let correctScore = 0;
let wrongScore = 0;
let gameOver = false;
console.log(generateRandomNum, 'generateRandomNum');

// form event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userGuessNum = +inputElement.value;
    //validate input number
    if(userGuessNum < 1 || userGuessNum > 9) {
        alert('Please provide a number between 0-9');
        return;
    }

    if(generateRandomNum === userGuessNum) {
        correctScore++;

        // show on dom
        correctScoreElement.textContent = correctScore;

        // show correct notification
        // <div class="alert alert-danger" role="alert">
        //     Sorry!! Wrong Digit. It Was 4
        // </div>

        const correct =   `<div class="alert alert-success" role="alert">
                            WoW! Guys great. It was ${generateRandomNum}
                        </div>`
        notificationElement.insertAdjacentHTML('beforeend', correct);
        

    } else {
        wrongScore++;

        // show on dom
        wrongScoreElement.textContent = wrongScore;

        // show wrong notification
        const wrong = `<div class="alert alert-danger" role="alert">
                            Sorry!! Wrong Digit. It Was ${generateRandomNum}
                        </div>`
        notificationElement.insertAdjacentHTML('beforeend', wrong);
    }

    // rest input value
    inputElement.value = '';
    // generateRandomNum = Math.round(Math.random() * 9);
})



















