<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Institucion extends Model
{
    protected $table = "institucion";
    protected $primaryKey = 'idinstitucion';
    protected $fillable = [
        'nombre','detalle','region','idprovincia','idcanton','idparroquia','estado'
    ];
	public $timestamps = false;
}
