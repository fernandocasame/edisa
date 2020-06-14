<?php

namespace App\Http\Controllers;

use App\TipoContenido;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
class TipoContenidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipo = DB::SELECT("SELECT * FROM tipo_contenido");
        return $tipo;
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
     * @param  \App\TipoContenido  $tipoContenido
     * @return \Illuminate\Http\Response
     */
    public function show(TipoContenido $tipoContenido)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TipoContenido  $tipoContenido
     * @return \Illuminate\Http\Response
     */
    public function edit(TipoContenido $tipoContenido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TipoContenido  $tipoContenido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TipoContenido $tipoContenido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TipoContenido  $tipoContenido
     * @return \Illuminate\Http\Response
     */
    public function destroy(TipoContenido $tipoContenido)
    {
        //
    }
}
