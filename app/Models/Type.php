<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;
    protected $table = 'type';

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
