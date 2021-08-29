import { Navbar } from "./Navbar.js"
import { Publication } from "./Publication.js"

export const Home = () => {
        const viewContent = 
        `
            <p> EStos son los posts </p>
            <p> EStos son los posts </p>
        `

        const home = document.createElement('div')

        home.appendChild(Navbar())

        home.appendChild(Publication())

        home.querySelector('#navHome').setAttribute("class", "display-none")

        const content = document.createElement('div')
        content.setAttribute("class", "profile-content")
        content.innerHTML = viewContent

        home.appendChild(content)

        return home
};