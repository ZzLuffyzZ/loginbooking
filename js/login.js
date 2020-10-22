const loginBox = document.getElementById("login");
const regBox = document.getElementById("register");
const forgetBox = document.getElementById("forgot");
const loginTab = document.getElementById("lt");
const regTab = document.getElementById("rt");
const emailInput = document.getElementById("re");
const passwordInput = document.getElementById("rp");
const passwordRetypeInput = document.getElementById("rrp");
const usernameInput = document.getElementById("un");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");

function register() {
    if (emailInput.value == "") {
        alert("Email required.");
        return;
    } else if (passwordInput.value == "") {
        alert("Password required.");
        return;
    } else if (passwordRetypeInput.value == "") {
        alert("Password required.");
        return;
    } else if (passwordInput.value != passwordRetypeInput.value) {
        alert("Password don't match retype your Password.");
        return;
    } else if (usernameInput.value == "") {
        alert("User name required.");
        return;
    } else if (phoneInput.value == "") {
        alert("Phone required.");
        return;
    } else {
        for (let i = 0; i < listUser.length; i++) {
            if (listUser[i].user === usernameInput.value) {
                alert("Account already exists");
                return;
            }
            if (listUser[i].email === emailInput.value) {
                alert(email + " is already register.");
                return;
            }
        }
    }

    const newUser = {
        id: listUser.length + 1,
        email: emailInput.value,
        user: usernameInput.value,
        pass: passwordInput.value,
        address: addressInput.value,
        phone: phoneInput.value,
        role: "user",
    };
    listUser.push(newUser);
    alert(emailInput.value + "  Thanks for registration. \nTry to login Now");
}

function login() {
    const email = document.getElementById("se").value;
    const password = document.getElementById("sp").value;

    if (!email || !password) {
        alert("Require input");
    }

    else if( listUser[i].email != email){
        alert ("Email does not exist");
    }
    
    for (const user of listUser) {
        if (user.email === email && user.pass === password) {
            if (user.role === "hotel") {
                alert("Hello hotel ");
            } else {
                alert("Hello user");
            }
            break;
        }
        else{
            alert("Password does not match");
        }
    }
}

function forgot() {
    let email = document.getElementById("fe").value;
    for (const user of listUser) {
        if (email === "") {
            alert("Email required.");
            return;
        }
        if (user.email === email) {
            alert("email is send to your email check it in 24hr. \n Thanks");
            return;
        }
        alert("Email does not exist.");
        return;
    }
