<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suprimento extends Model
{
    protected $table = 'suprimentos';
    protected $fillable = ['desc', 'qtde', 'obs', 'name', 'name_up'];
}
