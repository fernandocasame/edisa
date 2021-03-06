<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', 'AuthController@login');
Route::group(['middleware' => 'cors'],function(){
    Route::apiResource('area','AreaController');
    Route::apiResource('asignatura','AsignaturaController');
    Route::apiResource('tcontenido','TcontenidoController');
    Route::apiResource('infocontenido','ContenidoController');
    Route::apiResource('institucion','InstitucionController');
    Route::apiResource('usuario','UsuarioController');
    Route::apiResource('grupo','GrupoController');
    Route::apiResource('estudiante','EstudianteController');
    Route::apiResource('libro','LibroController');
    Route::apiResource('actividad','ActividadController');
    Route::apiResource('planificacion','PlanificacionController');
    Route::apiResource('curso','CursoController');
    Route::apiResource('archivo','ArchivoController');
    Route::apiResource('tarea','TareaController');
    Route::apiResource('cursoEstudiante','CursoEstudianteController');
    Route::apiResource('menu','MenuController');
    Route::apiResource('codigoLibro','CodigoLibrosController');
    Route::apiResource('respuesta','RespuestaController');
    Route::get('alumnos','CursoEstudianteController@alumnos');
    Route::get('tareaEstudiantePendiente','TareaController@tareaEstudiantePendiente');
    Route::get('tareaEstudianteRealizada','TareaController@tareaEstudianteRealizada');
    Route::get('password','UsuarioController@password');
    Route::get('codigo','CursoController@codigo');
    Route::get('provincias','ProvinciasController@provincias');
});
Route::group(['middleware' => 'auth.jwt'], function () {
    Route::post('/logout', 'AuthController@logout');
});