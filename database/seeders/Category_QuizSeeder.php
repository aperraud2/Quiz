<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use App\Models\Category_Quiz;

class Category_QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('category_quiz')->truncate();

        $categories_quiz = [
        [
        'quiz_id' => 1,
        'category_id' => 6
        ],
        [
        'quiz_id' => 2,
        'category_id' => 3
        ],        
        [
        'quiz_id' => 3,
        'category_id' => 2
        ],
        [
        'quiz_id' => 4,
        'category_id' => 2
        ]

        ];

        foreach ($categories_quiz as $category_quiz) {
            $new_category_quiz = Category_Quiz::create($category_quiz);
        }
    }
}
