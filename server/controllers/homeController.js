// Trayendo la conexión BDD
const Viaje = require('../models/Viajes')
const Testimonial = require('../models/Testimoniales')

exports.consultasHome = async (req , res) => { //use : responde a todos verbos de http put,dele,post.etc..     |||  get: solo responde a get
    
    //Select * from
    const viajes = await Viaje.findAll({  limit: 3 }) 
    //Select * from
    const testimoniales = await Testimonial.findAll({  limit: 3 })

   
    res.render('index', { //rendr es para views 
        pagina: 'Proximos Viajes',
        clase: 'home', //>esta clase se asignara solo cuando entremos a index  |   entonces podemos hacer .home .nav {background: transparent }
        viajes,  //pasamos la consultas entera
        testimoniales
    })
    
    // res.render('INDEX') //.render es un metodo nodejs para imprimir en  (EXISTE OTRO LLAMADO RENDER)
    // console.log(req)  //request son las peticiones al servidor 
    // console.log(res) //respons es la respuesta que nos da el servidor
}