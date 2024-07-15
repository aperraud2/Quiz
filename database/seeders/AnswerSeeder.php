<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Answer;

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
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 3
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 3
            ],
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 4
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 4
            ],
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 5
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 5
            ],
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 6
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 6
            ],
            [
            'name' => 'True',
            'correct' => 0,
            'question_id' => 7
            ],
            [
            'name' => 'False',
            'correct' => 1,
            'question_id' => 7
            ],
            [
            'name' => 'True',
            'correct' => 0,
            'question_id' => 8
            ],
            [
            'name' => 'False',
            'correct' => 1,
            'question_id' => 8
            ],
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 9
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 9
            ],
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 10
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 10
            ],
            [
            'name' => 'True',
            'correct' => 0,
            'question_id' => 11
            ],
            [
            'name' => 'False',
            'correct' => 1,
            'question_id' => 11
            ],
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 12
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 12
            ],
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 13
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 13
            ],
            [
            'name' => 'True',
            'correct' => 1,
            'question_id' => 14
            ],
            [
            'name' => 'False',
            'correct' => 0,
            'question_id' => 14
            ],
            [
            'name' => 'True',
            'correct' => 0,
            'question_id' => 15
            ],
            [
            'name' => 'False',
            'correct' => 1,
            'question_id' => 15
            ]
        ];
        

            foreach ($answers as $answer) {
                $new_answer = Answer::create($answer);
            }
    }
}
