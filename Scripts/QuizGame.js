
/**
 * Function to process user's answers and display the results 
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
 * Function to validate the form
 * @param userSelection 
 * @param noOfQuestions 
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
 * Function to Check Correct Answers
 * @param userSelection 
 * @param noOfQuestions 
 * @param userScore 
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
    if(userScore > 15){
        var result = document.getElementById("result");
        result.innerHTML = "<h2> You scored <span id='good'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> Good Job!!</h2>";
    }
    else if (userScore > 7){
        var result = document.getElementById("result");
        result.innerHTML = "<h2> You only scored <span id='okay'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> Try again!</h2>";

    }
    else{
        var result = document.getElementById("result");
        result.innerHTML = "<h2> You only scored <span id='bad'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> Try again!</h2>";
    }
   
    
}

