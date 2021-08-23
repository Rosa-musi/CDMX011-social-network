import { Login } from './views/Login.js';
import { SignUp } from './views/SignUp.js';
import { Profile } from './views/Profile.js';
import { Home } from './views/Home.js';

export const routes = {
    '/': Login,
    '/signUp': SignUp,
    '/profile': Profile,
    '/home': Home,
};

const main = document.getElementById('templates');
export const onNavigate = (pathname) => {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname,
    );
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    main.innerHTML = (routes[pathname]());
};
console.log(10, routes)
if (routes.hasOwnProperty(window.location.pathname)) {
    const component = routes[window.location.pathname];
    window.onpopstate = () => {
        while (main.firstChild) {
            main.removeChild(rootDiv.firstChild);
        }
        main.innerHTML = (routes[window.location.pathname]());

    };
    main.innerHTML = (component());
}