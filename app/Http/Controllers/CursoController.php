<?php

namespace App\Http\Controllers;

use App\Curso;
use Illuminate\Http\Request;
use DB;
use Dirape\Token\Token;
class CursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $curso = DB::SELECT("SELECT * FROM curso WHERE estado = '1' AND usuario_idusuario = ? ORDER BY fecha_create DESC",[$request->idusuario]);
        return $curso;
    }

    public function codigo(){
        $codigo = (new Token())->Unique('curso', 'codigo', 8);
        $data=[
            'codigo'=>$codigo
        ];
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
        if(!empty($request->idcurso)){
            $curso = Curso::find($request->idcurso)->update($request->all());
            return $curso;
        }else{
            $curso = new Curso($request->all());
            $curso->save();
            return $curso;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Curso  $curso
     * @return \Illuminate\Http\Response
     */
    public function show(Curso $curso)
    {
        return $curso;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Curso  $curso
     * @return \Illuminate\Http\Response
     */
    public function edit(Curso $curso)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Curso  $curso
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Curso $curso)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Curso  $curso
     * @return \Illuminate\Http\Response
     */
    public function destroy(Curso $curso)
    {
        $curso = Curso::find($curso->idcurso)->update(['estado' => '0']);
        return $curso;
    }
}
