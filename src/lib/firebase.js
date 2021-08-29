import { onNavigate } from "../router/router.js"; 



export const authentification = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        //console.log(user);

        onNavigate('/home')
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
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        return 'exitoso';
    }) 
    .catch((error) => {
        if(error.code == "auth/wrong-password"){
            console.log("wrong password")
            return "Wrong password"
        } else if (error.code == "auth/user-not-found") {
            console.log("this user doesn't exsit")
            return "This user doesn't exist"
        }
    })
}



export const logedUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            onNavigate('/home') //asignar window.location a '/' el path por defecto
        } else {
            onNavigate('/')
        }
    })    
}

export const logOutFn = () => {
    auth.signOut()
        .then(() => {
        console.log("sign out")
        onNavigate('/')
        })
        .catch((error) => { 
        console.log(error)
    });
}

