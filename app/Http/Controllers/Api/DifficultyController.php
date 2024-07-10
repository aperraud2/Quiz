<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Difficulty;

class DifficultyController extends Controller
{
    public function index()
    {
        return Difficulty::all();
    }
}
