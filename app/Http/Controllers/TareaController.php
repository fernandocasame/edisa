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
    
    public function tareaEstudiantePendiente(Request $request){
        $data=array();
        $tarea = DB::SELECT("SELECT * FROM tarea join archivo on archivo.idarchivo = tarea.archivo_idarchivo WHERE tarea.curso_idcurso = ? AND tarea.estado = '1' ",[$request->idcurso]);
        foreach ($tarea as $key => $post) {
            $verifica = DB::SELECT("SELECT * FROM respuesta WHERE tarea_idtarea = ? AND usuario_idusuario = ?",[$post->idtarea,$request->idusuario]);
            if(!empty($verifica)){
            }else{
                array_push ($data , $post);
            }
        }
        return $data;
    }
    public function tareaEstudianteRealizada(Request $request){
        $data=array();
        $tarea = DB::SELECT("SELECT * FROM tarea WHERE curso_idcurso = ? AND estado = '1' ",[$request->idcurso]);
        foreach ($tarea as $key => $post) {
            $verifica = DB::SELECT("SELECT * FROM respuesta join tarea on tarea.idtarea = respuesta.tarea_idtarea  WHERE tarea_idtarea = ? AND usuario_idusuario = ?",[$post->idtarea,$request->idusuario]);
            if(!empty($verifica)){
                array_push ($data , $verifica[0]);
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
