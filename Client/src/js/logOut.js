import { logOut } from "./http-provider"

export const inicializar = () =>{
    logOutFunc();
}

const logOutFunc = () => {
    document.getElementById("logOut").addEventListener("click", () => {
        const data = JSON.parse(localStorage.getItem('user'));
        console.log(data);
        window.localStorage.removeItem('user');
        window.location.href = "../index.html";
        // logOut(data).then(result => {
        //     console.log(result);
        //     if (result.success === 1){
        //         window.localStorage.removeItem('user');
        //         window.location.href = "../index.html";
        //     } 
        // });
    })
}