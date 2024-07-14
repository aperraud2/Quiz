<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Question;

class QuestionController extends Controller
{
    public function index($quizId)
    {
        $questions = Question::where('quiz_id', $quizId)
        ->get();

        return $questions;
    }

}
