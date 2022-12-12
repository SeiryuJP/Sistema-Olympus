const data = JSON.parse(localStorage.getItem('user'));
const attributes = data.attributes;
const fate = data.fate;
const fateP = document.querySelector('.fate');

let tBody = document.querySelector('tbody');

export const init = () => {
    crearFilaAtributos(attributes);
}

export const initFate = () => {
    agregarDestino();
}

const crearFilaAtributos = (attributes) => {
    const html = `
        <td scope="col"> ${attributes[0].value} </td>
        <td scope="col"> ${attributes[1].value} </td>
        <td scope="col"> ${attributes[2].value} </td>
        <td scope="col"> ${attributes[3].value} </td>
        <td scope="col"> ${attributes[4].value} </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tBody.appendChild(tr);
}

const agregarDestino = () => {
    fateP.innerHTML = `Tu destino: ${fate}`;
}