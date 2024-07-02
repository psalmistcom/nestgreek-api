<?php

use App\Enums\PropertyStatusEnum;
use App\Enums\PropertyTypeEnum;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('property_characteristics', function (Blueprint $table) {
            $table->foreignUuid('property_id')->unique()->onDelete('cascade');
            $table->float('price')->required();
            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->float('sqft')->required();
            $table->enum('property_status', [
                PropertyStatusEnum::HOLD->value,
                PropertyStatusEnum::SALE->value,
                PropertyStatusEnum::SOLD->value,
            ])->default(PropertyStatusEnum::SALE->value);
            $table->enum('property_type', [
                PropertyTypeEnum::HOUSING->value,
                PropertyTypeEnum::LANDED->value
            ])->required();
            $table->timestamps();

            // $table->foreign('property_id')
            //     ->references('id')
            //     ->on('properties')
            //     ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_characteristics');
    }
};
