import {obtenerListaPruebas} from './crud_pruebas';
import { borrarPrueba } from './crud_pruebas';
import { Prueba } from './classes/Prueba';
import {listPruebas} from './indexListado';

const divLista = document.querySelector('.contenedor-tabla');
const edit = document.querySelectorAll('.edit');

export const init = async() => {
    const pruebas = await obtenerListaPruebas();
    conseguirPruebas(pruebas);
    eliminarPrueba();
}

const conseguirPruebas = (pruebas) =>{
    pruebas.forEach(elemento =>{
        elemento.forEach(crearPrueba);
    })
}

const crearPrueba = (prueba) => {
    console.log(prueba);
    let newPrueba = new Prueba(prueba.id, prueba.tipo, prueba.iddios, prueba.pregunta, prueba.destino, prueba.updated_at);
    listPruebas.nuevaPrueba(newPrueba);
    crearFilaPrueba(newPrueba);
}

const crearFilaPrueba = ( prueba ) => {
    const fila = (dios, fecha) => `
    <div class="card mb-3 ps-4 pe-1" id="p${prueba.id}">
        <div class="card-body">
            <div class="row">
                <div class="col-2">${prueba.tipo}</div>
                <div class="col-1">${dios}</div>
                <div class="col-4">${prueba.pregunta}</div>
                <div class="col-1">${prueba.destino}</div>
                <div class="col-3">${fecha.replace('T', ' | ')}</div>
                <div class="col-1 acciones">
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
    let fecha = prueba.fecha.slice(0, -8);
    const div = document.createElement('div');
    div.innerHTML = fila (dios, fecha);
    divLista.appendChild(div);
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
            listPruebas.eliminarPrueba(id);
            origen.remove();
            borrarPrueba(id);
        });
    });  
}