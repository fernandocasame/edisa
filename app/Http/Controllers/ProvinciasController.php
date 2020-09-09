<?php

namespace App\Http\Controllers;

use App\Provincias;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProvinciasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    
    public function provincias(){
        $json = File::get("provincias.json");
        return $json;
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
     * @param  \App\Provincias  $provincias
     * @return \Illuminate\Http\Response
     */
    public function show(Provincias $provincias)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Provincias  $provincias
     * @return \Illuminate\Http\Response
     */
    public function edit(Provincias $provincias)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Provincias  $provincias
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Provincias $provincias)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Provincias  $provincias
     * @return \Illuminate\Http\Response
     */
    public function destroy(Provincias $provincias)
    {
        //
    }
}
