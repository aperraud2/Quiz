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
            ],
            [
            'question' => 'In France, the first round of the presidential election took place on April 26, 1981. Among all the candidates, 3 have been or will one day be elected French president.
            Among these four Presidents of the French Republic, which one was not a candidate in 1981?',
            'type' =>1 ,
            'quiz_id' => 4,
            ],
            [
            'question' => 'Who became the 40th President of the United States of America in 1981?',
            'type' =>1 ,
            'quiz_id' => 4,
            ],
            [
            'question' => 'Belize and Antigua and Barbuda gained independence on September 21 and November 1, respectively.
            But from which country?',
            'type' =>1 ,
            'quiz_id' => 4,
            ],
            [
            'question' => 'Which of these celebrities born in 1981 is not from the US?',
            'type' =>1 ,
            'quiz_id' => 4,
            ],
            [
            'question' => 'On February 23, there was an attempted military coup in Spain led by Colonel Antonio Tejero, who, along with his coup plotters, stormed the Spanish parliament and took the deputies hostage, all filmed by Spanish television.
            The King of Spain, as head of the armed forces, personally intervenes by calling the garrison captains not to take part in the coup and plays a major role in the failure of the putsch.
            But who is the King of Spain?',
            'type' =>1 ,
            'quiz_id' => 4,
            ],
            [
            'question' => 'Which road safety device was marketed for the first time in Europe in 1981?',
            'type' =>1 ,
            'quiz_id' => 4,
            ],
            [
            'question' => 'Which film won the Oscar for Best Picture that year?',
            'type' =>1 ,
            'quiz_id' => 4,
            ],            
            [
            'question' => 'Which Czech city was created by the German occupying forces on January 1, 1943, by merging two pre-existing towns?',
            'type' =>1 ,
            'quiz_id' => 5,
            ],
            [
            'question' => 'Which of these cities was called Frývaldov until 1948?',
            'type' =>1 ,
            'quiz_id' => 5,
            ],
            [
            'question' => 'Which of these Czech cities does not exist?',
            'type' =>1 ,
            'quiz_id' => 5,
            ]
            ];

            foreach ($questions as $question) {
                $new_question = Question::create($question);
            }
    }
}
