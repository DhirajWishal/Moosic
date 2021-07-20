
/**
 * must add reset btn functionality
 * @returns 
 */



/**
 * Function to obtain radio values(user's selected values) and display the results 
 */

 function QuizResults(){
    var noOfQuestions = 10; //total number of questions  
    var userScore = 0; //initialising user's score


    //creating an array to store users selected values
    var userSelection=[ document.forms["quiz"]["question1"].value, 
    document.forms["quiz"]["question2"].value, document.forms["quiz"]["question3"].value, document.forms["quiz"]["question4"].value, 
    document.forms["quiz"]["question5"].value, document.forms["quiz"]["question6"].value, document.forms["quiz"]["question7"].value, 
    document.forms["quiz"]["question8"].value, document.forms["quiz"]["question9"].value, document.forms["quiz"]["question10"].value ];

    formValidation(userSelection, noOfQuestions);
    evaluateAnswers(userSelection, noOfQuestions, userScore);

    return false;
}

/**
 * Validation - to ensure user selects an answer for every question
 * @param {*} userSelection 
 * @param {*} noOfQuestions 
 * @returns 
 */
function formValidation(userSelection , noOfQuestions){
    for(i=0;i< noOfQuestions;i++){
        if (userSelection[i] == null || userSelection[i] == ""){
            alert("You missed Question Number " + (i+1) + " Please select an answer!!")
            return false;
        }
    }
    return true;  
}

/**
 * Evaluating the user selections and dertermining the result.
 * @param {*} userSelection 
 * @param {*} noOfQuestions 
 * @param {*} userScore 
 */

function  evaluateAnswers(userSelection, noOfQuestions, userScore){
    //creating an array to store the correct answers based by value
    var answers=['A', 'D', 'B', 'C', 'A', 'A', 'B', 'D', 'C', 'A'];

    for(i=0;i< noOfQuestions;i++){
        if (userSelection[i] == answers[i]){
            userScore+=2;
        }
        else{
            userScore -= 1;
        }
    }
    
    var result = document.getElementById("result");
    var change = document.getElementsByTagName("body")[0];
    
    if(userScore > 15){
        result.innerHTML = "<h2> You scored <span id='good'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> Good Job!!</h2>";
        change.style.backgroundImage = "none";
        change.style.backgroundColor= "darkgreen";

    }
    else if (userScore > 7){
        result.innerHTML = "<h2> You only scored <span id='okay'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> You could do better so try again!</h2>";
        change.style.backgroundImage = "none";
        change.style.backgroundColor= "orange";
    }
        
    else{
        result.innerHTML = "<h2> You only scored <span id='bad'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> Try again!</h2>";
        change.style.backgroundImage = "none";
        change.style.backgroundColor= "red";
    }
    
}    


const timer = document.querySelector('h2');
let timeInSec = 60;
document.addEventListener("click", showTime(timeInSec));

showTime(timeInSec);


const countdownTimer = setInterval(()=>{
    timeInSec-=1;
    showTime(timeInSec);
    if (timeInSec ==0){
        clearInterval(countdownTimer);
        QuizResults();
    }

},1000)

/**
 * Displaying time correctly on page 
 * @param {*} seconds 
 */

function showTime(seconds){
    // used Math.floor - to avoid rounding error
    const minute = Math.floor(seconds/60); 
    const second = Math.floor(seconds % 60);
    timer.innerHTML=`${minute<10 ? '0': ''}${minute}:${second<10 ? '0':''}${second}`
}
   
    


