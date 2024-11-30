var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

var signUpArray = [];
if (localStorage.getItem("values") == null) {
    signUpArray = [];
} else {
    signUpArray = JSON.parse(localStorage.getItem('values'));
}

function noValue() {
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false;
    } else {
        return true;
    }
}

function signUp() {
    if (noValue() == false) {
        document.getElementById('x').innerHTML = '<p class="text-danger m-3">Please Enter a values<</p>';
        return false;
    }
    
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value
    };

    signUpArray.push(signUp);
    localStorage.setItem('values', JSON.stringify(signUpArray));

    document.getElementById('x').innerHTML = '<p class="text-success m-3">Registration successful!</p>';
}

// for login
function noValueLogin() {
    if (signinEmail.value == "" || signinPassword.value == "") {
        return false;
    } else {
        return true;
    }
}

function login() {
    if (noValueLogin() == false) {
        document.getElementById('False').innerHTML = '<p class="text-danger m-3">Please Enter a values</p>';
        return false;
    }
    var password = signinPassword.value;
    var email = signinEmail.value;
    var isValidUser = signUpArray.some(function(user) {
        return user.email === email && user.password === password;
    });

    if (isValidUser) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('False').innerHTML = '<p class="text-danger m-3">Invalid email or password</p>';
    }
}
