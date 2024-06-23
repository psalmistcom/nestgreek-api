<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Property extends Model
{
    use HasFactory;


    protected $fillable = [
        'broker_id',
        'title',
        'address',
        'listing_type',
        'state',
        'description',
        'isPublished',
    ];


    public function characteristic(): HasOne
    {
        return $this->hasOne(PropertyCharacteristics::class);
    }
    public function hasImage(): HasMany
    {
        return $this->hasMany(PropertyImage::class);
    }

    public function broker(): BelongsTo
    {
        return $this->belongsTo(Broker::class);
    }
}
