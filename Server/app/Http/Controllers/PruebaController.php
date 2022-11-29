<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prueba;
use App\Models\Eleccion;
use App\Models\Valoracion;
use App\Models\Puntual;
use App\Models\RespLibre;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

class PruebaController extends Controller
{

    public function insertPrueba($req){

        $input = $req->all();

        $messages = [
            'max' => 'excede del tamaño máximo :max',
           ];

        $validator = Validator::make($input, [
            'destino' => 'required|int|max:100'
        ],$messages);

        if($validator->fails()){
            return response()->json($validator->errors(),400);
        }

        $datos = [
            'destino' => $req->destino,
            'iddios' => 1,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ];

        $prueba = Prueba::create($datos);
        if ($prueba){
           return $prueba;
        }
        else {
            return false;
        }
    }

    public function insertPruebaEleccion(Request $req){

        $input = $req->all();

        if($prueba = PruebaController::insertPrueba($req)){
            $messages = [
                'max' => 'excede del tamaño máximo :max',
            ];

            $validator = Validator::make($input, [
                'pregunta' => 'required|string|max:255',
                'correcta' => 'required|string|max:255',
                'incorrecta' => 'required|string|max:255',
                'habilidad' => 'required|string|max:255',
            ],$messages);

            if($validator->fails()){
                return response()->json($validator->errors(),400);
            }

            $datos = [
                'idprueba' => $prueba->id,
                'pregunta' => $req->pregunta,
                'correcta' => $req->correcta,
                'incorrecta' => $req->incorrecta,
                'habilidad' => $req->habilidad,
            ];

            $eleccion = Eleccion::create($datos);
            if ($eleccion){
                return response()->json(["success"=>true,"data"=>$eleccion, "message" => "Created"]);
            }
            else {
                Prueba::destroy($prueba->id);
            }
        }
        return response()->json(["success" => false, "message" => "Error al insertar"],202);

    }

    public function insertPruebaValoracion(Request $req){

        $input = $req->all();

        if($prueba = PruebaController::insertPrueba($req)){
            $messages = [
                'max' => 'excede del tamaño máximo :max',
            ];

            $validator = Validator::make($input, [
                'pregunta' => 'required|string|max:255',
                'habilidad' => 'required|string|max:255',
            ],$messages);

            if($validator->fails()){
                return response()->json($validator->errors(),400);
            }

            $datos = [
                'idprueba' => $prueba->id,
                'pregunta' => $req->pregunta,
                'habilidad' => $req->habilidad,
            ];

            $valoracion = Valoracion::create($datos);
            if ($valoracion){
                return response()->json(["success"=>true,"data"=>$valoracion, "message" => "Created"]);
            }
            else {
                Prueba::destroy($prueba->id);
            }
        }
        return response()->json(["success" => false, "message" => "Error al insertar"],202);

    }

    public function insertPruebaPuntual(Request $req){

        $input = $req->all();

        if($prueba = PruebaController::insertPrueba($req)){
            $messages = [
                'max' => 'excede del tamaño máximo :max',
            ];

            $validator = Validator::make($input, [
                'descripcion' => 'required|string|max:255',
                'habilidad' => 'required|string|max:255',
                'porcentaje' => 'required|int|max:100',
            ],$messages);

            if($validator->fails()){
                return response()->json($validator->errors(),400);
            }

            $datos = [
                'idprueba' => $prueba->id,
                'descripcion' => $req->descripcion,
                'habilidad' => $req->habilidad,
                'porcentaje' => $req->porcentaje,
            ];

            $puntual = Puntual::create($datos);
            if ($puntual){
                return response()->json(["success"=>true,"data"=>$puntual, "message" => "Created"]);
            }
            else {
                Prueba::destroy($prueba->id);
            }
        }
        return response()->json(["success" => false, "message" => "Error al insertar"],202);

    }

    public function insertPruebaRespLibre(Request $req){

        $input = $req->all();

        if($prueba = PruebaController::insertPrueba($req)){
            $messages = [
                'max' => 'excede del tamaño máximo :max',
            ];

            $validator = Validator::make($input, [
                'pregunta' => 'required|string|max:255',
                'palabrasclaves' => 'required|string|max:255',
                'porcentaje' => 'required|int|max:100',
            ],$messages);

            if($validator->fails()){
                return response()->json($validator->errors(),400);
            }

            $datos = [
                'idprueba' => $prueba->id,
                'pregunta' => $req->pregunta,
                'palabrasclaves' => $req->palabrasclaves,
                'porcentaje' => $req->porcentaje,
            ];

            $libre = RespLibre::create($datos);
            if ($libre){
                return response()->json(["success"=>true,"data"=>$libre, "message" => "Created"]);
            }
            else {
                Prueba::destroy($prueba->id);
            }
        }
        return response()->json(["success" => false, "message" => "Error al insertar"],202);

    }

    public function getPruebas(){
        {
            $prueba = Prueba::all();

            return response()->json($prueba,200);
        }
    }
}
