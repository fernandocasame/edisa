<?php

namespace App\Http\Controllers;

use App\Tcontenido;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;
class TcontenidoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipo = DB::SELECT("SELECT * FROM tipocontenido WHERE estado = '1' ORDER BY fecha_create DESC");
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
            $contenido = Tcontenido::find($request->idtipo)->update($request->all());
            return $contenido;
        }else{
            $contenido = new Tcontenido($request->all());
            $contenido->save();
            return $contenido;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tcontenido  $tcontenido
     * @return \Illuminate\Http\Response
     */
    public function show(Tcontenido $tcontenido)
    {
        return $tcontenido;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Tcontenido  $tcontenido
     * @return \Illuminate\Http\Response
     */
    public function edit(Tcontenido $tcontenido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tcontenido  $tcontenido
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tcontenido $tcontenido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tcontenido  $tcontenido
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tcontenido $tcontenido)
    {
        $tcontenido = Tcontenido::find($tcontenido->idtipo)->update(['estado' => '0']);
        return $tcontenido;
    }
}
