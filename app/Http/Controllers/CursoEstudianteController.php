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
        $estudiantes = DB::SELECT("SELECT * FROM curso_estudiante JOIN usuario ON usuario.idusuario = curso_estudiante.usuario_idusuario WHERE curso_estudiante.codigo = ?",[$request->codigo]);
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
        //
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