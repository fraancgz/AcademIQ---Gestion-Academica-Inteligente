const getProfileView = (req, res) => {

    const firstName = req.session.userName || "Francisco";

    return res.render('profile', {
        pageTitle: 'Mi Perfil',
        firstName,
        isProfile: true
    });
}

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth')
    })
}

export { getProfileView, logout}

