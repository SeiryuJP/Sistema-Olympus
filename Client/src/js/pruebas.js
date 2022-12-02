import {obtenerListaPruebas} from './crud_pruebas';
import { borrarPrueba } from './crud_pruebas';

const lista = document.querySelector('.contenedor-tabla');
const edit = document.querySelectorAll('.edit');

export const init = async() => {
    const pruebas = await obtenerListaPruebas();
    pruebas.forEach( crearFilaPrueba );
    eliminarPrueba();
}

const crearFilaPrueba = ( prueba ) => {
    const fila = (dios, fecha) => `
    <div class="card mb-3" id="p${prueba.id}">
        <div class="card-body">
            <div class="row">
                <div class="col-2">${prueba.id}</div>
                <div class="col-2">${dios}</div>
                <div class="col-2">${prueba.destino}</div>
                <div class="col-4">${fecha.replace('T', ' | ')}</div>
                <div class="col-2 acciones">
                    <div class="row">
                        <div class="col-6"><i class="fa fa-pencil-square edit" aria-hidden="true"></i></div>
                        <div class="col-6"><i class="fa fa-trash delete" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    let dios = nombreDios(prueba.iddios);
    let fecha = prueba.updated_at.slice(0, -8);
    const div = document.createElement('div');
    div.innerHTML = fila (dios, fecha);
    lista.appendChild(div);
}

const nombreDios = (id) => {
    let dios = '';
    switch(id){
        case 1:
            dios = 'Zeus';
        break;
        case 2:
            dios = 'Poseidon';
        break;
        case 3:
            dios = 'Hades';
        break;
    }
    return dios;
}

export const eliminarPrueba = () => {
    const borrar = document.querySelectorAll('.delete');
    borrar.forEach(boton => {
        boton.addEventListener('click', () => {
            let origen = boton.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            let id = origen.id.slice(1);
            origen.remove();
            borrarPrueba(id);
        });
    });  
}