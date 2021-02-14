<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Liste extends Model
{
    use HasFactory;
    protected $table = 'list';
    protected $fillable = ['task','completed'];
    public $timestamps = false;

    function user(){
        return $this->belongsTo(User::class,'id_role');
    }
}
