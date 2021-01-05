const mix = require('laravel-mix')

mix.js('resources/js/app.js', 'public/js').react()
mix.setPublicPath('public')
mix.version()
