


import { SignUp } from "./SignUp.js";
import { onNavigate } from "./components/Router.js"


export const login = () => {
   
        const view = `
  <div class="acount">
    <div class="acount-header">
    <img src="../img/logoFormLoveBook.png" class="acount-logo" alt="LoveBook logo">
  </div>
  <div class="log-content">
    <div class="login-user">
        <form action="" id="login-form" class="form">
            <label for="login-email">Email</label>
            <input type="email" id="login-email" required>
            <label for="login-password">Password</label>
            <input type="password" id="login-password" required>
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
  </div>
  </div>`

  const HomeDiv = document.createElement('div')
  HomeDiv.innerHTML = view

  return HomeDiv

    
/*     const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('signup');
    
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home');
        home.template();
    }); 


    btnSignUp.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/signUp');
        signUp.template();
    });
 */
    
}
 
