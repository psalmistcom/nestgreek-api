<?php

use App\Enums\ListingTypeEnum;

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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('broker_id');
            $table->string('address');
            $table->enum('listing_type', [
                ListingTypeEnum::LEASE->value,
                ListingTypeEnum::MORTGAGE->value,
                ListingTypeEnum::RENT->value,
                ListingTypeEnum::SALE->value,
            ])->required();
            $table->string('city')->required();
            $table->string('zip_code')->required();
            $table->longText('description')->required();
            $table->timestamps();

            $table->foreign('broker_id')
                ->references('id')
                ->on('brokers')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
