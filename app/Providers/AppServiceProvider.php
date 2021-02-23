<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $current_domain = !empty($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : '';
        $base_url = "";
        switch ($current_domain) {
            case 'larareactblog.local':
                $base_url = 'http://' . $current_domain;
            break; 
            case 'cms.larareactblog.local':
                $base_url = 'http://' . $current_domain;
            break; 
        }
        config()->set('BASE_URL', $base_url);
    }
}
