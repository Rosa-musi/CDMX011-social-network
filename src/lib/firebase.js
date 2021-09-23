/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../router/router.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDU6ngi2asLmB3Sr3PJb_yKGfBbXJ1Gc_g',
  authDomain: 'lovebook-9d30e.firebaseapp.com',
  projectId: 'lovebook-9d30e',
  storageBucket: 'lovebook-9d30e.appspot.com',
  messagingSenderId: '35675623670',
  appId: '1:35675623670:web:f437b6e916a0634b0bdcd7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Colocando el metodo de firebase en una constante.
// const auth = firebase.auth();
// Initialize Firestore
// const fireSt = firebase.firestore();

// Metodo que me permite autenticar al  usuario con usuario y contraseña
export const register = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

// Metodo que me permite acceder a mi cuenta con usuario y contraseña
export const login = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

// Metodo para obtener al usuario que accedio

export const getUser = () => firebase.auth().currentUser;

// Metodo para hacer que un usuario salga de la sesión
export const signOut = () => firebase.auth().signOut();

// Metodo que indica si el usuario tiene la sesión activa

export const activeSession = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (window.location.origin) {
        onNavigate('/home');
      }
    } else {
      onNavigate('/');
    }
  });
};

// Metodo para loguearse con Google

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
// // //Método para actualizar informacion basica del perfil updateProfile

// // getUser.updateProfile({
// //     // displayName: "Jane Q. User",
// //     // photoURL: "https://example.com/jane-q-user/profile.jpg"
// // })

// // //Metodo para enviar un mensaje de verificación al usuario

// // export const sendEmail = () => auth
// //     .sendEmailVerification()

// Firestore

// set collection
export const savePosts = (title, rating, review, user, date) => firebase.firestore().collection('posts').doc().set({
  title,
  rating,
  review,
  user,
  date,
  likes: [],
});

// Get the post as they are entered

export const onGetPosts = (callback) => firebase.firestore().collection('posts').onSnapshot(callback);

// Delete task

export const deletePost = (id) => firebase.firestore().collection('posts').doc(id).delete();

// Get task

export const getPost = (id) => firebase.firestore().collection('posts').doc(id).get();

// Update post
export const updatePost = (id, updatedTask) => firebase.firestore().collection('posts').doc(id).update(updatedTask);

export const likePost = (postId) => {
  const email = firebase.auth().currentUser.email;
  return firebase.firestore()
    .collection('posts')
    .doc(postId)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion(email),
    });
};

export const unlikePost = (postId) => {
  const email = firebase.auth().currentUser.email;
  return firebase.firestore()
    .collection('posts')
    .doc(postId)
    .update({
      likes: firebase.firestore.FieldValue.arrayRemove(email),
    });
};
