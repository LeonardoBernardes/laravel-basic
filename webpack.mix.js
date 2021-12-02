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

mix.js('resources/js/app.js', 'public/js')
    .copyDirectory('node_modules/font-awesome', 'public/assets/font-awesome')
    .sass('resources/sass/app.scss', 'public/css')
    .scripts('node_modules/jquery/dist/jquery.js', 'public/assets/jquery.js')
    .scripts('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/assets/bootstrap.js')
    .sourceMaps();
