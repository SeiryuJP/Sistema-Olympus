import { registrar, updatePassword, updateAttributes } from "./http-provider";

const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const new_password = document.querySelector('.new_password');
const confirm_password = document.querySelector('.confirm_password');
const form = document.getElementsByTagName('form')[0];
const error_name = document.querySelector('.error_name');
const error_email = document.querySelector('.error_email');
const error_password = document.querySelector('.error_password');
const error_confirm_password = document.querySelector('.error_confirm-password');

export const inicializar = () => {
    validation();
}

export const initUpdatePass = () => {
    validUpdate();
}

export const initUpdateAttributes = () => {
    updateAttr();
}

const validation = () => {
    form.addEventListener('submit', (event) => {
        limpiarErrorRegistro();
            if(!name.validity.valid){
                mostrarErrorRegistro();
                event.preventDefault();
            }
            if(!email.validity.valid){
                mostrarErrorRegistro();
                event.preventDefault();
            }
            if(!password.validity.valid){
                mostrarErrorRegistro();
                event.preventDefault();
            }
            if(!confirm_password.validity.valid){
                mostrarErrorRegistro();
                event.preventDefault();
            }else{
            const data = new FormData(document.getElementById('registro'));
            const usuario = Object.fromEntries(data);
            usuario["role"] = "human";
            registrar(usuario).then(result => {
                const modal = document.getElementById('modalRegistro');
                const parrafo = document.getElementById('parrafo');
                const close = document.getElementsByClassName('close')[0];
                if (result.success === true){
                    parrafo.innerHTML = 'Cuenta registrada correctamente, porfavor verifique su correo';
                    modal.style.display = 'block';
                    close.addEventListener('click', (event) => {
                        modal.style.display = "none";
                        window.location.href = "../index.html";
                    }) 
                    name.value = "";
                    email.value = "";
                    password.value = "";
                    confirm_password.value = "";
                }
                else {
                    modal.style.display = 'block';
                    parrafo.innerHTML = 'Ha ocurrido un error';
                    close.addEventListener('click', (event) => {
                        modal.style.display = "none";
                    }) 
                }
            });
            event.preventDefault();
        }
    });

    const mostrarErrorRegistro = () =>{
        if(name.validity.valueMissing){
            error_name.textContent = 'Introduzca un nombre de usuario';
        }
        if(email.validity.valueMissing || email.validity.patternMismatch){
            error_email.textContent = 'Introduzca el email correctamente';
        }
        if(password.validity.valueMissing){
            error_password.textContent = 'Introduzca una contraseña';
        }
        if(confirm_password.validity.valueMissing){
            error_confirm_password.textContent = 'Introduzca la confirmación de contraseña';
        }
    }

    const limpiarErrorRegistro = () => {
        error_name.textContent = '';
        error_email.textContent = '';
        error_password.textContent = '';
        error_confirm_password.textContent ='';
    }
}

const validUpdate = () => {
    form.addEventListener('submit', (event) => {
        if(!password.validity.valid){
            event.preventDefault();
        }else{
        const locale = JSON.parse(localStorage.getItem('user'));
        const data = new FormData(document.getElementById('registro'));
        const update = Object.fromEntries(data);
        update['id'] = locale.id;
        updatePassword(update).then(result => {
            const modal = document.getElementById('modalRegistro');
            const parrafo = document.getElementById('parrafo');
            const close = document.getElementsByClassName('close')[0];
            if (result.success === true){
                parrafo.innerHTML = 'Contraseña actualizada correctamente';
                modal.style.display = 'block';
                close.addEventListener('click', (event) => {
                    modal.style.display = "none";
                }) 
                password.value = "";
                new_password.value = "";
                confirm_password.value = "";
            }
        });
        event.preventDefault();
    }
});
}

const updateAttr = () => {
    form.addEventListener('submit', (event) => {
        const data = new FormData(document.getElementById('registro'));
        const newAttributes = Object.fromEntries(data);
        const locale = JSON.parse(localStorage.getItem('user'));
        newAttributes['id'] = locale.id;
        updateAttributes(newAttributes).then(result => {
            const modal = document.getElementById('modalRegistro');
            const parrafo = document.getElementById('parrafo');
            const close = document.getElementsByClassName('close')[0];
            if (result.success === true){
                parrafo.innerHTML = 'Atributos actualizados correctamente';
                modal.style.display = 'block';
                close.addEventListener('click', (event) => {
                    modal.style.display = "none";
                }); 
            }
        });
        event.preventDefault()
    });
}

