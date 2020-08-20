<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Respuesta extends Model
{
    protected $table = "respuesta";
    protected $primaryKey = 'idrespuesta';
    protected $fillable = [
        'tarea_idtarea','nombre','url','nota','fecha_create','usuario_idusuario'
    ];
	public $timestamps = false;
}
