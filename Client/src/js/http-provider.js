const urlRegister = 'http://127.0.0.1:8000/api/register';

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