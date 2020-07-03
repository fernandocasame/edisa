<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = "usuario";
    protected $primaryKey = 'idusuario';
    protected $fillable = [
        'nombre','apellido','cedula','email','password','telefono','estado','genero','institucion_idinstitucion','grupo_idgrupo'
    ];
	public $timestamps = false;
}
