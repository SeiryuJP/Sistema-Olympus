const urlCrearEleccion = 'http://127.0.0.1:8000/api/prueba/eleccion/crear';
const urlCrearValoracion = 'http://127.0.0.1:8000/api/prueba/valoracion/crear';
const urlCrearPuntual = 'http://127.0.0.1:8000/api/prueba/puntual/crear';


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

export {
    crearPruebaEleccion,
    crearPruebaValoracion,
    crearPruebaPuntual
}