# Sistema-Olympus

## Para Webpack

    npm install
    
Si lo quieres desplegar con el servidor de desarrollo:

    npm start
    
## Para Laravel

    composer update
    
Tendremos que regenerar la key del proyecto con:

    cp .env.example .env           
    php artisan key:generate

Si lo quieres desplegar con el servidor de desarrollo:

    php artisan serve
