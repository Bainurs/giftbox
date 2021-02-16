<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('create-product', 'ProductController::@store');

Route::get('get-types', 'TypeController::@index');
Route::delete('type/delete/{id}', 'TypeController::@destroy');
Route::post('type/add', 'TypeController::@store');
Route::get('type/show/{id}', 'TypeController::@show');
Route::get('type/edit/{id}', 'TypeController::@edit');
Route::post('type/update/{id}', 'TypeController::@update');

Route::get('get-roles', 'RoleController::@index');
Route::delete('role/delete/{id}', 'RoleController::@destroy');
Route::post('role/add', 'RoleController::@store');
Route::get('role/show/{id}', 'RoleController::@show');
Route::get('role/edit/{id}', 'RoleController::@edit');
Route::post('role/update/{id}', 'RoleController::@update');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
