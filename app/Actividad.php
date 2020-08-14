<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    protected $table = "actividad";
    protected $primaryKey = 'idactividad';
    protected $fillable = [
        'nombre','detalle','url','fecha_create','libro_idlibro','estado'
    ];
	public $timestamps = false;
}
