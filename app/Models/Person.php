<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Person extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'email_address',
        'status'
    ];

    public function group(): BelongsTo
    {
        return $this->belongsTo(Group::class);
    }
}
