const Sequelize = require('sequelize')
const db = require('../config/database')

const Testimonial = db.define('testimoniales', { //define(nombre de la tabla)
    nombre : {
        type: Sequelize.STRING
    },
    correo : {
        type : Sequelize.STRING
    },
    mensaje : {
        type : Sequelize.STRING
    }
    
})

module.exports = Testimonial