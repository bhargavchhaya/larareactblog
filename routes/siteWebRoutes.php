<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route:: domain(parse_url(config('app.url'), PHP_URL_HOST))->name('site.')->group(function(){
    Route::get('/', 'SiteController@index');
    Route::get('/about', 'SiteController@about');
    Route::get('/contact-us', 'SiteController@contact');
});