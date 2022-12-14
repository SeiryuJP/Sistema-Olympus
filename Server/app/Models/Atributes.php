<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atributes extends Model
{
    use HasFactory;

    protected $table = 'atributes'; //Por defecto tomaría la tabla 'personas'.
    protected $primaryKey = 'ID';  //Por defecto el campo clave es 'id', entero y autonumérico.
    public $incrementing = true; //Para indicarle que la clave no es autoincremental.
    protected $keyType = 'integer';   //Indicamos que la clave no es entera.
   // public $timestamps = false;  

    protected $fillable = [
        'name',
    ];

    // public function atributos(){
    //     return $this->hasMany('\App\Models\AtributesUsers','dfgdfg','dfgdfg');
    //     //return "hola";
    // }

}
