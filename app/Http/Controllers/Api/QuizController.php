<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Quiz;

class QuizController extends Controller
{
    public function index()
    {

        $quizzes = Quiz::with(['category_quiz.category', 'difficulty'])
        ->get();


        return $quizzes;
    }

    public function fetchQuizWithAnswers($quizId)

    {
        $quizWithAnswers = Quiz::with('questions', 'questions.answers')->find($quizId);

        return $quizWithAnswers;

    }
}


