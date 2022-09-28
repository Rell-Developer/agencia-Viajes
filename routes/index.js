import express from "express";
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from "../controllers/paginaController.js";
import {
    guardarTestimonial
} from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

router.get('/contacto', (request, response) =>{ //request lo que enviamos - y response lo que express responde
    // Mostrar en pantalla
    response.send('Contacto');
})

export default router;