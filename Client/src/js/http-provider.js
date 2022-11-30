const urlRegister = 'http://127.0.0.1:8000/api/register';
const urlUsers = 'http://127.0.0.1:8000/api/users';

export const registrar = async (usuario) => {
    const response = await fetch(urlRegister, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export const verUsuarios = async () => {
    try {
        const response = await fetch(urlUsers);
        if (!response.ok) throw ('No se pudo realizar la peticion');
        const usuario = await response.json();
        return usuario;
    }
    catch(err) {
        throw err;
    }
}