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

Route::middleware('auth:api')->prefix('users')->group(function () {
    Route::get('/', 'UsersController@index');
    Route::get('/{id}', 'UsersController@user')->where('id', "[0-9]+");
    Route::get('/{id}/user', 'UsersController@deleteUser')->where('id', "[0-9]+");
    Route::post('/', 'UsersController@addUpdate');

});


Route::post('login', 'AuthController@login');
Route::get('logout', 'AuthController@logout');
