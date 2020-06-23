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
        $tipo = DB::SELECT("SELECT * FROM tipo_contenido WHERE estado = '1' ORDER BY fecha_create DESC");
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
        if(!empty($request->idtipo)){
            $contenido = TipoContenido::find($request->idtipo)->update($request->all());
            return $contenido;
        }else{
            $contenido = new TipoContenido($request->all());
            $contenido->save();
            return $contenido;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TipoContenido  $tipoContenido
     * @return \Illuminate\Http\Response
     */
    public function show(TipoContenido $tipoContenido)
    {
        return $tipoContenido;
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
        $tipoContenido = TipoContenido::find($tipoContenido->idtipo);
        return $tipoContenido;
    }
}
