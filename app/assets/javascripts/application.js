// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require Swiper/dist/js/swiper.jquery.min.js
//= require_tree .

$(document).ready(function () {
    $('#play-button').click(function () {
        $('.menu > ul').fadeOut('slow', function () {
            $('.loading-container').fadeIn('slow');
            App.game.perform('seek');
        })
    });
    $('#stop-search').click(function () {
        App.cable.disconnect();
        $('.loading-container').fadeOut('slow', function () {
            $('.menu > ul').fadeIn('slow');
            App.cable.connect();
        })
    })
});