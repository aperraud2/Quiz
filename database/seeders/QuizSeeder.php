<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use DB;
use App\Models\Quiz;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('quiz')->truncate();

        $quizs = [
            [
            'name' => 'Movies Quiz',
            'description' => 'Quiz about movies',
            'difficulty_id' => 2,
            'image' => "/images/moviequiz.jpg"     
            ],            
            [
            'name' => "Geography - True or False",
            'description' => 'Test your knowledge of world geography with this true or false quiz ',
            'difficulty_id' => 3,     
            'image' => "/images/quiz_geographytrueorfalse.png"     
            ],
            [
            'name' => 'History Quiz',
            'description' => 'Quiz about history',
            'difficulty_id' => 2,      
            'image' => "/images/historyquiz.jpg"
            ],            
            [
            'name' => '1981',
            'description' => 'How well do you know the events that took place in 1981?',
            'difficulty_id' => 4,
            'image' => "/images/1981quiz.JPG"
            ],
            [
            'name' => 'Česko',
            'description' => 'How well do you the Czech Republic?',
            'difficulty_id' => 4,
            'image' => "/images/quizczechia.JPG"
            ]
            ];

            foreach ($quizs as $quiz) {
                $new_quiz = Quiz::create($quiz);
            }
    }
}
