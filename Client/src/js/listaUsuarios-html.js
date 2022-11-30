import { verUsuarios } from "./http-provider";

let tBody = document.querySelector('tbody');

export const init = async() => {
    const usuarios = await verUsuarios();
    console.log(usuarios);
    usuarios.forEach(crearFilaUsuarios);
}

const crearFilaUsuarios = (usuario) => {
    const html = `
        <td scope="col"> ${usuario.ID} </td>
        <td scope="col"> ${usuario.name} </td>
        <td scope="col"> ${usuario.email} </td>
        <td scope="col"> ${usuario.role} </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tBody.appendChild(tr);
}