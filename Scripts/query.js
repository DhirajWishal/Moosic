
function viewquery(frm) {
    var fname = frm.firstname.value;
    var lname = frm.lastname.value;
    var mail = frm.email.value;
    var feedback = frm.feedback.value;
    var selector = document.queryform.selector;
    var x =document.getElementById('querypage');
    var filled = true;
    var valid = false;


    if (fname == "" && lname == "" && mail == "" && feedback == "") {
        alert("You have not entered any text!");
        filled = false;
    }
    else {

        if (fname == "") { alert("Please type in your first name!"); filled = false; }
        if (lname == "") { alert("Please type in your last name!"); filled = false; }
        if (mail == "") { alert("Please type in your mail!"); filled = false; }
        if (feedback == "") { alert("Please type in your query!"); filled = false; }
        for (var i = 0; i < selector.length; i++) {
            if (selector[i].checked) {
                valid = true;
                break;
            }
        }
        if (valid == false) { alert("Please select a proper query type"); filled = false; }

    }

    /*if(fname.length==1 || fname.length>30){
        alert("Enter a valid first name!");
        filled=false;
        frm.firstname.value="";
    }
    if(lname.length==1 || lname.length>30){
        alert("Enter a valid Last name!");
        filled=false;
        frm.lastname.value="";   
    }
    if(email.length<7){
        alert("Enter a valid Email Address!");
        filled=false;
        frm.email.value="";
    }
    if(feedback.length<11){
        alert("Please type in more details in your query!")
        filled=false;
        frm.feedback.value="";
    }*/

    if (filled == true) {
        x.style.display = 'none';
        document.getElementById('editquery').innerHTML = "<div class='querydetails'><fieldset><form action='mailto:fizzypop470@gmail.com' method='post' enctype='text/plain' ><h3>Are these details correct?</h3><p><br><br>Your first name: " + fname +
            "<br><br>Your last name: " + lname + "<br><br>Your Email Address :" + mail +
            "<br><br>Your query type: " + frm.selector.value + "<br><br>Your query: <div class='feedback'>" + feedback +
            "</div></p><button class='button2' onClick='editquery()' style='margin-left:600pt;'><b>Edit query</b></button> <input type='submit' value='Submit' class='button2' ></form></fieldset></div>";

    }
    /* */
   

}
function editquery() {

    var x = document.getElementById('querypage');
    console.log(x);
    x.style.display = 'block';
    document.getElementById('editquery').innerHTML = '';
}