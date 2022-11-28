import {crearPruebaEleccion} from './crud_pruebas'
import {crearPruebaValoracion} from './crud_pruebas'

export const validacion = () => {
    const pregunta = document.querySelector('.pregunta');
    const respuesta = document.querySelector('.respuesta');
    const form = document.getElementsByTagName('form')[0];
    const destino = document.querySelector('.destino');
    const habilidad = document.querySelector('.habilidad');
    const porcentaje = document.querySelector('.porcentaje');
    const descripcion = document.querySelector('.descripcion');
    const descripcionError = document.querySelector('.errordescripcion');
    const porcentajeError = document.querySelector('.errorporcentaje');
    const preguntaError = document.querySelector('.errorpregunta');
    const respuestaError = document.querySelector('.errorespuesta');
    const destinoError = document.querySelector('.errordestino');
    const habilidadError = document.querySelector('.errorhabilidad');

        form.addEventListener('submit', (event) => {
            limpiarError(); //Reinicia el valor de los errores
            let clase = form.classList;
            if(clase.contains('valoracion')){
                validarValoracion(event);
            }else if(clase.contains('eleccion')){
                validarEleccion(event);
            }else if(clase.contains('puntual')){
                validarPuntual(event);
            }
            event.preventDefault(); 
        });

        const validarPuntual = (event) => {
            if(!descripcion.validity.valid || !destino.validity.valid || !habilidad.validity.valid || !porcentaje.validity.valid){
                mostrarError();
               event.preventDefault(); 
            } else {
                const data = new FormData(document.getElementById('formulario'));
                const prueba = Object.fromEntries(data);
                console.log(prueba);
                console.log(data);
                //crearPruebaPuntual(prueba);
                event.preventDefault();
            }
        }

        const validarValoracion = (event) => {
            if(!pregunta.validity.valid || !destino.validity.valid || !habilidad.validity.valid){
                mostrarError();
               event.preventDefault(); 
            } else {
                const data = new FormData(document.getElementById('formulario'));
                const prueba = Object.fromEntries(data);
                crearPruebaValoracion(prueba);
                event.preventDefault();
            }
        }

        const validarEleccion = (event) => {
            if(!pregunta.validity.valid || !respuesta.validity.valid || !destino.validity.valid || !habilidad.validity.valid){
                mostrarError();
                event.preventDefault(); 
            } else {
                const data = new FormData(document.getElementById('formulario'));
                const prueba = Object.fromEntries(data);
                crearPruebaEleccion(prueba);
                event.preventDefault();
            }
        }

    const mostrarError = () => {
        if (form.classList.contains('eleccion') || form.classList.contains('valoracion')){
            if(pregunta.validity.valueMissing) {
                preguntaError.textContent = 'Debe introduccir una pregunta';
            }
        }
        if(destino.validity.valueMissing || destino.validity.rangeOverflow || destino.validity.rangeUnderflow){
            destinoError.textContent = 'Debe introducir dígitos entre 0 y 100';
        }
        if(habilidad.validity.valueMissing){
            habilidadError.textContent = 'Selecciona una habilidad';
        }
        if (form.classList.contains('eleccion')){
            if(respuesta.validity.valueMissing){
                respuestaError.textContent = 'Debe introduccir dos respuestas';
            }
        }
        if(form.classList.contains('puntual')){
            if(descripcion.validity.valueMissing) {
                descripcionError.textContent = 'Debe introduccir una descripción';
            }
            if(porcentaje.validity.valueMissing || porcentaje.validity.rangeOverflow || porcentaje.validity.rangeUnderflow){
                porcentajeError.textContent = 'Introduzca un porcentaje entre 0 y 100';
            }
        }
    }
        
    

    const limpiarError = () => {
        if (form.classList.contains('eleccion') || form.classList.contains('valoracion')){
            preguntaError.textContent = '';
        }
        destinoError.textContent = '';
        habilidadError.textContent = '';
        if (form.classList.contains('eleccion')){
            respuestaError.textContent = '';
        }
        if(form.classList.contains('puntual')){
            descripcionError.textContent = '';
            porcentajeError.textContent = '';
        }
    }
}

