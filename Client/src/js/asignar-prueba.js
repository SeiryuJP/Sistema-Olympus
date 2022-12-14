import { Usuario } from './classes/Usuario';
import { divModal,modal } from "./pruebas";
import {listPruebas} from './indexListado';
import {listUsuarios} from './listadoUsuarios';
import { nombreDios } from "./pruebas";
import { conseguirHumanosAfines, conseguirHumanosAsignados } from './crud_usuarios';
import { insertarUsuariosAsignados } from './crud_pruebas';
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
                                <select class="col-6 opcion-usuario form-select" aria-label="Default select example">
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
                    <div class="card prueba mb-3" id="p${prueba.id}">
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

    const divPadreModal = divModal.parentElement.style;
    divPadreModal.maxWidth ="90%";
    divPadreModal.marginTop ="10vh";
    const div = document.createElement('div');
    let dios = nombreDios(prueba.iddios);
    div.innerHTML = modal(prueba, dios);
    divModal.appendChild(div);
    obtenerHumanos("Todos", prueba.iddios, prueba.id);
    addEventos(prueba.iddios, prueba.id);
    cerrarModal();
}

const addEventos = (iddios, idprueba) =>{
    let opciones = document.querySelector('.opcion-usuario');
    opciones.addEventListener('change', () =>{
        let opcion = opciones.value;
        obtenerHumanos(opcion, iddios, idprueba);
    });
}

const obtenerHumanos = async(opcion, iddios, idprueba) =>{
    limpiarModal(); 

    if(opcion == "Todos") {
        let usuarios = await conseguirHumanosAsignados(iddios);
        console.log(usuarios);
        usuarios.forEach(crearUsuario);
    }
    else if(opcion == "Afín") {
        let usuarios = await conseguirHumanosAfines(iddios, idprueba);
        console.log(usuarios);
        usuarios.forEach(elemento =>{
            elemento.forEach(crearUsuario);
        })
    }

    let divUsuarios = document.querySelector('.lista-usuarios');
    let divCandidatos = document.querySelector('.lista-candidatos');

    addEventosDrop(divUsuarios);
    addEventosDrop(divCandidatos);
}

const crearUsuario = (usuario) =>{
    let newUsuario = new Usuario(usuario.id, usuario.name, usuario.email, usuario.avatar, usuario.role);
    listUsuarios.nuevoUsuario(newUsuario);
    crearFilaUsuario(usuario);
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
                        <p><b>${usuario.name}</b></p>
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

}

const cerrarModal = () =>{
    const btnCerrar = document.querySelector('.btn-cerrar');
    const btnAceptar = document.querySelector('.btn-aceptar');
    const divPadreModal = divModal.parentElement;
    btnCerrar.addEventListener('click', () => {
        limpiarModal();
        modal.style.display = "none";
        divModal.innerHTML = '';
        divPadreModal.removeAttribute("style");
    });
    btnAceptar.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        let idUsuarios = [];
        let divCandidatos = document.querySelector('.lista-candidatos');
        let idPrueba = document.querySelector('.prueba').id.slice(1);
        let hijos = divCandidatos.childNodes;
        for (let i = 0; i < hijos.length; i++){
            idUsuarios.push(hijos[i].id.slice(1));
        }
        for (let j = 0; j < idUsuarios.length; j++){
            insertarUsuariosAsignados(idUsuarios[j], idPrueba);
        }
        limpiarModal();
        modal.style.display = "none";
        idUsuarios = [];
        divModal.innerHTML = '';
        divPadreModal.removeAttribute("style");
    });
    
} 



const limpiarModal = () =>{
    let divUsuarios = document.querySelector('.lista-usuarios');
    let divCandidatos = document.querySelector('.lista-candidatos');
    divUsuarios.innerHTML='';
    divCandidatos.innerHTML='';
}