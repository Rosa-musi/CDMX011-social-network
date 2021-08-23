import { home } from "./views/Home";

export const profile = {
    template: () => {
      const view = `<h5>Edit Profile</h5>
      <form action="" id="profileForm" class="form">
          <label for="Email">email</label>
          <input type="email" id="signupEmail" readonly>
          <label for="Username">Username</label>
          <input type="text" id="usernameProfile">
          <label for="profilePhoto">Add Photo</label>
          <input type="url" id="profilePhoto">
          <label for="profilePassword">Change password</label>
          <input type="password" id="profilePassword" required>
          <label for="profilePassword2">confirm your password</label>
          <input type="password" id="signupPassword2" required>
          <p id="signupMesseges"></p>
          <button id="btnProfile" type="submit">Save</button>
      </form>`
  }};
  
    const saveprofile = document.getElementById('btnProfile')
    saveprofile.addEventListener('click', () => {
        e.preventDefault();
        router.onNavigate('/home');
        home.template();
    });
