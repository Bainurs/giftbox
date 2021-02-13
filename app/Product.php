<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'desc',
        'type_id',
        'price',
        'count',
    ];

    public function types()
    {
        return $this->belongsToMany(Type::class, 'products_types');
    }

}
