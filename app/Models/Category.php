<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';

    public function category_quiz()
    {
        return $this->hasMany(Category_Quiz::class);
    }
    
}
