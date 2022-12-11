import { Usuario } from './classes/Usuario';
import { divModal } from "./pruebas";
import { asignarPrueba } from "./pruebas";
import {listPruebas} from './indexListado';
import {listUsuarios} from './indexListado';
import { nombreDios } from "./pruebas";
import { verUsuarios } from "./http-provider";

const divCandidatos = document.querySelector('.lista-candidatos');


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
                        <div class="card-body p-3 lista-usuarios">
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
                        <div class="card-body p-3 lista-candidatos">
                            
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
    console.log(dios);
    div.innerHTML = modal(prueba, dios);
    divModal.appendChild(div);
    conseguirUsuarios();
    //cerrarModal(origen);
}

const conseguirUsuarios = async() =>{
    const usuarios = await verUsuarios();
    usuarios.forEach(crearUsuario);
    obtenerHumanos();
}

const crearUsuario = (usuario) =>{
    let newUsuario = new Usuario(usuario.id, usuario.name, usuario.email, usuario.avatar, usuario.role);
    listUsuarios.nuevoUsuario(newUsuario);
}

const obtenerHumanos = () =>{
    let humanos = [];
    humanos = listUsuarios.getHumanos();
    console.log(humanos);
    humanos.forEach(crearFilaUsuario);
}

const crearFilaUsuario = (usuario) =>{
    const divUsuarios = document.querySelector('.lista-usuarios');
    console.log(usuario);
    console.log(divUsuarios);
    const fila = (usuario) => `
        <div class="card mb-3" id="p${usuario.id}">
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
    divUsuarios.appendChild(div);
}