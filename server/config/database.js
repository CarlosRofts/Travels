const Sequelize = require('sequelize')
require('dotenv').config({path: 'variables.env'}) // variables de env (desarrollo y producción)

//> console.log(process.env.BD_NOMBRE) | //> podemos comprobar las variables

module.exports = new Sequelize(
process.env.BD_NOMBRE,
process.env.BD_USER,
process.env.BD_PASS, {

    host: process.env.BD_HOST, //aquí pondriamos la dirección del servidor donde tengamos la base de datos montada
    port: process.env.BD_PORT, //el puerto que utiliza xampp con mysql es este
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})


