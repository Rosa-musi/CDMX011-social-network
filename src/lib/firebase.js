import { onNavigate } from "../router/router.js"; 



export const register = (email, password) => 
    auth.createUserWithEmailAndPassword(email, password)

export const login = (email, password) => 
    auth.signInWithEmailAndPassword(email, password)

export const logedUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if(window.location.origin){
                onNavigate("/home")
            } else {
                window.location
            }
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

const provider = new firebase.auth.GoogleAuthProvider(); //aquí se tiene que poner todo, no se puede usar  de auth que se hizo en el html
export const googleLogin = () => 
   auth.signInWithPopup(provider)                        //desde auth se usa el método signInWithPopup() de firebase para que aparezca el popup de loguearse con google


/* .then((result) => {
    console.log("logueado con google")   //NOTA: tuve que agregar el dominio del live share en authetication como dominio utorizado para que me dejara usar la auteticación de google
    // agregar aquí el formateo de formulario y cerrar el modal o cambiar de página
    }).catch((error) => {
    console.log(error)
    console.log("noup, no te logueste con google")
    }); */