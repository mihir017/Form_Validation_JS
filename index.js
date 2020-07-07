const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone_no = document.getElementById('phoneno');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phone_noValue = phone_no.value.trim();
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();

    const userRegEx = /^[a-zA-Z]([a-zA-Z0-9\_\*\-]{1,9})$/g;
    const emailRegEx = /^([a-zA-z0-9\.\_]+)@([a-zA-Z0-9]+).([A-Za-z]{1,8})([\.a-z]{1,3})$/g;
    const numberRegEx = /^([0-9]{10})$/g;
    const passRegEx = /([a-zA-Z0-9!@#$%^&*]{6,12})$/g;
    // console.log(userRegEx.test(usernameValue));
    if (userRegEx.test(usernameValue)) {
        setSuccessFor(username);
        console.log('submit');
    }else {
        console.log('sf');
        setErrorFor(username, "UserName Cannot be blank OR start with character");
        // return false;
    }
    if (emailRegEx.test(emailValue)) {
        setSuccessFor(email);
        console.log('submit');
    }else {
        console.log('sf');
        setErrorFor(email, "Write Proper Email");
        // return false;
    }
    if (numberRegEx.test(phone_noValue)) {
        setSuccessFor(phone_no);
        console.log('submit');
    }else {
        console.log('sf');
        setErrorFor(phone_no, "Enter must be 10 number");
        // return false;
    }
    if (passRegEx.test(passwordValue)) {
        setSuccessFor(password);
        console.log('submit');
    }else {
        console.log('sf');
        setErrorFor(password, "Password must be 6 character");
        // return false;
    }
    if (passwordValue == passwordValue2) {
        setSuccessFor(password2);
        console.log('submit');
    }else {
        console.log('sf');
        setErrorFor(password2, "Password does not match");
        // return false;
    }
});

function setErrorFor(input, msg) {
    const formh = input.parentElement;
    const small = formh.querySelector('small');
    small.innerText = msg;
    formh.classList.add('error');
    formh.classList.remove('success');
    return false;
    // e.preventDefault();
}
function setSuccessFor(input) {
    const formh = input.parentElement;
    console.log(formh);
    formh.classList.add('success');
    formh.classList.remove('error');
}