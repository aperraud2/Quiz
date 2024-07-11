<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category_Quiz extends Model
{
    use HasFactory;
    protected $table = 'category_quiz';

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
