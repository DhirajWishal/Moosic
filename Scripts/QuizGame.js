
var quizdone=true; 


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

document.getElementById("submit").addEventListener("click", QuizResults); // event listener when submit button selected QuizResults() will run


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
            quizdone = false;
            return false;
        }
        else{
            quizdone= true;
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
    var qright=[]; //
    var qwrong =[];
    var results = document.getElementById("results");
    var form = document.getElementById("quizform");


    for(i=0;i< noOfQuestions;i++){
        if (userSelection[i] == answers[i]){
            userScore+=2;
            qright[i] = i+1;
            

        }
        else{
            userScore -= 1;
            qwrong[i] = i + 1;


        }
    }
    if (quizdone == true){
        form.style.display ='none';

        if (qright[0] == 1){
            results.innerHTML += "<h2> You got question " + qright[0] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[0] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[1] == 2){
            results.innerHTML += "<h2> You got question " + qright[1] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[1] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[2] == 3){
            results.innerHTML += "<h2> You got question " + qright[2] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[2] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[3] == 4){
            results.innerHTML += "<h2> You got question " + qright[3] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[3] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[4] == 5){
            results.innerHTML += "<h2> You got question " + qright[4] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[4] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[5] == 6){
            results.innerHTML += "<h2> You got question " + qright[5] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[5] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[6] == 7){
            results.innerHTML += "<h2> You got question " + qright[6] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[6] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[7] == 8){
            results.innerHTML += "<h2> You got question " + qright[7] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[7] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[8] == 9){
            results.innerHTML += "<h2> You got question " + qright[8] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[8] + " wrong! Try Again! </h2> <br>";
        }

        if (qright[9] == 10){
            results.innerHTML += "<h2> You got question " + qright[9] + " correct! </h2> <br>";  
            
        }
        else{
            results.innerHTML += "<h2> You got question " + qwrong[9] + " wrong! Try Again! </h2> <br>";
        }

    } 

    
        
        
        
    
    
    var result = document.getElementById("result");
    var change = document.getElementsByTagName("body")[0];
    
    if(userScore > 15){
        result.innerHTML = "<h2> You scored <span id='good'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> Good Job!!</h2>";
        change.style.backgroundImage = "linear-gradient(rgba(18, 65, 4, 0.7),rgba(4, 82, 27, 0.7)),url('../Assets/Backdrop1.jpg')";
        

    }
    else if (userScore > 7){
        result.innerHTML = "<h2> You only scored <span id='okay'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> You could do better so try again!</h2>";
        change.style.backgroundImage = "linear-gradient(rgba(155, 59, 3, 0.7),rgba(141, 56, 0, 0.7)),url('../Assets/Backdrop1.jpg')";
    }
        
    else{
        result.innerHTML = "<h2> You only scored <span id='bad'>" + userScore + "</span> out of <span>" + (noOfQuestions*2) + "</span> Try again!</h2>";
        change.style.backgroundImage = "linear-gradient(rgba(112, 12, 12, 0.7),rgba(121, 9, 9, 0.7)),url('../Assets/Backdrop1.jpg')";
        
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
   
    
function resetForm(){
    location.reload();
}

