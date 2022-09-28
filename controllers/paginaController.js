// Importar
import {Viaje} from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

// Routing

const paginaInicio = async (request, response) => {

    // Consultar 3 viajes del modelo viaje
    const promiseDB = [];

    promiseDB.push(Viaje.findAll({ limit: 3}));
    promiseDB.push(Testimonial.findAll({ limit: 3}))
    try {
        
        const resultado = await Promise.all( promiseDB );


        response.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.error(error)
    }

}

const paginaNosotros = (request, response) =>{ //request lo que enviamos - y response lo que express responde
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (request, response) =>{ //request lo que enviamos - y response lo que express responde
    
    // Consultar la base de datos
    const viajes = await Viaje.findAll();

    console.log('llegando');
    
    // Renderizar lo obtenido
    response.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (request, response) =>{ //request lo que enviamos - y response lo que express responde
    
    try {
        
        const testimoniales = await Testimonial.findAll();


        response.render('testimoniales', {
            pagina: 'Testimoniales',
           testimoniales 
        });
    } catch (error) {
        console.error(error)
    }
    
}

// Muestra detalle del viaje por su slug
const paginaDetalleViaje = async (request, response) => {
    const {slug} = request.params;

    try {
        const viaje = await Viaje.findOne({
            where: {
                slug
            }
        });

        response.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.error(error)
    }
}

export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}