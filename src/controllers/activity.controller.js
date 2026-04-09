const activities = (req, res) => {

    return res.render('coming-soon', {
        pageTitle: 'AcademIQ - Actividades',
        appName: 'AcademIQ',
        isActivity: true
    })
}


export { activities }
