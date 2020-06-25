const express = require('express')
const router = express.Router()



// Controllers
const homeController = require('../controllers/homeController')
const nosotrosController = require('../controllers/nosotrosController')
const viajesController = require('../controllers/viajesController')
const testimonialController = require('../controllers/testimonialesController')

// Exportando las rutas
module.exports = function(){  
		
	// Routing (RUTAS)
	router.get('/', homeController.consultasHome)
	router.get('/nosotros', nosotrosController.infoNosotros)
	router.get('/viajes', viajesController.mostrarViajes)		

	//> Direccionado por medio del ID (leido atravez URL)
		// de esta forma sacamos la variable de la url
	router.get('/viajes/:id', viajesController.mostrarElViaje);

	router.get('/testimoniales', testimonialController.mostrarTestimoniales);

	// Leyendo form con post
	router.post('/testimoniales', testimonialController.agregarTestimonial )

	return router;
}