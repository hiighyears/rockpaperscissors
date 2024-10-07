function getComputerChoice(){
let choice = Math.random();
// console.log(choice);
if (choice <= .33) 
    return choice = "rock"
 else if (choice <= .66) 
    return choice = "paper"
 else
    return choice = "scissors"
}

let comp_score = 0;
let user_score = 0;

function rps(user_choice){
    let comp_choice = getComputerChoice();
    // console.log(comp_choice)
    if (user_choice=="rock"){
    switch (comp_choice) {
            case "scissors":
                record.textContent = "COMPUTER CHOSE SCISSORS...YOU WIN THIS ROUND"
                user_score +=1;
                break;

            
            case  "paper":
                record.textContent= "COMPUTER CHOSE PAPER ...YOU LOSE THIS ROUND"
            
                comp_score +=1;
                break;
        default:
            record.textContent ="YOU BOTH CHOSE SAME..TIE"
            break;
    }}
 else if (user_choice=="paper"){
    switch (comp_choice) {
        case "rock":
            record.textContent="COMPUTER CHOSE ROCK...YOU WIN THIS ROUND"
           user_score +=1;
           break;
        
        case   "scissors":
            record.textContent="COMPUTER CHOSE SCISSORS ...YOU LOSE THIS ROUND"
            comp_score +=1;
            break;

    default:
        record.textContent="YOU BOTH CHOSE SAME..TIE"
        break
}}
else {
    switch (comp_choice) {
        case "paper":
            record.textContent="COMPUTER CHOSE PAPER...YOU WIN THIS ROUND"
            user_score +=1;
            break;
        case  "rock":
            record.textContent="COMPUTER CHOSE ROCK ...YOU LOSE THIS ROUND"
           comp_score +=1;
           break;
    default:
        record.textContent="YOU BOTH CHOSE SAME..TIE";
        break;
    }}


    scoreBoard.textContent = `USER SCORE:${user_score} COMP SCORE:${comp_score}`;
    if(user_score>=5||comp_score>=5){
        check_score();
        
    }

}



// function play_round(){

// switch (prompt("rock paper or scissors").toLowerCase()) {
//     case "rock":
//         rps("rock");

//         break;
//     case "paper":
//         rps("paper");


//         break;
//     case "scissors":
//         rps("scissors");

//         break;
//     default:
//         console.log("you entered the wrong statement")
//         break;
// }}

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        rps(button.id);
      })
});

const scoreBoard =  document.createElement("div");
scoreBoard.textContent = `USER SCORE:${user_score} COMP SCORE:${comp_score}`;
scoreBoard.style.padding = "30px 0px";
const record =  document.createElement("div");
record.style.padding = "30px 0px";

const body = document.querySelector("body"); // Or any other element where you want to append the scoreboard
body.appendChild(scoreBoard);
body.appendChild(record);



function check_score(){
    
    if (user_score > comp_score) {
        scoreBoard.textContent =`YOUR SCORE IS ${user_score} AND COMP SCORE IS ${comp_score}...YOU WIN` 
    }else if (user_score < comp_score) {
        scoreBoard.textContent =`YOUR SCORE IS ${user_score} AND COMP SCORE IS ${comp_score}...YOU LOSE`}
    else
    scoreBoard.textContent =`YOUR SCORE IS ${user_score} AND COMP SCORE IS ${comp_score}...TIE`
    comp_score = 0;
     user_score = 0;
     record.textContent="   Choose rock paper and scissors to play a new game"

}
        




