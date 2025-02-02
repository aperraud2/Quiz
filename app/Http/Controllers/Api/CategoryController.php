<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {

            $categories = Category::with(['category_quiz.category'])
            ->get();
    
            return $categories;
    }
}
