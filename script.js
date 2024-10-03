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
                console.log("COMPUTER CHOSE SCISSORS...YOU WIN THIS ROUND")
             return   user_score +=1;
            
            case  "paper":
                console.log("COMPUTER CHOSE PAPER ...YOU LOSE THIS ROUND")
            return   comp_score +=1;
        default:
            console.log("YOU BOTH CHOSE SAME..TIE");
            break;
    }}
 else if (user_choice=="paper"){
    switch (comp_choice) {
        case "rock":
            console.log("COMPUTER CHOSE ROCK...YOU WIN THIS ROUND")
        return   user_score +=1;
        
        case   "scissors":
            console.log("COMPUTER CHOSE SCISSORS ...YOU LOSE THIS ROUND")
        return    comp_score +=1;

    default:
        console.log("YOU BOTH CHOSE SAME..TIE");
        break
}}
else {
    switch (comp_choice) {
        case "paper":
            console.log("COMPUTER CHOSE PAPER...YOU WIN THIS ROUND")
         return   user_score +=1;
        case  "rock":
            console.log("COMPUTER CHOSE ROCK ...YOU LOSE THIS ROUND")
        return   comp_score +=1;
    default:
        console.log("YOU BOTH CHOSE SAME..TIE");
        break;
    }}


}

function play_round(){
switch (prompt("rock paper or scissors").toLowerCase()) {
    case "rock":
        rps("rock");

        break;
    case "paper":
        rps("paper");


        break;
    case "scissors":
        rps("scissors");

        break;
    default:
        console.log("you entered the wrong statement")
        break;
}}


function play_game(){
    for (count=0;count<5;count++) {
        play_round();
    }
    if (user_score > comp_score) {
        console.log(`YOUR SCORE IS ${user_score} AND COMP SCORE IS ${comp_score}...YOU WIN` )
    }else if (user_score < comp_score) {
        console.log(`YOUR SCORE IS ${user_score} AND COMP SCORE IS ${comp_score}...YOU LOSE`)}
    else
        {console.log(`YOUR SCORE IS ${user_score} AND COMP SCORE IS ${comp_score}...TIE`)}
}

play_game();