/**
 * @jest-environment jsdom
 */
import './globals/firebasetest.js';
import { Login } from '../src/components/Login.js';
import { SignUp } from '../src/components/SignUp.js';
import { Post } from '../src/components/Post/PostForm';
import { Navbar } from '../src/components/Navbar';
import { Publication } from '../src/components/Publication';
import { render } from '../src/lib/render.js';

describe('login', () => {
  document.body.innerHTML = '<div id="root"></div>';
  it('should render', () => {
    const component = Login();
    const rootDiv = document.getElementById('root');
    render(rootDiv, component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  it('should log in user when clicked', () => {
    const mockLogIn = jest.fn();
    mockLogIn.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      signInWithEmailAndPassword: mockLogIn,
    }));
    const component = Login();
    const rootDiv = document.getElementById('root');
    render(rootDiv, component);

    const email = 'prueba@prueba.com';
    const password = '123456';

    document.getElementById('loginEmail').value = email;
    document.getElementById('loginPassword').value = password;

    document.getElementById('btnLogin').click();

    expect(mockLogIn).toHaveBeenCalledWith(email, password);
  });
  it('Expected event when clicking the login button', () => {
    const btnLogIn = document.getElementById('btnLogin');
    btnLogIn.click();
    expect(btnLogIn.outerHTML).toBe('<button type="submit" id="btnLogin">Login</button>');
  });
});

describe('signUp', () => {
  document.body.innerHTML = '<div id="root"></div>';
  it('should render', () => {
    const component = SignUp();
    const rootDiv = document.getElementById('root');
    render(rootDiv, component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  it('should resgister an user when clicked', () => {
    const mockSignUp = jest.fn();
    mockSignUp.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      createUserWithEmailAndPassword: mockSignUp,
    }));

    const rootDiv = document.getElementById('root');
    const component = SignUp();
    render(rootDiv, component);

    const email = 'prueba@prueba.com';
    const password = '123456';
    const passwordDos = '123456';

    document.querySelector('#signupEmail').value = email;
    document.querySelector('#signupPassword').value = password;
    document.querySelector('#signupPassword2').value = passwordDos;

    const btnSignUp = document.getElementById('btnSendSignUp');
    btnSignUp.click();
    expect(mockSignUp).toHaveBeenCalledWith(email, password);
  });
  it('Expected event when clicking the signup button', () => {
    const btnSignUp = document.getElementById('btnSendSignUp');
    btnSignUp.click();
    expect(btnSignUp.outerHTML).toBe('<button type="submit" id="btnSendSignUp">Sign Up</button>');
  });
});

describe('post form', () => {
  document.body.innerHTML = '<div id="root"></div>';
  it('should render post form', () => {
    const component = Post();
    const rootDiv = document.getElementById('root');
    render(rootDiv, component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  it('Expected event when clicking the signup button', () => {
    const btnAddPost = document.getElementById('btnAddPost');
    btnAddPost.click();
    expect(btnAddPost.outerHTML).toBe('<button class="btnPost" id="btnAddPost" type="submit"><img class="icon-plus" src="../img/plusazul.png">Add Post</button>');
  });
});

describe('home', () => {
  document.body.innerHTML = '<div id="root"></div>';
  it('should render nav bar', () => {
    const component = Navbar();
    const rootDiv = document.getElementById('root');
    render(rootDiv, component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  it('should render Publication', () => {
    const component = Publication();
    const rootDiv = document.getElementById('root');
    render(rootDiv, component);
    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
