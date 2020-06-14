<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = "area";
    protected $primaryKey = 'idarea';
    protected $fillable = [
        'nombre'
    ];
	public $timestamps = false;
}
