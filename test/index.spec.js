/* eslint-disable arrow-body-style */
import MockFirebase from '../_mocks_/firebase-mock.js';
import { savePosts } from '../src/lib/firebase.js';

global.firebase = MockFirebase;

describe('addPost', () => {
  it('Could add a post', () => {
    return savePosts(
      'hola',
      3,
      'review',
      'prueba@prueba.com',
      'Fri Sep 10 2021',
    ).then((data) => {
      expect(data).toBe();
    });
  });
});

global.firebase = {
  initializeApp: () => {},
  auth: () => {},
};

// /**
//  * @jest-enviroment jsdom
//  */
// import './globals/firebase.js';
// import { onNavigate } from '../src/router/router.js';
// import { Login } from '../src/components/Login.js'
// import { it } from 'jest-circus';
// import { labelToName } from 'whatwg-encoding';:

// const delay = (timeInMs = 100) => new Promise((resolve) => setTimeout(resolve, timeInMs));

// describe('Login', () => {
//     document.body.innerHTML = '<div id= "root"></div';
//     const rootDiv = document.getElementById('root');
//     const fillOutAndSubmitForm = (email, password) => {
//         document.getElementById('email').value = email;
//         document.getElementById('password').value = password;
//         document.getElementById('btnLogin').click();
//     };

//     it('renderiza', () => {
//         onNavigate('/home');

//         expect(rootDiv.innerHTML).toMatchSnapshot();
//     });
//     it('successful login', async() => {
//         const email = 'ana@labo.com';
//         const password = '123456';
//         const uid = 'u7aBRSmc4kUqa74Wn9x9UAGwtPD2';
//     })
// });
