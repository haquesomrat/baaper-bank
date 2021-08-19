document.getElementById('login-submit').addEventListener('click', function () {
    //get user mail
    const emailField = document.getElementById('user-email');
    const userMail = emailField.value;
    // console.log(userMail);
    //get user password
    const userField = document.getElementById('user-password');
    const userPassword = userField.value;
    // console.log(userPassword); 

    //check email and password
    if (userMail == 'ihsomrat.official@gmail.com' && userPassword == '82862341') {
        window.location.href = 'banking.html';
    }
});