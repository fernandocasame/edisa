<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Asignatura extends Model
{
    protected $table = "asignatura";
    protected $primaryKey = 'idasignatura';
    protected $fillable = [
        'nombre','detalle','nivel','area_idarea','estado'
    ];
	public $timestamps = false;
}
