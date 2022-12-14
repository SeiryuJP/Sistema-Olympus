import { registrar } from "./http-provider";
import { updatePassword } from "./http-provider";

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

const validation = () => {
    form.addEventListener('submit', (event) => {
            if(!email.validity.valid){
                event.preventDefault();
            }
            if(!password.validity.valid){
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
        console.log(update);
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
