<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Difficulty extends Model
{
    use HasFactory;
    protected $table = 'difficulty';

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }
}
