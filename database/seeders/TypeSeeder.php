<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use DB;
use App\Models\Type;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('type')->truncate();

        $types = [
            ['name'=> 'Multiple choice'],
            ['name'=> 'Open']
            ];

            foreach ($types as $type) {
                $new_type = Type::create($type);
            }
    }
}
