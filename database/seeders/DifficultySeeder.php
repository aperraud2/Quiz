<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use DB;
use App\Models\Difficulty;

class DifficultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('difficulty')->truncate();

        $difficulties = [
            ['name'=> 'Very Easy'],
            ['name'=> 'Easy'],
            ['name'=> 'Medium'],
            ['name'=> 'Hard'],
            ['name'=> 'Very Hard'],
            ];

            foreach ($difficulties as $difficulty) {
                $new_difficulty = Difficulty::create($difficulty);
            }
    }
}
