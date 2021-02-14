<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = [
            [
                "id" => 1,
                "task" => "Faire ceci",
                "completed" => false,
                "description" => "description",
                "user_id" => 1,
                "priorite" => 'faible',
                "deadline"=>"2021-11-14"
            ],
            [
                "id" => 2,
                "task" => "Faire ça",
                "completed" => false,
                "description" => "description",
                "user_id" => 1,
                "priorite" => 'haute',
                "deadline"=>"2021-12-14"
            ],
        ];

        DB::table('list')->insert(
            $array
        );
    }
}
