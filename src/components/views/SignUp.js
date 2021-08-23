export function SignUp() {
  return `
 <div class="account";   
 <div class="acount-header">
    <img src="../img/logoFormLoveBook.png" class="acount-logo" alt="LoveBook logo">
 </div>
<div class="log-content">
  <div class="login-user">
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
  </div> 
  `;
}
