const getSubjectsView = (req, res) => {
    return res.render('coming-soon', {
        pageTitle: 'Asignaturas',
        appName: 'AcademIQ',
        isSubject: true
    })
}

export { getSubjectsView }