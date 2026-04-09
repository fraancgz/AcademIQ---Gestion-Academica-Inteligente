import express from 'express'
import session from 'express-session';
import appRoutes from './routes/app.routes.js'
import activitiesRoutes from './routes/activity.routes.js'
import coursesRoutes from './routes/course.routes.js'
import subjectsRoutes from './routes/subject.routes.js'
import profileRoutes from './routes/profile.routes.js'
import path from 'path'
import { engine } from 'express-handlebars'
import { PORT, ROOT_PATH } from './config/index.js'
import db from './config/db.js'
import formHelpers from './helpers/form.helper.js'

// El import de dotenv está en el archivo index de Config

// Express
const app = express()

// MiddleWare
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 3600000
    }
}))

// Configurar el motor de plantillas hbs
app.engine('hbs', engine({
    extname: '.hbs', // Define la extensión corta. Sin esto tendriamos que poner la extension completa
    defaultLayout: 'main', //define cuál es el layout base
    layoutsDir: path.join(ROOT_PATH, 'src', 'views', 'layouts'), //Ruta explícita a layouts
    partialsDir: path.join(ROOT_PATH, 'src', 'views', 'partials'), //Ruta explícita a partials
    helpers: formHelpers // Define ruta para los helpers
}))
app.set('view engine', 'hbs') // Lo establece como motor por defecto
app.set('views', path.join(ROOT_PATH, 'src', 'views')) // Indica la ruta de las vistas


// Public Static files
app.use(express.static(path.join(ROOT_PATH, 'src', 'public')))


// Sincronizar la base de datos
const connectDB = async () => {
    try {
        await db.sync({ force: false })
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(error)
    }
}
connectDB()

// Routes
app.get('/', appRoutes)

app.use('/auth', appRoutes)
app.use('/activities', activitiesRoutes)
app.use('/courses', coursesRoutes)
app.use('/subjects', subjectsRoutes)
app.use('/profile', profileRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})
