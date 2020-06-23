<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoContenido extends Model
{
    protected $table = "tipo_contenido";
    protected $primaryKey = 'idtipo';
    protected $fillable = [
        'nombre','detalle','estado'
    ];
	public $timestamps = false;
}
