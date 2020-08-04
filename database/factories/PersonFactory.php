<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\Person;
use App\Models\Group;
use Faker\Generator as Faker;

$factory->define(Person::class, function (Faker $faker) {
    return [
        'first_name' => $faker->firstName,
        'last_name' => $faker->lastName,
        'email_address' => $faker->email,
        'status' => (bool)random_int(0, 1) ? 'active' : 'archived',
        'group_id' => factory(Group::class)->create()->id
    ];
});
