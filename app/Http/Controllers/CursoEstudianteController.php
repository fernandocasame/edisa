<?php

namespace App\Http\Controllers;

use App\CursoEstudiante;
use Illuminate\Http\Request;
use DB;
class CursoEstudianteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $estudiantes = DB::SELECT("SELECT * FROM curso_estudiante JOIN curso on curso.codigo = curso_estudiante.codigo  WHERE curso_estudiante.usuario_idusuario = ? AND curso.estado = '1'",[$request->idusuario]);
        return $estudiantes;
    }

    public function alumnos(Request $request)
    {
        $estudiantes = DB::SELECT("SELECT usuario.* FROM usuario join curso_estudiante on curso_estudiante.usuario_idusuario = usuario.idusuario join curso on curso.codigo = curso_estudiante.codigo   WHERE curso_estudiante.codigo = ? AND curso.estado = '1'",[$request->codigo]);
        return $estudiantes;
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
        $curso = DB::SELECT("SELECT * FROM curso WHERE codigo = ?",["$request->codigo"]);
        if(!empty($curso)){
            DB::INSERT("INSERT INTO `curso_estudiante`(`usuario_idusuario`, `codigo`) VALUES (?,?)",[$request->idusuario,"$request->codigo"]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CursoEstudiante  $cursoEstudiante
     * @return \Illuminate\Http\Response
     */
    public function show(CursoEstudiante $cursoEstudiante)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CursoEstudiante  $cursoEstudiante
     * @return \Illuminate\Http\Response
     */
    public function edit(CursoEstudiante $cursoEstudiante)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CursoEstudiante  $cursoEstudiante
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CursoEstudiante $cursoEstudiante)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CursoEstudiante  $cursoEstudiante
     * @return \Illuminate\Http\Response
     */
    public function destroy(CursoEstudiante $cursoEstudiante)
    {
        //
    }
}
