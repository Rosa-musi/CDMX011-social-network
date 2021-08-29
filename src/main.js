import { routes } from './router/router.js'
import { logedUser } from './lib/firebase.js'


const component = routes[window.location.pathname]

document.getElementById('root').appendChild(component())

logedUser()