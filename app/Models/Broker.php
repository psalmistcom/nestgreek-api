<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Broker extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'address',
        'state',
        'zip_code',
        'phone_number',
        'logo_path'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
