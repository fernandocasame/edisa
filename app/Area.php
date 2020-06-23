<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = "area";
    protected $primaryKey = 'idarea';
    protected $fillable = [
        'nombre','detalle','fecha_create','estado'
    ];
	public $timestamps = false;
}
