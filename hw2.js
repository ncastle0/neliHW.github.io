/*
Name: Yaneli Castillo
File: hw2.html
Date Created: 02-26-2025
Purpose: Patient Registration Form for Family Creek Clinic (MIS 3371 HW Assignment)
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

//validate DOB
function validateDob() {
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)){
        document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

//validate Ssn
function validateSsn(){
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN using a dash in between";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

//validate Zip Code
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zip-error").innerHTML = "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}
//validate email
var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateEmail() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("email-error");

    if (email == "") {
        message.innerText = "Email cannot be blank.";
        return false;
    } else if (!emailR.test(email)) {
        message.innerText = "Please enter a valid email address.";
        return false;
    } else {
        message.innerText = "Email is valid."
        return true;
    }
}

//validate User ID
function validateUsername() {
    username = document.getElementById("username").value.toLowerCase();
    document.getElementById("username").value = username;

    if(username.length == 0) {
        document.getElementById("username-error").innerHTML = "User ID can't be blank";
        return false;
    }

    if (!isNaN(username.charAt(0))) {
        document.getElementById("username-error").innerHTML = "User ID can't start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML = "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (username.length < 5) {
        document.getElementById("username-error").innerHTML = "User ID must be at least 5 characters";
        return false;
    } else if (username.length > 30) {
        document.getElementById("username-error").innerHTML = "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("username-error").innerHTML = "";
        return true;
    }
}

// validate Password
function validatePwd() {
    var username = document.getElementById("username").value;
    var pwd = document.getElementById("pwd").value;
    var errorMessage = [];

    if (!pwd.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if (!pwd.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if (!pwd.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }
    if (!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    if (pwd.includes(username) && username !== "") {
        errorMessage.push("Password can't contain user ID");
    }

    if (errorMessage.length > 0) {
        document.getElementById("password-error").innerHTML = errorMessage.join("<br>");
        return false;
    } else {
        document.getElementById("password-error").innerHTML = "";
        return true;
    }
}

function confirmPwd() {
    pwd1 = document.getElementById("pwd").value;
    pwd2 = document.getElementById("con_pwd").value;

    if (pwd1 !== pwd2) {
        document.getElementById("pwd2-error").innerHTML = "Passwords don't match";
        return false;
    } else {
        document.getElementById("pwd2-error").innerHTML = "Passwords match";
        return true;
    }
}

function reviewInput() {
    let formcontent = document.getElementById("review");
    let formoutput = "<table class='output'><th colspan='3'>Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

function getrangedata() {
    var slider = document.getElementById("scale");
    document.getElementById("rangedisplay").value = slider;
  }
