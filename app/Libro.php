<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Libro extends Model
{
    protected $table = "libro";
    protected $primaryKey = 'idlibro';
    protected $fillable = [
        'nombre','detalle','url','fecha_create','asignatura_idasignatura','estado'
    ];
	public $timestamps = false;
}
