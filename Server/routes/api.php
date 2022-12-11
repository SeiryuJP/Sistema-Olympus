<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\midDios;

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

Route::post('register', [AuthController::class, 'register'])->middleware(['cors']);
Route::post('login', [AuthController::class, 'login'])->middleware(['cors']);
Route::post('logout', [AuthController::class, 'logout'])->middleware(['cors']);
Route::get('verification', [VerificationController::class, 'verificateMail']);

Route::get('users', [UserController::class, 'allUsers'])->middleware(['cors']);
