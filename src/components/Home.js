import { login } from "../lib";
import { Profile } from "./views/Profile.";

export const home = {
    template: () => {
      const view = `
      <nav>
      <div class="logo-nav">
      <img class="logo-nav" src="../img/logo-nav2.png" alt="">
      </div>
      <div class="menu-nav">
      <ul>
        <li><a id="logout" href="/">Sign off</a></li>
        <li>
          <a href="/profileUser"><img src="../img/iconsusuario.png">Profile</a>
        </li>
      </ul>
      </div>
      <div class="post">
      <button id="post" type="submit">Add post</button> 
      </div>
      </nav>
      `
    }};

    document.querySelector('#root').innerHTML = view;

    const posts = document.getElementById('post');
    const logout = document.getElementById('logout');
    
    posts.addEventListener('click', (e) => {
        e.preventDefault();
        router.onNavigate('/post');
        Profile.template();
    }) 
      
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        router.onNavigate('/login');
        login.template();
    }) 