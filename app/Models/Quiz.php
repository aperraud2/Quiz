<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $table = 'quiz';

    public function question()
    {
        return $this->hasMany(Question::class);
    }

    public function difficulty()
    {
        return $this->hasOne(Difficulty::class);
    }

    public function user_quiz()
    {
        return $this->hasOne(User_Quiz::class);
    }

    public function category_quiz()
    {
        return $this->hasOne(Category_Quiz::class);
    }
}
