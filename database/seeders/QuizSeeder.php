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
        $quiz = new Quiz;
        $quiz->name = 'User';
        $quiz->email = 'user@email.com';
        $quiz->password = bcrypt('secret');
        $quiz->save();
    }
}
