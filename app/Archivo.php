<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Archivo extends Model
{
    protected $table = "archivo";
    protected $primaryKey = 'idarchivo';
    protected $fillable = [
        'nombre', 'url', 'fecha_create', 'usuario_idusuario', 'estado'
    ];
	public $timestamps = false;
}
