const urlUsuariosAfines = 'http://127.0.0.1:8000/api/asignar/listar/usuarioafin';
const urlUsuariosProtegidos = 'http://127.0.0.1:8000/api/asignar/listar/usuarioasignado';

let datos = JSON.parse(localStorage.getItem('user'));
let token = datos.token;

export const conseguirHumanosAfines = async(id, idprueba) => {
    const resp = await fetch(`${urlUsuariosAfines}/${id}/${idprueba}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        } 
    });
    const usuario = await resp.json();
    return usuario;
}

export const conseguirHumanosAsignados = async(id) => {
    const resp = await fetch(`${urlUsuariosProtegidos}/${id}` , {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        } 
    });
    const usuario = await resp.json();
    return usuario;
}