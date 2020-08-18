<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    protected $table = "tarea";
    protected $primaryKey = 'idtarea';
    protected $fillable = [
        'detalle', 'fecha_inicio', 'fecha_fin', 'archivo_idarchivo', 'actividad_idactividad', 'curso_idcurso'
    ];
	public $timestamps = false;
}
