function getComputerChoice(){
let choice = Math.random();
// console.log(choice);
if (choice <= .33) 
    return choice = "rock"
 else if (choice <= .63) 
    return choice = "paper"
 else
    return choice = "scissor"
}

let comp_score = 0;
let user_score = 0;
let comp_choice = getComputerChoice();

function rps(user_choice){
    let comp_choice = getComputerChoice();

    switch (user_choice=="rock") {
            case (comp_choice == "scissors"):
                console.log("COMPUTER CHOSE SCISSORS...YOU WIN THIS ROUND")
                user_score +=1;
            
            break;
            case  (comp_choice == "paper"):
                console.log("COMPUTER CHOSE PAPER ...YOU LOSE THIS ROUND")
                comp_score +=1;
            break;
        default:
            console.log("YOU BOTH CHOSE..TIE");
    }

    switch (user_choice=="paper") {
        case (comp_choice == "rock"):
            console.log("COMPUTER CHOSE SCISSORS...YOU WIN THIS ROUND")
            user_score +=1;
        
        break;
        case  (comp_choice == "scissors"):
            console.log("COMPUTER CHOSE PAPER ...YOU LOSE THIS ROUND")
            comp_score +=1;
        break;
    default:
        console.log("YOU BOTH CHOSE..TIE");
}

    switch (user_choice=="scissors") {
        case (comp_choice == "paper"):
            console.log("COMPUTER CHOSE SCISSORS...YOU WIN THIS ROUND")
            user_score +=1;
        
        break;
        case  (comp_choice == "rock"):
            console.log("COMPUTER CHOSE PAPER ...YOU LOSE THIS ROUND")
            comp_score +=1;
        break;
    default:
        console.log("YOU BOTH CHOSE..TIE");
    }


}

function play_round(){
switch (prompt("rock paper or scissors").toLowerCase()) {
    case "rock":
        rps("rock")

        break;
    case "paper":
        rps("paper")


        break;
    case "scissor":
        rps("scissors")



        break;
    default:
        console.log("you entered the wrong statement")
        break;
}}


function play_game(){
    if (count=0,count<5,count++) {
        play_round();
    }
    if (user_score > comp_score) {
        console.log("YOU WIN")
    }else if (user_score < comp_score) {
        console.log("YOU LOSE")}
    else
        console.log("TIE")
}

play_game();