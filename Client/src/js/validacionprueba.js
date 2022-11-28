import {crearPruebaEleccion} from './crud_pruebas'
import {crearPruebaValoracion} from './crud_pruebas'

export const validacion = () => {
    const pregunta = document.querySelector('.pregunta');
    const respuesta = document.querySelector('.respuesta');
    const form = document.getElementsByTagName('form')[0];
    const destino = document.querySelector('.destino');
    const habilidad = document.querySelector('.habilidad');
    const valor = document.querySelector('.valor');
    const preguntaError = document.querySelector('.errorpregunta');
    const respuestaError = document.querySelector('.errorespuesta');
    const destinoError = document.querySelector('.errordestino');
    const habilidadError = document.querySelector('.errorhabilidad');
    const valorError = document.querySelector('.errorvalor');

        form.addEventListener('submit', (event) => {
            limpiarError(); //Reinicia el valor de los errores
            let clase = form.classList;
            console.log(clase.contains('valoracion'));
            console.log(clase.contains('eleccion'));
            if(clase.contains('valoracion')){
                console.log(clase.contains('valoracion'));
                validarValoracion(event);
                event.preventDefault(); 
            }else if(clase.contains('eleccion')){
                validarEleccion(event);
            }
            event.preventDefault(); 
        });

        const validarValoracion = (event) => {
            console.log(pregunta);
            if(!pregunta.validity.valid || !destino.validity.valid || !habilidad.validity.valid){
                mostrarError();
               event.preventDefault(); 
            } else {
                const data = new FormData(document.getElementById('formulario'));
                const prueba = Object.fromEntries(data);
                console.log(prueba);
                console.log(data);
                crearPruebaValoracion(prueba);
                event.preventDefault();
            }
        }

        const validarEleccion = (event) => {
            if(!pregunta.validity.valid || !respuesta.validity.valid || !destino.validity.valid || !habilidad.validity.valid || !valor.validity.valid){
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
        if(pregunta.validity.valueMissing) {
            preguntaError.textContent = 'Debe introduccir una pregunta';
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
            if(valor.validity.valueMissing){
                valorError.textContent = 'Selecciona un valor de habilidad';
            }
        }
    }
        
    

    const limpiarError = () => {
        preguntaError.textContent = '';
        destinoError.textContent = '';
        habilidadError.textContent = '';
        if (form.classList.contains('eleccion')){
            respuestaError.textContent = '';
            valorError.textContent = '';
        }
    }
}

