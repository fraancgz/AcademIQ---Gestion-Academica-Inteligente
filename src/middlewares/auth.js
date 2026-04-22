import jwt from 'jsonwebtoken'

const isAuth = (req, res, next) => {
    // 1. Extraigo el token de la cookie (gracias a cookie-parser)
    const token = req.cookies.token

    // 2. Si no existe el token, denegamos acceso
    if (!token) {
        console.log("Acceso denegado: Token no encontrado en cookies")
        return res.redirect('/auth?error=required')
    }

    try {
        // 3. Verifico que el token sea válido y no haya expirado
        // Uso la misma clave secreta con la que firmé el token en el login
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        // 4. Guardo los datos del usuario en req
        // para que las siguientes rutas puedan saber quién es el usuario
        req.user = decoded

        next()
    } catch (error) {
        // 5. Si el token expiró o es falso, limpio la cookie y redirijo
        console.log("Acceso denegado: Token inválido o expirado")
        res.clearCookie('token')
        res.redirect('/auth?error=expired')
    }
}

export { isAuth }