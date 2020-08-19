<?php

namespace App\Http\Controllers;

use App\Tarea;
use Illuminate\Http\Request;
use DB;
class TareaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $tarea = DB::SELECT("SELECT * FROM tarea WHERE curso_idcurso = ? AND estado = '1' ",[$request->idcurso]);
        return $tarea;
    }
    
    public function tareaEstudiante(Request $request){
        $tarea = DB::SELECT("SELECT * FROM tarea WHERE curso_idcurso = ? AND estado = '1' ",[$request->idcurso]);
        foreach ($tarea as $key) {
            $verifica = DB::SELECT("SELECT * FROM respuesta WHERE tarea_idtarea = ? AND usuario_idusuario = ?",[$key->idtarea,$request->idusuario]);
            if(!empty($verifica)){
                $data['items'][$key] = [
                    'tarea' => $tarea,
                ];
            }else{

            }
        }
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!empty($request->idarea)){
            $tarea = Tarea::find($request->idarea)->update($request->all());
            return $tarea;
        }else{
            $tarea = new Tarea($request->all());
            $tarea->save();
            return $tarea;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tarea  $tarea
     * @return \Illuminate\Http\Response
     */
    public function show(Tarea $tarea)
    {
        return $tarea;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tarea  $tarea
     * @return \Illuminate\Http\Response
     */
    public function edit(Tarea $tarea)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tarea  $tarea
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tarea $tarea)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tarea  $tarea
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tarea $tarea)
    {
        $tarea = Tarea::find($tarea->idarea)->update(['estado' => '0']);
        return $tarea;
    }
}
