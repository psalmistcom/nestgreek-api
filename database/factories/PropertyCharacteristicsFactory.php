<?php

namespace Database\Factories;

use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class PropertyCharacteristicsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'property_id' => Property::all()->random()->id,
            'price' => fake()->numberBetween(2000000, 100000000),
            'bedrooms' => fake()->randomElement([3, 5, 2, 6]),
            'bathrooms' => fake()->randomElement([3, 5, 2, 6]),
            'sqft' => fake()->randomElement([120, 100, 150, 360]),
            'property_status' => fake()->randomElement(['Sold', 'On Sale', 'On Hold']),
            'property_type' => fake()->randomElement(['Landed Property', 'Housing']),
        ];
    }
}
