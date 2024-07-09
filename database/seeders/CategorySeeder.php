<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->truncate();

        $categories = [
        ['name'=> 'Arts'],
        ['name'=> 'History'],
        ['name'=> 'Geography'],
        ['name'=> 'Science'],
        ['name'=> 'Sports'],
        ['name'=> 'Movies'],
        ];

        foreach ($categories as $category) {
            $new_category = Category::create($category);
        }
    }
}
