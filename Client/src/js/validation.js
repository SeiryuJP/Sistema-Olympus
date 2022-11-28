const formulario = document.getElementsByTagName('form');
const email = document.querySelector('.email');
const password = document.querySelector('password');
const confirm_password = document.querySelector('confirm-password');

export const inicializar = () =>{
    validation();
}

const validation = () => {
    formulario.addEventListener('submit', (event) => {
        if(!email.validity.valid || !password.validity.valid){
            if(!email.validity.valid){
               // mostrarErrorEmail();
                event.preventDefault();
            }
            if(!password.validity.valid){
                //mostrarErrorPassword();
                event.preventDefault();
            }
            if(password.value != confirm_password.value) {
                confirm_password.setCustomValidity("Passwords Don't Match");
                event.preventDefault();
            }
        }else{
            const dato = new FormData(formulario);
            const usuario = Object.fromEntries(dato);
            console.log(usuario);
            //conseguirUsuario(usuario)
        }
    });
}

