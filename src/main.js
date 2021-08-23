/* eslint-disable indent */
//import { authentification } from './lib/index.js';


import  login  from './components/Login.js';
import  signUp from './components/SignUp.js';
import  profile  from './components/Profile.js';
import  home  from './components/Home.js';

const rootDiv = document.getElementById('root');

const router = {
    '/login': login,
    '/signUp': signUp,
    '/profile': profile,
    '/home': home,
  };
  
  
  const component = router[window.location.pathname];
    

  export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
    );
  
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
  
    rootDiv.innerHTML(router[pathname]());
  };
  
  
  window.onpopstate = () => {
    while (rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
    }
    rootDiv.innerHTML(router[window.location.pathname]());
  };
  
  rootDiv.innerHTML = component();
  















  /*
const main = document.getElementById('root');
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


const main = document.getElementById('templates');
const header = document.getElementById('header');
const render = (pathname) => {
  // eslint-disable-next-line no-prototype-builtins
  if (!routes.hasOwnProperty(pathname)) {
    main.innerHTML = `<img src ="img/error404.png"/>`;
    return;
  }
  const component = routes[pathname];
  const pageActions = actions[pathname];
  main.innerHTML = component();
  pageActions.events();
};
//Se manda a llamar el template
render('/');
//Metodo para verificar usuario logueado
auth.onAuthStateChanged((user) => {
  if (user) {
    render('/home');
    main.innerHTML = 'posts';
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e) => {
      e.preventDefault();
      auth.signOut()
        .then(() => {
          console.log('sign out');
          header.innerHTML = '';
        })
        .catch((error) => { // An error happened.
        });
    });
  } else {
    //Se crea un evento para el botón de crear cuenta
    render('/');
    const createAccount = document.querySelector('#signup');
    createAccount.addEventListener('click', e => {
      e.preventDefault();
      render('/signUp');
      const signUpForm = document.querySelector('#signupForm');
      signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let email = document.querySelector('#signupEmail').value;
        let password = document.querySelector('#signupPassword').value;
        let confirmationPw = document.getElementById('signupPassword2').value;
        const signupMesseges = document.getElementById('signupMesseges');
        if (password === confirmationPw) {
          authentification(email, password);
        } else {
          signupMesseges.innerHTML = `Password doesn't match`;
        }
        console.log(password, email);
      });
    });
  }
});*/

//Eventos para poder hacer Login

// const loginForm = document.getElementById('login-form');
// const emailLogin = document.getElementById('login-email';)
// const passwordLogin = document.getElementById('login-password');

// loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     auth
//         .signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log(user);
//             return 'exitoso';
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             console.log(errorCode);
//             const errorMessage = error.message;
//             console.log(errorMessage);
//             return errorMessage;
//         });
// })
