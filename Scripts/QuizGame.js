
var quizdone=true; 


/**
 * Function to obtain radio values(user's selected values) and display the results 
 */
 function QuizResults(){
    var noOfQuestions = 10; //total number of questions  
    var userScore = 0; //initialising user's score
    /**
     * creating an array to store user's selected values
     */
    var userSelection=[ document.forms["quiz"]["question1"].value, 
    document.forms["quiz"]["question2"].value, document.forms["quiz"]["question3"].value, document.forms["quiz"]["question4"].value, 
    document.forms["quiz"]["question5"].value, document.forms["quiz"]["question6"].value, document.forms["quiz"]["question7"].value, 
    document.forms["quiz"]["question8"].value, document.forms["quiz"]["question9"].value, document.forms["quiz"]["question10"].value ];

    formValidation(userSelection, noOfQuestions);
    evaluateAnswers(userSelection, noOfQuestions, userScore);

    return false;
}

/**
 * event listener when submit button selected QuizResults() will run
 */
document.getElementById("submit").addEventListener("click", QuizResults); 
quizdone=true;

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
    /**
     * creating an array to store the correct answers based by value
     */
    var answers=['A', 'D', 'B', 'C', 'A', 'A', 'B', 'D', 'C', 'A'];
    var qperformance=[]; //
    var qwrong =[];
    var results = document.getElementById("results");
    var form = document.getElementById("quizform");
    /**
     * Recording user's score and tracking question performance(correct/inncorect)
     */
    for(i=0;i< noOfQuestions;i++){
        if (userSelection[i] == answers[i]){
            userScore+=2;
            qperformance[i] = "correct";
            

        }
        else{
            userScore -= 1;
            qperformance[i] = "incorrect";

        }
    }
    /**
     * stops timer if quiz submitted, question performance and time displayed.
     */
    if (quizdone == true){
        clearInterval(countdownTimer);
        form.style.display ='none';
        var timetaken = 60 - timeInSec;
        console.log(timetaken);

        for(i=0;i<qperformance.length;i++){
            if (qperformance[i] == "correct"){
                results.innerHTML +=  "<h2> You got question " + (i+1) + " correct! </h2> <br>"
            }
            else{
                results.innerHTML +=  "<h2> You got question " + (i+1) + " incorrect! Try Again!! </h2> <br>"
            }
        }
        results.innerHTML += "<h2> Your time taken to complete the quiz was: " + timetaken + " seconds</h2> <br>";
        results.innerHTML += "<input type='button' value='Retry' onclick='resetForm()'></input>"
    }    
    /**
     * displaying a score and change of background based on result.
     */
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
/**
 * setting the timer
 */
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
    /**
     * used Math.floor - to avoid rounding error
     */
    const minute = Math.floor(seconds/60); 
    const second = Math.floor(seconds % 60);
    timer.innerHTML=`${minute<10 ? '0': ''}${minute}:${second<10 ? '0':''}${second}`
}
   
/**
 * Fucntion to reset the form
 */
function resetForm(){
    location.reload();
}

