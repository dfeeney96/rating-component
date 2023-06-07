const one = document.querySelector(".one");
const two= document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

let scoreButtons = [one, two, three, four, five];
let activeButtons = [];

let chosenScore;

for(let i = 0; i < scoreButtons.length; i++){
    scoreButtons[i].addEventListener("click", function(){
        for(let j = 0; j < scoreButtons.length; j++){
            if(scoreButtons[j].getAttribute("id") === "selected" && this !== scoreButtons[j]){
                scoreButtons[j].removeAttribute("id", "selected");
                scoreButtons[j].previousElementSibling.removeAttribute("id", "prior-score");
            }
        }

        if(this.getAttribute("id") !== "selected"){
            if(this.innerText !=="1"){
                this.previousElementSibling.setAttribute("id", "prior-score");
            }
            this.setAttribute("id", "selected");
            chosenScore = this.innerText;
        } else {
            this.removeAttribute("id", "selected");
            chosenScore = "";
        }
    }
    )
}


const submit = document.querySelector(".submit");
const ratingCard = document.querySelector(".rating");
const errorCard = document.querySelector(".error");
const thankyouCard = document.querySelector(".thankyou");
const confirmationMessage = document.querySelector(".thankyou h2")

submit.addEventListener("click", function(){
    if(chosenScore){
        ratingCard.classList.add("hide-card");
        thankyouCard.classList.add("submission-received");
        confirmationMessage.innerHTML = `You selected ${chosenScore} out of 5`;
    } else {
        ratingCard.classList.add("hide-card");
        errorCard.classList.add("no-score")
    }

})

const returnButton = document.querySelector(".return");

returnButton.addEventListener("click", function(){
    errorCard.classList.remove("no-score")
    ratingCard.classList.remove("hide-card");
})