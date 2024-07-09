<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
            'question' => 'In Forrest Gump, what is the name of Forrest Gump and Lt. Dan fishing company?'
            ],
            [
            'question' => 'How many rules are there in the "Fight Club" from the eoponymous movie?'
            ]
    

            ];

            foreach ($questions as $question) {
                $new_question = Question::create($question);
            }
    }
}
