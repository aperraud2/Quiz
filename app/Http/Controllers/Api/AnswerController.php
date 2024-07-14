<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Answer;

class AnswerController extends Controller
{
    public function index($questionId)
    {
        $answers = Answer::where('question_id', $questionId)
        ->get();

        return $answers;
    }
}
