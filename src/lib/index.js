/* eslint-disable indent */
// aqui exportaras las funciones que necesites

export const authentification = (email, password) => {
    auth
        .createUserWithEmailAndPassword(email, password)
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
            return errorMessage;
        });
}

export const login = (email, password) => {
    auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(1, user, 2, 'Usuario Logueado');
            return 'exitoso';
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
            return errorMessage;
        });
}

