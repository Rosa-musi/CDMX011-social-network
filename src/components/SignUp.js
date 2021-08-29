import { authentification } from "../lib/firebase.js";

export const SignUp = () => {
    const view = `
        <div class="acount-header">
            <img src="../img/logoFormLoveBook.png" class="acount-logo" alt="LoveBook logo">
        </div>
        <div class="log-content">
            <form action="" id="signupForm" class="form">
                <label for="signupUserName">Username</label>
                <input type="text" id="signupUserName">
                <label for="signupEmail">Email</label>
                <input type="email" id="signupEmail" required>
                <label for="signupPassword">Password</label>
                <input type="password" id="signupPassword" required>
                <label for="signupPassword2">Confirm your password</label>
                <input type="password" id="signupPassword2" required>
                <p id="signupMesseges"></p>
                <button type="submit" id="btnSendSignUp">Sign Up</button>
            </form>
        </div>
        `

    const loginContainer = document.createElement('div')
    loginContainer.setAttribute("class", "acount")

    loginContainer.innerHTML = view;

    const btnSendSignUp = loginContainer.querySelector('#btnSendSignUp');

     btnSendSignUp.addEventListener('click', async (e) => {
        e.preventDefault();
        const signUpEmail = loginContainer.querySelector('#signupEmail').value;
        const signUpPassword = loginContainer.querySelector('#signupPassword').value;
        const signUpPassword2 = loginContainer.querySelector('#signupPassword').value;
        const signupMesseges = loginContainer.querySelector('#btnSendSignUp');
        if (signUpPassword === signUpPassword2){
            authentification(signUpEmail, signUpPassword)
        } else {
            signupMesseges.innerHTML = `Password doesn't match`;
        }
    });
        
    
    return loginContainer;
};