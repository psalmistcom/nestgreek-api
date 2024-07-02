<?php

namespace App\Models;

use App\Traits\Uuids;
// use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Property extends Model
{
    use HasFactory, Uuids;


    protected $fillable = [
        'broker_id',
        'title',
        'address',
        'listing_type',
        'state',
        'description',
        'isPublished',
        'upload_img',
    ];


    public function characteristic(): HasOne
    {
        return $this->hasOne(PropertyCharacteristics::class);
    }
    public function hasImages(): HasOne
    {
        return $this->hasOne(PropertyImage::class);
    }

    public function broker(): BelongsTo
    {
        return $this->belongsTo(Broker::class);
    }
}
