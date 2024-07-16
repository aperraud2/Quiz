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
            ],
            [
            'name' => 'François Mitterrand',
            'correct' => 0,
            'question_id' => 16
            ],
            [
            'name' => 'Valéry Giscard d\'Estaing',
            'correct' => 0,
            'question_id' => 16
            ],
            [
            'name' => 'Georges Pompidou',
            'correct' => 1,
            'question_id' => 16
            ],
            [
            'name' => 'Jacques Chirac',
            'correct' => 0,
            'question_id' => 16
            ],
            [
            'name' => 'Jimmy Carter',
            'correct' => 0,
            'question_id' => 17
            ],
            [
            'name' => 'Ronald Reagan',
            'correct' => 1,
            'question_id' => 17
            ],
            [
            'name' => 'Gerald Ford',
            'correct' => 0,
            'question_id' => 17
            ],
            [
            'name' => 'Lyndon B. Johnson',
            'correct' => 0,
            'question_id' => 17
            ],
            [
            'name' => 'United Kingdom',
            'correct' => 1,
            'question_id' => 18
            ],
            [
            'name' => 'France',
            'correct' => 0,
            'question_id' => 18
            ],
            [
            'name' => 'Netherlands',
            'correct' => 0,
            'question_id' => 18
            ],
            [
            'name' => 'United States',
            'correct' => 0,
            'question_id' => 18
            ],
            [
            'name' => 'Jessica Alba',
            'correct' => 0,
            'question_id' => 19
            ],
            [
            'name' => 'Justin Timberlake',
            'correct' => 0,
            'question_id' => 19
            ],
            [
            'name' => 'Pitbull',
            'correct' => 1,
            'question_id' => 19
            ],
            [
            'name' => 'Alicia Keys',
            'correct' => 0,
            'question_id' => 19
            ],
            [
            'name' => 'Juan Carlos I',
            'correct' => 1,
            'question_id' => 20
            ],
            [
            'name' => 'Felipe V',
            'correct' => 0,
            'question_id' => 20
            ],
            [
            'name' => 'Alfonso XIII',
            'correct' => 0,
            'question_id' => 20
            ],
            [
            'name' => 'Juan IV',
            'correct' => 0,
            'question_id' => 20
            ],
            [
            'name' => 'Fog lights',
            'correct' => 0,
            'question_id' => 21
            ],
            [
            'name' => 'Seat belt',
            'correct' => 0,
            'question_id' => 21
            ],
            [
            'name' => 'Child car seat',
            'correct' => 0,
            'question_id' => 21
            ],
            [
            'name' => 'Airbag',
            'correct' => 1,
            'question_id' => 21
            ],
            [
            'name' => 'Raging Bull',
            'correct' => 0,
            'question_id' => 22
            ],
            [
            'name' => 'Ordinary People',
            'correct' => 1,
            'question_id' => 22
            ],
            [
            'name' => 'The Elephant Man',
            'correct' => 0,
            'question_id' => 22
            ],
            [
            'name' => 'Coal Miner\'s Daughter',
            'correct' => 0,
            'question_id' => 22
            ]            
        ];
        

            foreach ($answers as $answer) {
                $new_answer = Answer::create($answer);
            }
    }
}
