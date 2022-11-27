const urlCRUD = 'http://127.0.0.1:8000/api/prueba/eleccion/crear';


const crearPruebaEleccion = async(prueba) => {
    const resp = await fetch(urlCRUD, {
        method: 'POST',
        body: JSON.stringify(prueba),
        headers: {
            'Content-Type': 'application/json' //Decimos al backend que la información que mando es JSON
        }
    });
    return await resp.json();
}

export {
    crearPruebaEleccion
}