const getProfileView = (req, res) => {

    const firstName = req.user.email || "Usuario";

    return res.render('profile', {
        pageTitle: 'Mi Perfil',
        firstName,
        isProfile: true
    });
}

const logout = (req, res) => {
    // Borra la cookie del navegador
    res.clearCookie('token');
    
    // Redirige al login o página de autenticación
    res.redirect('/auth')
}

export { getProfileView, logout}

