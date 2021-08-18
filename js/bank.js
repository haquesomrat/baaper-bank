document.getElementById('login-submit').addEventListener('click', function(){
    //get user mail
    const emailField =    document.getElementById('user-email');
    const userMail = emailField.value;
    console.log(userMail);
    //get user password
    document.getElementByIdd('login-submit').addEventListener('click', function(){
        const userField = document.getElementById('user-password');
        const userPassword = userField.value;
        console.log(userPassword); 
    })
})