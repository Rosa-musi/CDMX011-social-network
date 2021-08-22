/* eslint-disable indent */
// aqui exportaras las funciones que necesites
export const authentification = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            return 'exitoso';
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
            return errorMessage;
        });
}