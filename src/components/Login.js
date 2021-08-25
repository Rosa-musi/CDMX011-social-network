export const Login = () => {
    //div principal
    const acountDiv = document.createElement('div')
    acountDiv.classList.add('acount-header')
    
    //header
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('acount-header')
    const imgHeader = document.createElement('img')
    imgHeader.setAttribute("class", "acount-logo")
    imgHeader.setAttribute("src", "../img/logoFormLoveBook.png")
    imgHeader.setAttribute("alt", "LoveBook logo")
    headerDiv.appendChild(imgHeader)
    acountDiv.appendChild(headerDiv)

    //formulario
    const formDiv = document.createElement('div')
    formDiv.setAttribute("class", "login-user")
    const loginForm = document.createElement('form')
    loginForm.setAttribute("id", "login-form")
    loginForm.setAttribute("class", "form")
    const labelEmail = document.createElement('label')
    labelEmail.textContent = "Email"    
    labelEmail.setAttribute("for", "login-email")
    loginForm.appendChild(labelEmail)
    const inputEmail = document.createElement('input')
    inputEmail.setAttribute("type", "email")
    inputEmail.setAttribute("id", "login-email")
    inputEmail.required = true
    loginForm.appendChild(inputEmail)
    const labelPassword = document.createElement('label')
    labelPassword.textContent = "Password"
    labelPassword.setAttribute("for", "login-password")
    loginForm.appendChild(labelPassword)
    const inputPassword = document.createElement('input')
    inputPassword.setAttribute("type", "password")
    inputPassword.setAttribute("id", "login-password")
    inputPassword.required = true
    loginForm.appendChild(inputPassword)
    const loginButton = document.createElement('button')
    loginButton.innerText = "Login"
    loginButton.setAttribute("type", "submit")
    loginButton.setAttribute("id", "btnLogin")
    loginForm.appendChild(loginButton)
    formDiv.appendChild(loginForm)
    acountDiv.appendChild(formDiv)

    //división
    const divisionDiv = document.createElement('div')
    divisionDiv.setAttribute("class", "division")
    const lineaUno = document.createElement("hr")
    lineaUno.setAttribute("class", "division-1")
    divisionDiv.appendChild(lineaUno)
    const o = document.createElement("p")
    o.innerText = "O"
    o.setAttribute("class", "division-2")
    divisionDiv.appendChild(o)
    const lineaDos = document.createElement("hr")
    lineaDos.setAttribute("class", "division-3")
    divisionDiv.appendChild(lineaDos)
    acountDiv.appendChild(divisionDiv)

    //loguearse con google
    const loginGoogle = document.createElement('div')
    loginGoogle.setAttribute("class", "login-google")
    const googleLogo = document.createElement('img')
    googleLogo.setAttribute("src", "../img/icongoogle.png")
    googleLogo.setAttribute("alt", "logo google")
    googleLogo.setAttribute("class", "logo-google")
    loginGoogle.appendChild(googleLogo)
    const textGoogleLogin = document.createElement('p')
    textGoogleLogin.innerText = "Login with google"
    loginGoogle.appendChild(textGoogleLogin)
    acountDiv.appendChild(loginGoogle)

    //pieform 
    const pieForm = document.createElement('div')
    pieForm.setAttribute("class", "pieform")
    const textPieForm = document.createElement('p')
    textPieForm.innerText = "You do not have an account"
    textPieForm.setAttribute("class", "text-pieform")
    pieForm.appendChild(textPieForm)
    const pieFormButton = document.createElement('button')
    pieFormButton.innerText = "Sign Up"
    pieFormButton.setAttribute("id", "signup")
    pieForm.appendChild(pieFormButton)
    acountDiv.appendChild(pieForm)

    return acountDiv;
  };                             