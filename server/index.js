//========================================================================================
/*                                                                                      *
 *                             // #Fichero de Configuración                             *
 *  // >Contenido: indica donde enlazan las views y mucha mas conf. (el mas importante) *
 *                                                                                      */
//========================================================================================
// Conf. Express
// Conf. PUG
// Conf. Sequelize
// Variables locals

//- Sintax Clasica de NodeJS pero antigua , actualmente se utiliza import y export
    //- para eso tendriamos que instalar babel rc e instalar babel cli
// Importar Express
const express  = require('express') //requiere antiguo pero clasico en nodejs
const path = require('path') //paths para pug
const BodyParser = require('body-parser') // SIMILAR A LEER DATOS POST CON PHP (Retorna un objeto en base a los valores de los inputs)
const routes = require('./routes') //importamos las rutas (toma el index.js)
const configs = require('./config')

require('dotenv').config({path: 'variables.env'}) // variables de env (desarrollo y producción) (deplooyment)

//> Comprobamos errores de conexión
// const db = require('./config/database')
// db.authenticate() 
//                 .then(() => console.log('DB CONECTADA'))
//                 .catch(error => console.log(error))



//#──── CREANDO EL SERVODPR CON EXPRESS ─
// Configurar Express
const app = express();

// Habilitar pug
app.set('view engine' , 'pug')
//Seleccionar las views
app.set('views', path.join(__dirname,'./views'))    

// cargar una carpeta estatica llamaa public / sin este paso no cargaran las rutas hacía esa carpeta
    // indicamos donde estara nuestra carpeta con el contenido estaticos como css, js , img, svg etc..
app.use(express.static('public'))

// 'Variable Locals
//> Validar si estamos en desarrollo  o en producción
const config = configs[app.get('env')] //<- aquí obtenemos el valor que le pongamos via comandos al env. 
// creamos la variable para el sitio web
app.locals.titulo = config.nombresitio 
// la forma de cambiar ambientes de trabajo sería con el comando
    //  npm start env --production | npm start env --development

// 'Variable Locals
    // cualquier variable que pongamos estara disponible globalmente
app.use((req , res, next) => {
    // crear una nueva fecha  // Muestra el año actual
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear(); //res.locals.nombre son variables internas o locales de nodejs
    res.locals.Author = 'Carlos Fuentes'; //res.locals.nombre son variables internas o locales de nodejs
    res.locals.ruta = req.path //spsnav
    // console.log(res.locals)
    //* MIDLEWARE: continua a las sig. funciones , sin el aquí nos quedariamos y ya.
    return next(); //indicamos que continue ejecutando la prox. función.
})

// Ejecutamos BodyParser | SIMILAR A LEER DATOS POST CON PHP | (Retorna un objeto en base a los valores de los inputs)
// (Alternativa express.json)
app.use(BodyParser.urlencoded({extended: true}))

//' Cargar rutas desde server/index.js
app.use('/', routes() ); //use responde a get,post,push etc..


//' Preparando para Deployment
// Puerto y host para la app | dinamico para los dos tipos de env 
const host = process.env.HOST || '0.0.0.0' //heroku auto asignara el puerto a 0.0.0.0
const port = process.env.PORT || 3000 //heroku autoasignara la variable PORT si no existe significa que estamos en local y se asigna 3000
// Ruta del puesto localhost:3000
app.listen(port , host , () => {
    console.log("all working fine")
});
