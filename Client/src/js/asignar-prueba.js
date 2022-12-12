import { Usuario } from './classes/Usuario';
import { divModal,modal } from "./pruebas";
import {listPruebas} from './indexListado';
import {listUsuarios} from './indexListado';
import { nombreDios } from "./pruebas";
import { verUsuarios } from "./http-provider";
import {addEventosDrop, drag} from './dragDrop';

export const crearModalAsignar = (origen) => {
    let prueba = listPruebas.getPrueba(origen.id.slice(1));
    const modal = (prueba, dios) => `
        <div class="modal-header">
            <h5 class="modal-title">Asignar prueba</h5>
        </div>
        <div class="modal-body">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <h6 class="col-6">Usuarios</h6>
                                <select class="col-6 opcion-usuario">
                                    <option>Todos</option>
                                    <option>Afín</option>
                                </select>
                            </div>
                        </div>
                        <div class="card-body p-3 lista-usuarios" id="user">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card mb-3" id="p${prueba.id}">
                        <div class="card-header">
                           <h6>Prueba : ${prueba.tipo}</h6>
                        </div>
                        <div class="card-body p-3">
                            <div class="row">
                                <div class="col-12"><b>${dios}</b>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Destino : <b>${prueba.destino}</b></div>
                                <div class="col-12"><b>Pregunta : </b>${prueba.pregunta}</div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <h6>Candidatos a la prueba</h6>
                        </div>
                        <div class="card-body p-3 lista-candidatos" id="cand">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn-aceptar">Aceptar</button>
            <button type="button" class="btn-cerrar">Cerrar</button>
        </div>
        `;
    
    divModal.parentElement.style.maxWidth ="90%";
    divModal.parentElement.style.marginTop ="10vh";
    const div = document.createElement('div');
    let dios = nombreDios(prueba.iddios);
    div.innerHTML = modal(prueba, dios);
    divModal.appendChild(div);
    obtenerHumanos();
}

export const conseguirUsuarios = async() =>{
    const usuarios = await verUsuarios();
    usuarios.forEach(crearUsuario);
}

const crearUsuario = (usuario) =>{
    let newUsuario = new Usuario(usuario.id, usuario.name, usuario.email, usuario.avatar, usuario.role);
    listUsuarios.nuevoUsuario(newUsuario);
}

const obtenerHumanos = () =>{
    let divUsuarios = document.querySelector('.lista-usuarios');
    let divCandidatos = document.querySelector('.lista-candidatos');
    let humanos = [];
    humanos = listUsuarios.getHumanos();
    humanos.forEach(crearFilaUsuario);
    addEventosDrop(divUsuarios);
    addEventosDrop(divCandidatos);
}

const crearFilaUsuario = (usuario) =>{
    let divUsuarios = document.querySelector('.lista-usuarios');
    const fila = (usuario) => `
        <div class="card mb-3" id="u${usuario.id}">
            <div class="card-body p-3">
                <div class="row">
                    <div class="col-2">
                        <img>
                    </div>
                    <div class="col-10">
                        <p><b>${usuario.nombre}</b></p>
                        <p>${usuario.email}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    const div = document.createElement('div');
    div.innerHTML = fila (usuario);
    div.firstElementChild.setAttribute('draggable', true);
    drag(div.firstElementChild);
    divUsuarios.appendChild(div);
    cerrarModal();
}

const cerrarModal = () =>{
    const btnCerrar = document.querySelector('.btn-cerrar');
    btnCerrar.addEventListener('click', () => {
        modal.style.display = "none";
        divModal.innerHTML = '';
        console.log(listUsuarios);
    });
}