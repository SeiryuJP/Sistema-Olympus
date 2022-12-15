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
                if (result.message === 'Logged in!') {
                    const role = result.data['role'];
                    if (result.success === true && role === 'human'){
                        email.value = "";
                        password.value = "";
                        localStorage.setItem('user', JSON.stringify(result.data));
                        window.location.href = "../html/perfilHumano.html";
                    }
                    else if (result.success === true && role === 'god') {
                        email.value = "";
                        password.value = "";
                        localStorage.setItem('user', JSON.stringify(result.data));
                        window.location.href = "../html/perfilDios.html";
                    }
                }
                else {
                    const modal = document.getElementById('modalRegistro');
                    const parrafo = document.getElementById('parrafo');
                    const close = document.getElementsByClassName('close')[0];

                    modal.style.display = 'block';
                    parrafo.innerHTML = 'Ha ocurrido un error';
                    close.addEventListener('click', (event) => {
                        modal.style.display = "none";
                    });
                }   
            });
            event.preventDefault();
        }
    });
}