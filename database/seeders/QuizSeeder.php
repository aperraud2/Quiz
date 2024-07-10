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
            'difficulty' => 2      
            ],            
            [
            'name' => "Geography - True or False",
            'description' => 'Quiz about geography',
            'difficulty' => 3      
            ],
            [
            'name' => 'History Quiz',
            'description' => 'Quiz about history',
            'difficulty' => 2      
            ],            
            [
            'name' => '1981',
            'description' => 'Year 1981',
            'difficulty' => 4      
            ]
            ];

            foreach ($quizs as $quiz) {
                $new_quiz = Quiz::create($quiz);
            }
    }
}
