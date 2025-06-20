/*
Name: Dylan Eng 
Datre Created: 06/12/2025
Date Last Edited: 06/20/2025
Version 1.1
Description: Homework 2 JavaScript File 
*/
//dynamic date js code
const d = new Date();
let text= d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function() {output.innerHTML = this.value;};

// Function to validate the Date of Birth (DOB)
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date of birth cannot be in the future.";
        dob.value = "";
        return false; 
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = "Date of birth cannot be more than 120 years ago.";
        dob.value = "";
        return false; 
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// SSN validation function 
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    // regex for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN in the format XXX-XX-XXXX.";
        return false; 
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

function validateAddress1() {
    var ad1 = doucument.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = 
        "Please enter something for Address 1";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// Zip Code Validation JS code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); //removes any non-digit characters and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5); //removes all digits after the first 5 digits
    } 

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

// Email Validation JS code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email =="") {
        document.getElementById("email-error").innerHTML =
        "Email can't be blank";
        return false;
    } else if (!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = 
        "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }

}

function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g, ''); // Remove non-digit characters

    if (phone.length == 0) {
        document.getElementById("phone-error").innerHTML = "Phone Number cannot be left blank"
        return false;
    } 

    const formattedPhone = phone.slice(0, 3) + "-" + phone.slice(3, 6) + "-" + phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true;
}

// User ID Validation JS code
function validateUid() {
    uid = document.getElementById("uid").value.toLowerCase();
    document.getElementById("uid").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }

    // Checks that user ID does not start with a number
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }
    // Checks that user ID contains only of letters, numbers, or underscores
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uid.length < 5) {
        document.getElementById("uid-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uid.length > 30) {
        document.getElementById("uid-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uid-error").innerHTML = "";
        return true;
    }
}

function validatePword() {
   const pword = document.getElementById("pword").value;
    const uid = document.getElementById("uid").value;

    const errorMessage = [];
   
    
    // Checks for lowercase
    if (!pword.match(/[a-z]/)) 
        errorMessage.push("Enter at least one lowercase letter");

    // Checks for uppercase
    if (!pword.match(/[A-Z]/)) 
        errorMessage.push("Enter at least one uppercase letter");

    // Checks for numbers
    if (!pword.match(/[0-9]/)) 
        errorMessage.push("Enter at least one number");

    // Checks for special characters 
    if (!pword.match(/[!@#$%&*\-_\.+()]/)) 
        errorMessage.push("Enter at least one special character");

    //check for username not in password
    if (pword == uid || pword.includes(uid)) 
        errorMessage.push("Password cannot be the same as User ID or contain it");
    
    // Displays error messages
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");

    return true;
}

// Function to confirm that the password and confirm password fields match
function confirmPassword() {
     pword1 = document.getElementById("pword").value;
     pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

// Review Input JS code
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                        formoutput = "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput = formoutput + "<tr> <td align='right'" + formcontent.elements[i].name + "</td>";
                        formoutput = "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><Td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput; 
    }
}

// remove user input 
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

