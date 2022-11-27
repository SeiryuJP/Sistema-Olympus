<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eleccion extends Model
{
    use HasFactory;

    protected $table = 'eleccion';
    protected $primaryKey = 'idprueba';
    public $incrementing = false;
    protected $keyType = 'int';
    public $timestamps = false;

    protected $fillable = [
        'pregunta',
        'correcta',
        'incorrecta',
        'habilidad',
        'valor'
    ];

    public function prueba(){
        return $this->belongsTo('App\Models\Prueba', 'idprueba', 'id');
    }
}
