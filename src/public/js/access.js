document.addEventListener('DOMContentLoaded', () => {
    // 1. Capturamos los elementos de tu alerta
    const alertElement = document.getElementById('alertLogin') // El ID de tu div de alerta
    const textElement = document.getElementById('textLogin') // El ID donde va el texto

    // 2. Revisamos si hay parámetros en la URL
    const params = new URLSearchParams(window.location.search)
    const errorType = params.get('error')

    // 3. Si existe el error de sesión, activamos TU función
    if (errorType === 'session_expired' || errorType === 'required') {
        // Usamos tu función con alert-warning (amarillo) porque es un aviso de sesión
        showAlertMessage(
            alertElement, 
            'alert-danger', 
            textElement, 
            "Necesitas iniciar sesión para acceder a esta página."
        )
    } 
})


const goToRegister = document.querySelector("#go-to-register")
const goToLogin = document.querySelector("#go-to-login")
const loginSection = document.querySelector("#loginSection")
const registerSection = document.querySelector("#registerSection")


/*                             FUNCIONALIDAD SLIDING PANEL                                       */
const slidingPanel = document.querySelector(".sliding-panel")

function slidingPanelOnNormalDevices(e) {
    e.preventDefault()

    if (window.innerWidth < 768) {
        // Mobile revices: Switch puro entre d-none y d-flex
        // Login: si tiene d-none lo quita, si no, lo pone.
        loginSection.classList.toggle('d-none')
        loginSection.classList.toggle('d-flex')

        // Registro: igual
        registerSection.classList.toggle('d-none')
        registerSection.classList.toggle('d-flex')
    } else {
        // Desktop: Mover el panel y cambiar color
        slidingPanel.classList.toggle('move-left')

        if (slidingPanel.classList.contains('move-left')) {
            slidingPanel.classList.toggle('bg-accent-custom')
            slidingPanel.classList.toggle('bg-primary-custom')
        } else {
            slidingPanel.classList.toggle('bg-primary-custom')
            slidingPanel.classList.toggle('bg-accent-custom')
        }
    }
}

goToRegister.addEventListener("click", slidingPanelOnNormalDevices)
goToLogin.addEventListener("click", slidingPanelOnNormalDevices)
/* ----------------------------------------------------------------------------------------------------------*/


/* ------------------------- Obtencion de datos y validación para el formulario Login -----------------------*/
const loginForm = document.querySelector("#loginForm")
const btnLogin = document.querySelector("#btnLogin")
const alertLogin = document.querySelector("#alertLogin")
const textLogin = document.querySelector("#textLogin")

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    // Desactivo el boton de Ingreso y agrego un spinner al boton
    btnLogin.disabled = true
    btnLogin.innerHTML = `
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Ingresando ...</span>
        `
    // Obtengo los datos ingresados por el usuario al formulario Login, mediante FormData
    const formData = new FormData(loginForm)

    // Capturo todos los campos del formulario y los convierto en un objeto literal de JavaScript para enviarlos al controlador.
    const data = Object.fromEntries(formData.entries())

    try {
        // Envío el objeto mediante fetch al controlador
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Envío un JSON
            },
            body: JSON.stringify(data) // Convierto el objeto a texto para que viaje
        })

        // Recibo la espuesta del controlador
        const result = await response.json()

        if (result.ok) {
            // Redirecciono a la URL que mando en el controlador
            setTimeout(() => {
                restoreButton(btnLogin, "Ingresar")
                
                window.location.href = result.redirectUrl
                restoreForm()
            }, 1100)
        } else {
            showAlertMessage(alertLogin, "alert-danger", textLogin, result.message)
            restoreButton(btnLogin, "Ingresar")
        }

    } catch (error) {
        console.error("Error en la conexión:", error)
        showAlertMessage(alertLogin, "alert-danger", textLogin, "Error en la conexión con el servidor")
    }
    

})
/* -------------------------------------------------------------------------------------------------------------- */



/* ------------------------- Obtencion de datos y validación para el formulario Registro -----------------------*/

const registerForm = document.querySelector("#registerForm")
const btnRegister = document.querySelector("#btnRegister")
const textRegister = document.querySelector("#textRegister")
const alertRegister = document.querySelector("#alertRegister")

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Desactivo el boton de Registro y agrego un spinner al boton
    btnRegister.disabled = true
    btnRegister.innerHTML = `
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Registrando ...</span>
        `

    const dataForm = new FormData(registerForm)

    const data = Object.fromEntries(dataForm.entries())

    // Aplico trim para eliminar espacios al inicio y final del input, y lowerCase
    const dataClean = {
        username: data.username.trim().toLowerCase(),
        mail: data.mail.trim().toLowerCase(),
        pass: data.pass
    }

    try {
        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataClean)
        })

        const result = await response.json()
  
        if (result.ok) {
            // Redirecciono a la URL que mando en el controlador
            setTimeout(() => {
                restoreButton(btnRegister, "Registrarse")
                restoreForm()
                showAlertMessage(alertRegister, "alert-success", textRegister, result.message)
            }, 1100)
        } else {
            showAlertMessage(alertRegister, "alert-danger", textRegister, result.message)
            restoreButton(btnRegister, "Registrarse")
        }

    } catch (error) {
        console.error(error.message)
        showAlertMessage(alertRegister, "alert-danger", textRegister, "Error en la conexión con el servidor")
    }
})


/* -------------------------------------------------------------------------------------------------------------- */



// Funcion para restablecer valores iniciales de los botones, recibe boton y texto
function restoreButton(btn, texto) {
    btn.disabled = false
    btn.innerHTML = texto
}

// Funcion limpia los input del Formulario
function restoreForm() {
    document.querySelector("#loginPass").value = ""
    document.querySelector("#loginMail").value = ""
    document.querySelector("#username").value = ""
    document.querySelector("#mail").value = ""
    document.querySelector("#pass").value = ""
}

// Funcion que muestra un mensaje de alerta, modifica el tipo de alerta y lo restablece luego de 5 segundos
function showAlertMessage(alertElement, alertType, textElement, message) {
    alertElement.classList.remove('d-none')
    alertElement.classList.add('d-inline')
    alertElement.classList.remove('alert-success', 'alert-danger', 'alert-warning')
    alertElement.classList.add(alertType)
    alertElement.classList.add("d-flex", "align-items-center", "justify-content-center")
    textElement.textContent = message

    setTimeout(() => {
        restoreAlert(alertElement)
    }, 5000)
}

// Funcion que agrega la clase display none al alert ingresado como parametro
function restoreAlert(alertElement) {
    alertElement.classList.add('d-none')
    alertElement.classList.remove('d-inline')
}
