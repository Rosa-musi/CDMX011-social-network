import { onNavigate } from "../router/router.js"
import { Navbar } from "./Navbar.js"

export const ProfileInfo = () => {
    const viewInfo = `
    <div class="login-user">
    <h3>Edit Profile</h3>
    <form action="" id="profileForm" class="form">
        <label for="Username">Username</label>
        <input type="text" id="usernameProfile">
        <label for="profilePhoto">Add Photo</label>
        <input type="url" id="profilePhoto">
        <button id="btnProfile" type="submit">Save</button>
        </div>
    </form>
</div>
    `

    const profileInfoContainer = document.createElement('div')

    profileInfoContainer.appendChild(Navbar())


    const contentProfile = document.createElement('div')
    contentProfile.setAttribute("class", "profile-content")
    contentProfile.innerHTML = viewInfo;

    profileInfoContainer.appendChild(contentProfile);

    profileInfoContainer.querySelector('#navHome').setAttribute("class", "display-none")

    const btnSave = contentProfile.querySelector('#btnProfile');

    btnSave.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/profile');
    });


    return profileInfoContainer;
}