import express from 'express'
import appRoutes from './routes/appRoutes.js'
import path from 'path'
import {engine} from 'express-handlebars'
import {PORT, ROOT_PATH} from './config/index.js'
import db from './config/db.js'

// El import de dotenv está en el archivo index de Config

// Express
const app = express()

// MiddleWare

// Configurar el motor de plantillas hbs
app.engine('hbs', engine({
    extname: '.hbs', // Define la extensión corta. Sin esto tendriamos que poner la extension completa
    defaultLayout: 'main', //define cuál es el layout base
    layoutsDir: path.join(ROOT_PATH, 'src','views','layouts') //Ruta explícita a layouts
})) 
app.set('view engine', 'hbs') // Lo establece como motor por defecto
app.set('views', path.join(ROOT_PATH, 'src','views')) // Indica la ruta de las vistas

// Sincronizar la base de datos
const connectDB = async() => {
    try {
        await db.sync()
        console.log('Base de datos conectada')
    } catch (error) {
        console.log(error)
    }
}
connectDB()

// Routes
app.use('/', appRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})
