import { login } from "./http-provider";

const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.getElementsByTagName('form')[0];

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
            const data = new FormData(document.getElementById('login'));
            const usuario = Object.fromEntries(data);
            login(usuario).then(result => {
                if (result.success === true){
                    window.location.href = "";
                }
                else {
                    console.log('fallo');
                }
            });
            event.preventDefault();
            email.value = "";
            password.value = "";
        }
    });
}