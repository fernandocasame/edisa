<?php

namespace App\Http\Controllers;

use App\Archivo;
use Illuminate\Http\Request;
use DB;
use Dirape\Token\Token;
class ArchivoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $archivos = DB::SELECT("SELECT * FROM archivo WHERE usuario_idusuario = ? AND estado = '1'",[$request->idusuario]);
        return $archivos;
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
        $idusuario = $request->idusuario;
        $file = $request->file('archivo');
        $extension = $request->file('archivo')->extension();
        $ruta = public_path('./archivos');
        $codigo = uniqid().'.'.$extension;
        $file->move($ruta,$codigo);
        DB::INSERT("INSERT INTO `archivo`(`nombre`, `url`, `usuario_idusuario`) VALUES (?,?,?)",[$file->getClientOriginalName(),$codigo,$idusuario]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Archivo  $archivo
     * @return \Illuminate\Http\Response
     */
    public function show(Archivo $archivo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Archivo  $archivo
     * @return \Illuminate\Http\Response
     */
    public function edit(Archivo $archivo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Archivo  $archivo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Archivo $archivo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Archivo  $archivo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Archivo $archivo)
    {
        $archivo = Archivo::find($archivo->idarchivo)->update(['estado' => '0']);
        return $archivo;
    }
}
