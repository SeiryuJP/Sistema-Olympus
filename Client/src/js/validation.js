import { registrar } from "./http-provider";

const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirm_password = document.querySelector('.confirm_password');
const form = document.getElementsByTagName('form')[0];
const error_name = document.querySelector('.error_name');
const error_email = document.querySelector('.error_email');
const error_password = document.querySelector('.error_password');
const error_confirm_password = document.querySelector('.error_confirm-password');

export const inicializar = () =>{
    validation();
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
            registrar(usuario).then(console.log);
            event.preventDefault();
            name.value = "";
            email.value = "";
            password.value = "";
            confirm_password.value = "";
        }
    });
}

