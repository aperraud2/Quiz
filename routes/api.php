<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware('auth')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/quizzes', [App\Http\Controllers\Api\QuizController::class, 'index']);
Route::get('/difficulties', [App\Http\Controllers\Api\DifficultyController::class, 'index']);
Route::get('/categories', [App\Http\Controllers\Api\CategoryController::class, 'index']);
Route::get('/users', [App\Http\Controllers\Api\UserController::class, 'index']);
Route::get('/answers/{questionId}', [App\Http\Controllers\Api\AnswerController::class, 'index']);
Route::get('/questions/{quizId}', [App\Http\Controllers\Api\QuestionController::class, 'index']);
Route::get('/quiz/{quizId}', [App\Http\Controllers\Api\QuizController::class, 'fetchQuizWithAnswers']);