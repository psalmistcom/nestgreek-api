<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'broker_id' => fake()->randomElement(['1', '2']),
            'title' => fake()->sentence(),
            'address' => fake()->address(),
            'listing_type' => fake()->randomElement(['For Sale', 'For Rent', 'Mortgage', 'For Lease']),
            'state' => fake()->country(),
            'description' => fake()->realText(),
            'isPublished' => fake()->randomElement(['1', '0']),
            'upload_img' => fake()->image(),
        ];
    }
}
