const Viaje = require('../models/Viajes')

// Select *
exports.mostrarViajes = async (req , res) => {
    // cuando trabajamos con modelos de sequelize este retorna un promise por eso la sinta en estos casos es distinta.
    const viajes = await Viaje.findAll() //findall() hace una conculsta , SELECT * from etc..
        res.render('viajes', {
            pagina: 'Proximos Viajes',
            viajes  //pasamos la consulta entera
        })
}

// Mostrando el viaje seleccionado por el usuario | Select by ID
exports.mostrarElViaje = async(req , res) => {
    // res.send(req.params.id) //send retorna solo texto, ademas accedemos a la url y especificamente al id (retorna un json por eso el params.id)
    const viaje = await Viaje.findByPk(req.params.id)
        res.render('viaje',{
            viaje
        })
}