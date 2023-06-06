const one = document.querySelector(".one");
const two= document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

let scoreButtons = [one, two, three, four, five];

let chosenScore;

for(let i = 0; i < scoreButtons.length; i++){
    scoreButtons[i].addEventListener("click", function(){
        chosenScore = this.innerText;
    }
    )
}


const submit = document.querySelector(".submit");
const ratingCard = document.querySelector(".rating");
const thankyouCard = document.querySelector(".thankyou");
const confirmationMessage = document.querySelector(".thankyou h2")

submit.addEventListener("click", function(){
    ratingCard.classList.add("hide-card");
    thankyouCard.classList.add("submission-received");
    confirmationMessage.innerHTML = `You selected ${chosenScore} out of 5`;

})