const urlRegister = 'http://127.0.0.1:8000/api/register';
const urlLogin = 'http://127.0.0.1:8000/api/login';
const urlLogOut = 'http://127.0.0.1:8000/api/logout';
const urlUsers = 'http://127.0.0.1:8000/api/user/users';
const urlUpdatePassword = 'http://127.0.0.1:8000/api/user/update';
const urlUpdateAttributes = 'http://127.0.0.1:8000/api/user/updateattributes';
const urlGenerateUsers = 'http://127.0.0.1:8000/api/user/create';
const urlGetAttributes = 'http://127.0.0.1:8000/api/user/getattributes';

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

export const login = async (usuario) => {
    const response = await fetch(urlLogin, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export const logOut = async (usuario) => {
    const response = await fetch(urlLogOut, {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export const updatePassword = async (data) => {
    const response = await fetch(urlUpdatePassword, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export const updateAttributes = async (data) => {
    const response = await fetch(urlUpdateAttributes, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

export const generateUsers = async (data) => {
    try {
        const response = await fetch(urlGenerateUsers+'/'+data.id+'/'+data.number);
        if (!response.ok) throw ('No se pudo realizar la peticion');
        return await response.json();
    }
    catch(err) {
        throw err;
    }
}

export const getAttributes = async (id) => {
    try {
        const response = await fetch(urlGetAttributes+'/'+id);
        if (!response.ok) throw ('No se pudo realizar la peticion');
        return await response.json();
    }
    catch(err) {
        throw err;
    }
}