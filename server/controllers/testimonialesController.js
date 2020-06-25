const Testimonial = require('../models/Testimoniales')


exports.mostrarTestimoniales = async (req , res) => {
     //select * from testimonials
    const testimoniales = await Testimonial.findAll() 
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales //mandamos los testimonials de la BDD
        }) 
}

// exports.mostrarTestimoniales = async (req , res) => {

//     Testimonial.findAll() //select * from testimonials
//     const testimoniales = await res.render('testimoniales', {
//         pagina: 'Testimoniales',
//         testimoniales //mandamos los testimonials de la BDD
//         }) 
// }

exports.agregarTestimonial = async  (req , res) => {
    // console.log(req.body) //Retorna un objeto desde los forms -> apoyo de bodyparser

    //' Extrayendo valores de los inputs por POST con bodyparser
    let{nombre, correo, mensaje} = req.body //Asignación por destructuring | SIMILAR A LEER DATOS POST CON PHP |/ bodyparser nos retornara un objeto desde el formulario
    let errores = []
    // Validaciones
    if(!nombre){ //name del input
        errores.push({'mensaje' : 'Agrega tu Nombre'})
    }
    if(!correo){
        errores.push({'mensaje' : 'Agrega tu Correo'})
    }
    if(!mensaje){
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    // revisar por errores
    if(errores.length > 0){
        // muestra la vista con errores 
       const testimoniales = await res.render('testimoniales' , {
            errores, 
            nombre, 
            correo,
            mensaje 
        })

    } else{
        // Insrtar en BDD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial =>  res.redirect('/testimoniales'))
        .catch(error => console.log(error))
    }
}