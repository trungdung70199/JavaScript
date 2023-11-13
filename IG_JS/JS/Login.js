function auth() {
    var email = document.getElementById('email')[0].value;
    var password = document.getElementById('password')[0].value;

    console.log(email);
    console.log(password);
    if (email == "" | password == "") {
        document.getElementById('error-message').innerHTML = "Input email and password"
        return false;
    } else {
        // 
        return true;
    }
}