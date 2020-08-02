<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Group extends Model
{
    public function members(): HasMany
    {
        return $this->hasMany(Person::class);
    }
}
