// polyfills (https://developer.mozilla.org/fr/docs/Glossaire/Polyfill)

// libs

// https://laravel-mix.com/docs/5.0/jquery-ui
import $ from "jquery";
window.$ = window.jQuery = $;

// Utils

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/import
import { $body, isDev } from './utils/env';
import { onClick } from './utils/onClick';

// onReady "javascript"
document.addEventListener('DOMContentLoaded', () => {
    console.log('selecteur $body', $body)
    console.log('isDev', isDev)
});

// onReady "jquery"
$(function() {
    console.log( "jquery ready!" );

    console.log('Objet $', $);
    onClick("#button");

});
