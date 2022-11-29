import { registrar } from "./http-provider";

const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirm_password = document.querySelector('.confirm_password');
const form = document.getElementsByTagName('form')[0];

export const inicializar = () =>{
    validation();
}

const validation = () => {
    form.addEventListener('submit', (event) => {
        if(!email.validity.valid || !password.validity.valid){
            if(!email.validity.valid){
               // mostrarErrorEmail();
                event.preventDefault();
            }
            if(!password.validity.valid){
                //mostrarErrorPassword();
                event.preventDefault();
            }
        }else{
            const data = new FormData(document.getElementById('registro'));
            const usuario = Object.fromEntries(data);
            registrar(usuario).then(console.log);
            event.preventDefault();
            name.value = "";
            email.value = "";
            password.value = "";
            confirm_password.value = "";
        }
    });
}

