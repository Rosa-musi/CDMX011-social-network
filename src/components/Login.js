import { login } from "../lib/firebase.js";
import { onNavigate } from "../router/router.js";

export const Login = () => {
    const view = `
        <div class="acount-header">
            <img src="../img/logoFormLoveBook.png" class="acount-logo" alt="LoveBook logo">
        </div>
        <div class="log-content">
            <div class="login-user">
                <form action="" id="login-form" class="form">
                    <label for="login-email">Email</label>
                    <input type="email" id="loginEmail" required>
                    <label for="login-password">Password</label>
                    <input type="password" id="loginPassword" required>
                    <button type="submit" id="btnLogin">Login</button>
                </form>
            </div>
            <div class="division">
                <hr class="division-1">
                <p class="division-2">O</p>
                <hr class="division-3">
            </div>
            <div class="login-google">
                <img src="../img/icongoogle.png" alt="logo google" class="logo-google">
                <p>Login with google</p>
            </div>
            <div class="pieform">
                <p style="font-size: 12px;">You do not have an account</p>
                <button id="signup">Sign Up</button>
            </div>
        </div>`

    const loginContainer = document.createElement('div')
    loginContainer.setAttribute("class", "acount")

    loginContainer.innerHTML = view;

    const btnLogin = loginContainer.querySelector('#btnLogin');
    const btnSignUp = loginContainer.querySelector('#signup');

    btnLogin.addEventListener('click', async (e) => {
        e.preventDefault();
        const loginEmail = loginContainer.querySelector('#loginEmail').value;
        const loginPassword = loginContainer.querySelector('#loginPassword').value;
        console.log(loginEmail, loginPassword)
        await login(loginEmail, loginPassword)
    });

    btnSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/signUp');
    });

    return loginContainer
};