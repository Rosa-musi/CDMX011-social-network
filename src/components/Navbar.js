import { onNavigate } from "../router/router.js"
import { logOutFn } from "../lib/firebase.js"

export const Navbar = () => {
    const template =
        `
    <nav>
    <div class="logo-nav">
        <img class="logo-nav" src="../img/logo-nav2.png" alt="">
    </div>
    <div class="menu-nav">
        <ul>
            <li><a id="logout" href=""><img class="icon-nav" src="../img/icons8-salir-redondeado-64.png">Sign off</a></li>
            <li><a href="#" id="profilePerfil"><img class= "icon-nav" src="../img/iconsusuario.png">Profile</a></li>
        </ul>
    </div>
    </nav>
`
    const navBar = document.createElement('header')
    navBar.setAttribute("class", "header-div")
    navBar.innerHTML = template

    const profile = navBar.querySelector('#profilePerfil');
    const logout = navBar.querySelector('#logout');

    logout.addEventListener('click', async (e) => {
        e.preventDefault();
        await logOutFn()
    });

    profile.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/profile');
    });

    return navBar
}