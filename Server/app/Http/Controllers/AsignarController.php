<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\HumanData;
use App\Models\Valoracion;
use App\Models\Prueba;
use App\Models\Puntual;
use App\Models\Eleccion;
use App\Models\Atributes;
use App\Models\AtributesUsers;
use App\Models\UsuariosAsignados;


class AsignarController extends Controller
{
    public function getUsuariosProtegidos($id) {
        $usuarios = HumanData::select('id')->where('protection',$id)->get();
        $user = User::with(['humanosProtegidos'])
        ->whereIn('id', $usuarios)
        ->get();
        return response()->json($user,200);
    }


    public function getUsuariosAfines($id,$idprueba){
        $vecUsuarios = [];
        $idUsuarios = AsignarController::humanosAfines($idprueba, $id);
        foreach ($idUsuarios as $idUser){
            try{
                $usuario = HumanData::select('id')->where('protection',$id)->where('ID', $idUser->userID)->first();
                $datosUsuario = User::select('*')->where('id',$usuario->id)->get();
                array_push($vecUsuarios, $datosUsuario);
            }catch(\Exception $e){

            }
        }
        return response()->json($vecUsuarios,200);
    }

    public function humanosAfines($idprueba, $id){
        $atributo = AsignarController::conseguirAtributo($idprueba);
        if($atributo != null){
            $idAtributo = Atributes::select('ID')->where('name',$atributo)->first();
            $valor = AtributesUsers::select('value')
                    ->where('atributeID', $idAtributo->ID)
                    ->where('userID', $id)
                    ->first();
            $idUsuario = AtributesUsers::select('userID')->where('atributeID',$idAtributo->ID)
                                                        ->where('value', '>=', $valor->value)
                                                        ->whereNotBetween('userID', [1, 3])
                                                        ->get();
        }else{
            $idUsuario = null;
        }
        return $idUsuario;
    }

    public function conseguirAtributo($idprueba){
        $tipoPrueba = Prueba::select('tipo')->where('id',$idprueba)->first();
        if($tipoPrueba->tipo == 'Puntual'){
            $atributo = Puntual::select('habilidad')->where('idprueba', $idprueba)->first();
        }else if($tipoPrueba->tipo == 'Valoracion'){
            $atributo = Valoracion::select('habilidad')->where('idprueba', $idprueba)->first();
        }else if($tipoPrueba->tipo == 'Eleccion'){
            $atributo = Eleccion::select('habilidad')->where('idprueba', $idprueba)->first();
        }else if($tipoPrueba->tipo == 'Respuesta Libre'){
            $atributo = null;
        };
        return $atributo->habilidad;
    }

    public function insertarUsuariosAsignados(Request $req){
        $datos = [
            'idprueba' => $req->idprueba,
            'idusuario' => $req->idusuario,
        ];

        $libre = UsuariosAsignados::create($datos);
    }
}
