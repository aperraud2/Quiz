<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
            'name' => 'Movies',
            'description' => 'Quiz about movies'        
            ]

            ];

            foreach ($quizs as $quiz) {
                $new_quiz = Quiz::create($quiz);
            }
    }
}
