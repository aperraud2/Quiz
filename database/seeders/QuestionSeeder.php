<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use DB;
use App\Models\Question;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DB::table('questions')->truncate();

        $questions = [
            [
            'question' => 'In Forrest Gump, what is the name of Forrest Gump and Lt. Dan fishing company?',
            'type' => 2,
            'quiz_id' => 1
            ],
            [
            'question' => 'How many rules are there in the "Fight Club" from the eponymous movie?',
            'type' =>1 ,
            'quiz_id' => 1,
            ],
            [
            'question' => 'The Death Valley, in the United States, is located in California.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Edinburgh is further west than Cardiff.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'The northernmost point of Brazil is closer to ALL other countries in America than the southernmost point of Brazil.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'The westernmost point of the contiguous USA is further north than the easternmost point.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Greece is entirely south of Canada.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Croatia shares a border with Italy.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Croatia shares a border with Montenegro.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Berlin is west of Prague.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Tunis is further north than South Korea.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Norway is further north, south, east, and west than Finland.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Without using any bridges, it is possible to walk from Denmark to Sweden.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Baku is below sea level.',
            'type' =>1 ,
            'quiz_id' => 2,
            ],
            [
            'question' => 'Chongqing, the most populous city proper in the world, would be in the top 20 most populated countries if it were one.',
            'type' =>1 ,
            'quiz_id' => 2,
            ]
            ];

            foreach ($questions as $question) {
                $new_question = Question::create($question);
            }
    }
}
