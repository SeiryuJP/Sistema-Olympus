<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class VerificationMail extends Controller{
    public static function sendMail($email){
        $data = [
            'nombreUsuario' => 'prueba',
            'email' => $email,
        ];

        $email = $email;
        $nombre = 'prueba';

        //Le mando la vista 'welcome' como cuerpo del correo.
        Mail::send('correo', $data, function($message) use ($email)
        {
            $message->to($email)->subject('Ejemplo de envío');
            $message->from('minesweeper2077@gmail.com', 'Administrador Maestro de Sistema Olympus');
        });

        return response()->json(["enviado" => true, "mensaje"=>"Enviado"],200);
    }
}
