<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prueba extends Model
{
    use HasFactory;

    protected $table = 'prueba';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'destino',
        'iddios'
    ];

    public function pruebaEleccion(){
        return $this->belongsTo('App\Models\Eleccion','id','idprueba');
    }
}
