<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\midDios;
use App\Http\Controllers\AsignarController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->prefix('prueba')->group(function () {

    Route::post('eleccion/crear', [PruebaController::class,'insertPruebaEleccion'])->middleware(['midDios']);

    Route::post('valoracion/crear', [PruebaController::class,'insertPruebaValoracion'])->middleware(['midDios']);

    Route::post('puntual/crear', [PruebaController::class,'insertPruebaPuntual'])->middleware(['midDios']);

    Route::post('resplibre/crear', [PruebaController::class,'insertPruebaRespLibre'])->middleware(['midDios']);

    Route::get('listar', [PruebaController::class,'getPruebas'])->middleware(['midDios']);

    Route::delete('borrar/{id}', [PruebaController::class,'deletePrueba'])->middleware(['midDios']);

});

Route::middleware('auth:sanctum')->prefix('asignar')->group(function () {

    Route::get('listar/usuariosdios/{id}', [AsignarController::class,'getUsuariosDios']);

    Route::get('listar/usuarioprotegido/{id}/{idprueba}', [AsignarController::class,'getUsuariosProtegidos']);

    Route::get('listar/usuarioafin/{id}/{idprueba}', [AsignarController::class,'getUsuariosAfines']);

    Route::post('asignarprueba', [AsignarController::class,'insertarUsuariosAsignados']);

    Route::get('listar/usuariosasignados/{idprueba}', [AsignarController::class,'getUsuariosAsignados']);
});

Route::prefix('user')->group(function () {
    Route::put('update', [UserController::class, 'updateUser'])->middleware(['cors']);
    Route::put('updateattributes', [UserController::class, 'updateAttributes']);
    Route::get('create/{id}/{number}', [UserController::class, 'createUsers']);
    Route::get('getattributes/{id}', [UserController::class, 'getAttributes']);
});

Route::post('register', [AuthController::class, 'register'])->middleware(['cors']);
Route::post('login', [AuthController::class, 'login'])->middleware(['cors']);
Route::post('logout', [AuthController::class, 'logout']);
Route::get('verification', [VerificationController::class, 'verificateMail']);
