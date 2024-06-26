<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PropertyCharacteristics extends Model
{
    use HasFactory;

    protected $fillable = [
        'property_id',
        'price',
        'bedrooms',
        'bathrooms',
        'sqft',
        'property_status',
        'property_type',
    ];

    public function property(): BelongsTo
    {
        return $this->belongsTo(Property::class);
    }
}
