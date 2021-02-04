<?php
namespace Database\Seeders;

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersSeeder extends Seeder
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
                "name" => "admin",
                "email" => "admin@gmail.com",
                "password" => bcrypt('admin'),
                "id_role" => "1",
            ],

            [
                "id" => 2,
                "name" => "user1",
                "email" => "user1@gmail.com",
                "password" => bcrypt('user1'),
                "id_role" => "2",
            ],

            [
                "id" => 3,
                "name" => "user2",
                "email" => "user2@gmail.com",
                "password" => bcrypt('user2'),
                "id_role" => "2",
            ],

            [
                "id" => 4,
                "name" => "user3",
                "email" => "user3@gmail.com",
                "password" => bcrypt('user3'),
                "id_role" => "2",
            ]
        ];

        DB::table('users')->insert(
            $array
        );
    }
}
