<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    protected $table = "curso";
    protected $primaryKey = 'idcurso';
    protected $fillable = [
        'nombre','paralelo','anio','usuario_idusuario','codigo','estado'
    ];
	public $timestamps = false;
}
