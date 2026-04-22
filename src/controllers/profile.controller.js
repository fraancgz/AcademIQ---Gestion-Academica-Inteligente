import { Profile } from '../models/index.js'
import jwt from 'jsonwebtoken'
import ms from 'ms'

const SESSION_LIMIT = '25m' // Tiempo limite, tanto para el token como la cookie


const getProfileView = async (req, res) => {

    const email = req.user.email || "Usuario"

    const profile = await Profile.findOne({
        where: { userId: req.user.id },
        raw: true
    })

    return res.render('profile', {
        pageTitle: 'Mi Perfil',
        email,
        profile,
        isProfile: true
    });
}

const logout = (req, res) => {
    // Borra la cookie del navegador
    res.clearCookie('token');
    
    // Redirige al login o página de autenticación
    res.redirect('/auth')
}


const editProfile = async (req, res) => {
    const userId = req.user.id

    if (!userId) return res.redirect('/auth')
    
    const { firstName, lastName, bio, specialty, maxWeeklyHours } = req.body;

    try {
        // Buscamos o actualizamos usando ese ID seguro
        const [profile, created] = await Profile.findOrCreate({
            where: { userId: userId },
            defaults: {
                firstName,
                lastName,
                bio,
                specialty,
                maxWeeklyHours,
                userId
            }
        });

        if (!created) {
            // Si ya existía, lo actualizamos
            await profile.update({ firstName, lastName, bio, specialty, maxWeeklyHours });
        }

        const newToken = jwt.sign({ 
            id: userId, 
            email: req.user.email,
            firstName, // Datos nuevos del formulario
            lastName
        }, process.env.JWT_SECRET_KEY, { expiresIn: SESSION_LIMIT });

        // 3. Enviamos la nueva cookie para actualizar el "Layout"
        res.cookie('token', newToken, {
            httpOnly: true,
            maxage: ms(SESSION_LIMIT)   
        });

        res.redirect('/profile?success=true');
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al procesar el perfil");
    }
    
}

export { getProfileView, logout, editProfile}

