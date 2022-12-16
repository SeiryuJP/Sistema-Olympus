# Guia de uso Sistema Olympus <img style="float: right;" src="https://i.imgur.com/ODUCZpP.png" height="75">

## Para Webpack (Posicionarse en la carpeta Client)

Actualizar dependencias:

    npm install
    
Desplegar con el servidor de desarrollo:

    npm start
    
## Para Laravel (Posicionarse en la carpeta Server)

Actualizar dependencias:

    composer update
    
Crear .env:

    cp .env.example .env 
    
Regenerar la key del proyecto con:

    php artisan key:generate
    
Reemplazar las siguientes lineas en el archivo .env:

    DB_DATABASE=def
    
<br>

    MAIL_MAILER=smtp
    MAIL_HOST=smtp.gmail.com
    MAIL_PORT=587
    MAIL_USERNAME=minesweeper2077@gmail.com
    MAIL_PASSWORD=dbvkdidporwicehh
    MAIL_ENCRYPTION=null
    MAIL_FROM_ADDRESS=null
    MAIL_FROM_NAME="${APP_NAME}"

Desplegar con el servidor de desarrollo:

    php artisan serve

## Base de Datos

Crear una base de datos llamada def <br>
Importar el archivo def.sql en el administrador de MySQL (phpMyAdmin) <br>
El archivo se incluye en el .zip

## Credenciales

Todos los usuarios cuentan con la password 1234 <br><br>
Dioses : <br>
    Zeus : zeus@dios.com <br>
    Poseidon : poseidon@dios.com <br>
    Hades : hades@dios.com <br> <br>
Humanos : <br>
    seiryubtc@gmail.com <br>
    seiryujp7@gmail.com <br>

##

<img src="https://i.imgur.com/F77UMTh.jpg">
