const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/site/site.js', 'public/site/js')
    .sass('resources/sass/site/site.scss', 'public/site/css');

mix.react('resources/js/cms/cms.js', 'public/cms/js')
    .sass('resources/sass/cms/cms.scss', 'public/cms/css');
