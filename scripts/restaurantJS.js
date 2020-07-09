/*
Creator: Ryan Kramer
Date created: 7/8/2020
Date last modified: 7/9/2020
*/

function clearErrors() {
    var errorFields = document.getElementsByClassName("is-invalid");
    for (counter = 0; counter < errorFields.length; counter++) {
        errorFields[counter].className = "form-control"
    }
}

function validateForm() {
    document.getElementById("confirmValidation").innerHTML = ""
    clearErrors();

    var personName = document.forms["contactForm"]["personName"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var reason = document.forms["contactForm"]["reason"].value;

    if (personName == "") {
        alert("Please enter your name.");
        document.forms["contactForm"]["personName"].className = "form-control is-invalid"
        document.forms["contactForm"]["personName"].focus();
        return false;
    }

    if (email == "") {
        alert("Please enter your Email.");
        document.forms["contactForm"]["email"].className = "form-control is-invalid"
        document.forms["contactForm"]["email"].focus();
        return false;
    }

    if (phone == "") {
        alert("Please enter your Phone Number.");
        document.forms["contactForm"]["phone"].className = "form-control is-invalid"
        document.forms["contactForm"]["phone"].focus();
        return false;
    }

    if (reason == "") {
        alert("Please select a reason for your inquiry.");
        document.forms["contactForm"]["reason"].className = "form-control is-invalid"
        document.forms["contactForm"]["reason"].focus();
        return false;
    }

    document.getElementById("confirmValidation").innerHTML = "The information is valid!"
    return false;
}
