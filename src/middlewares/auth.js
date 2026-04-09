export const isAuth = (req, res, next) => {
    if (req.session && req.session.userId) {
        return next();
    }
    console.log("Acceso denegado: Sesión no encontrada"); 
    res.redirect('/auth?error=required')
};