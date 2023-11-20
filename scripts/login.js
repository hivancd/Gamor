

function store() {
    const username = document.getElementById("user_name").value;
    const pw = document.getElementById("pw").value;
    localStorage.setItem(username, pw);
    alert("Account created succesfully");
}

function check() {
    const username = document.getElementById("user_name").value;
    const pw = document.getElementById("pw").value;
    const pwans = localStorage.getItem(username);
    if (pwans == pw) {
        alert("Succesfully logged in");
    }
    else {
        alert("Wrong username or password");
    }
}