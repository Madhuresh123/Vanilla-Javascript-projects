
function setError(id, error){
    //handle input errors
    const element = document.getElementById(id);
    const showError = element.getElementsByClassName("form_error")[0];
    showError.innerHTML = error;

}

function validate_Form(){
    // handle form validation


   let submiteFrom = true;

    const username = document.forms["myForm"]["username"].value;
    const password = document.forms["myForm"]["password"].value;
    const confirm_password = document.forms["myForm"]["confirm_password"].value;



    // if usename length is smaller than 5 character form will not submite.
    if(username.length < 5){
        setError("username", "*username is too short (must be greater than 5 character)");
        submiteFrom = false;
    }

    if(password.length < 8){
        setError("password", "*password is too short (must be greater than 8 character)");
        submiteFrom = false;
    }

    if(password != confirm_password ){
        setError("confirm_password", "*password is not same");
        submiteFrom = false;
    }

    return submiteFrom; 




}