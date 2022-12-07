const urlCrearEleccion = 'http://127.0.0.1:8000/api/prueba/eleccion/crear';
const urlCrearValoracion = 'http://127.0.0.1:8000/api/prueba/valoracion/crear';
const urlCrearPuntual = 'http://127.0.0.1:8000/api/prueba/puntual/crear';
const urlCrearRespLibre = 'http://127.0.0.1:8000/api/prueba/resplibre/crear';
const urlListPruebas = 'http://127.0.0.1:8000/api/prueba/listar';
const urlBorrarPrueba = 'http://127.0.0.1:8000/api/prueba/borrar';

export const obtenerListaPruebas = async() => {
    const resp = await fetch(urlListPruebas);
    const prueba = await resp.json();
    return prueba;
}

export const borrarPrueba = async(id) => {
    const resp = await fetch(`${urlBorrarPrueba}/${id}`, {
        method: 'DELETE'   
    });
    return await resp.json();
}

const crearPruebaEleccion = async(prueba) => {
    const resp = await fetch(urlCrearEleccion, {
        method: 'POST',
        body: JSON.stringify(prueba),
        headers: {
            'Content-Type': 'application/json' //Decimos al backend que la información que mando es JSON
        }
    });
    return await resp.json();
}

const crearPruebaValoracion = async(prueba) => {
    const resp = await fetch(urlCrearValoracion, {
        method: 'POST',
        body: JSON.stringify(prueba),
        headers: {
            'Content-Type': 'application/json' 
        }
    });
    return await resp.json();
}

const crearPruebaPuntual = async(prueba) => {
    const resp = await fetch(urlCrearPuntual, {
        method: 'POST',
        body: JSON.stringify(prueba),
        headers: {
            'Content-Type': 'application/json' 
        }
    });
    return await resp.json();
}

const crearPruebaRespuestaLibre = async(prueba) => {
    const resp = await fetch(urlCrearRespLibre, {
        method: 'POST',
        body: JSON.stringify(prueba),
        headers: {
            'Content-Type': 'application/json' 
        }
    });
    return await resp.json();
}

export {
    crearPruebaEleccion,
    crearPruebaValoracion,
    crearPruebaPuntual,
    crearPruebaRespuestaLibre
}