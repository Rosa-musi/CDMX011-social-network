import { Home } from "../components/Home.js";
import { Login } from "../components/Login.js";
import { Profile } from "../components/Profile.js";
import { ProfileInfo } from "../components/ProfileInfo.js";
import { SignUp } from "../components/SignUp.js";
import { logedUser } from "../lib/firebase.js"


export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/home': Home,
    '/profile': Profile,
    '/profileInfo': ProfileInfo,
};

const rootDiv = document.getElementById('root')

export const onNavigate = (pathname) => {
    
    window.history.pushState({},
        pathname,
        window.location.origin + pathname,
    );
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());
};

window.onpopstate = () => {
    
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.appendChild(routes[window.location.pathname]());
    logedUser()
};