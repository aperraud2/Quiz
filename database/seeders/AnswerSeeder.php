<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('answers')->truncate();

        $answers = [
            [
            'name' => 'Bubba Gump Shrimp Company',
            'correct' => 1,  
            'question_id' => 1    
            ],
            [
            'name' => '3',
            'correct' => 0,
            'question_id' => 2
            ],
            [
            'name' => '4',
            'correct' => 0, 
            'question_id' => 2
            ],
            [
            'name' => '6',
            'correct' => 0,
            'question_id' => 2 
            ],
            [
            'name' => '8',
            'correct' => 1,
            'question_id' => 2 
            ],
            ];

            foreach ($answers as $answer) {
                $new_answer = Answer::create($answer);
            }
    }
}
