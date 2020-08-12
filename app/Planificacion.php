<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Planificacion extends Model
{
    protected $table = "planificacion";
    protected $primaryKey = 'idplanificacion';
    protected $fillable = [
        'nombre','detalle','url','fecha_create','asignatura_idasignatura'
    ];
	public $timestamps = false;
}
