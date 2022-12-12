import {obtenerListaPruebas} from './crud_pruebas';
import { borrarPrueba } from './crud_pruebas';
import { Prueba } from './classes/Prueba';
import {listPruebas} from './indexListado';
import {crearModalAsignar} from './asignar-prueba'

const divLista = document.querySelector('.contenedor-tabla');
export const divModal = document.querySelector('.contenedor-modal');
export const modal = document.querySelector('.modal');

export const init = async() => {
    const pruebas = await obtenerListaPruebas();
    conseguirPruebas(pruebas);
    eliminarPrueba();
    asignarPrueba();
}

const conseguirPruebas = (pruebas) =>{
    pruebas.forEach(elemento =>{
        elemento.forEach(crearPrueba);
    })
}

const crearPrueba = (prueba) => {
    let newPrueba = new Prueba(prueba.id, prueba.tipo, prueba.iddios, prueba.pregunta, prueba.destino, prueba.updated_at);
    listPruebas.nuevaPrueba(newPrueba);
    crearFilaPrueba(newPrueba);
}

const crearFilaPrueba = ( prueba ) => {
    const fila = (dios, fecha) => `
    <div class="card mb-3" id="p${prueba.id}">
        <div class="card-body p-3">
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

export const nombreDios = (id) => {
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
    const infoEliminar = document.querySelector('.info-eliminar');
    const borrar = document.querySelectorAll('.delete');
    borrar.forEach(boton => {
        boton.addEventListener('click', () => {
            infoEliminar.textContent = ''; 
            let origen = boton.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            modal.style.display = "block";
            crearModalBorrar(origen)
        });
    });  
}

export const asignarPrueba = () => {
    const asignar = document.querySelectorAll('.edit');
    asignar.forEach(boton => {
        boton.addEventListener('click', () => {
            let origen = boton.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
            modal.style.display = "block";
            crearModalAsignar(origen)
        });
    });  
}




const confirmarEliminarPrueba = async(id) =>{
    const infoEliminar = document.querySelector('.info-eliminar');
    let mensajeBorrar = await borrarPrueba(id);
    infoEliminar.textContent = mensajeBorrar;  
    infoEliminar.style.padding = "0.4rem 1rem";  
}

const crearModalBorrar = (origen) => {
    const modal = () => `
        <div class="modal-header">
            <h5 class="modal-title">Borrar</h5>
        </div>
        <div class="modal-body">
            <p>¿Estás seguro de querer borrar la prueba?</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn-aceptar">Aceptar</button>
            <button type="button" class="btn-cerrar">Cerrar</button>
        </div>
        `;
    const div = document.createElement('div');
    div.innerHTML = modal();
    divModal.appendChild(div);
    cerrarModal(origen);
}

const cerrarModal = (origen) =>{
    const btnCerrar = document.querySelector('.btn-cerrar');
    btnCerrar.addEventListener('click', () => {
        modal.style.display = "none";
        divModal.innerHTML = '';
    });
    const btnAceptar = document.querySelector('.btn-aceptar');
    btnAceptar.addEventListener('click', () => {
        let id = origen.id.slice(1);
        listPruebas.eliminarPrueba(id);
        origen.remove();
        confirmarEliminarPrueba(id);
        modal.style.display = "none";
        divModal.innerHTML = '';
    });
}

