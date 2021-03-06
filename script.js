'use strict';

$(function() {

    // var backBtn = document.getElementsByClassName("backtop");
    // var clientHeight = document.documentElement.clientHeight;
    // window.onscroll = function() {
    //   var osTop = document.documentElement.scrollTop || document.body.scrollTop;
    //   if (osTop > clientHeight) {
    //     backBtn[0].style.display = "block";
    //   } else {
    //     backBtn[0].style.display = "none";
    //   }
    // }
    // backBtn[0].onclick = function() {
    //   document.documentElement.scrollTop = document.body.scrollTop = 0;
    // }


    /*
    |--------------------------------------------------------------------------
    | Configure your website
    |--------------------------------------------------------------------------
    |
    | We provided several configuration variables for your ease of development.
    | Read their complete description and modify them based on your need.
    |
    */

    thesaas.config({

        /*
        |--------------------------------------------------------------------------
        | Google API Key
        |--------------------------------------------------------------------------
        |
        | Here you may specify your Google API key if you need to use Google Maps
        | in your application
        |
        | https://developers.google.com/maps/documentation/javascript/get-api-key
        |
        */

        googleApiKey: '',

        /*
        |--------------------------------------------------------------------------
        | Google Analytics Tracking
        |--------------------------------------------------------------------------
        |
        | If you want to use Google Analytics, you can specify your Tracking ID in
        | this option. Your key would be a value like: UA-12345678-9
        |
        */

        googleAnalyticsId: '',

        /*
        |--------------------------------------------------------------------------
        | Smooth Scroll
        |--------------------------------------------------------------------------
        |
        | If true, the browser's scrollbar moves smoothly on scroll and gives your
        | visitor a better experience for scrolling.
        |
        */

        smoothScroll: false

    });



    /*
    |--------------------------------------------------------------------------
    | Custom Javascript code
    |--------------------------------------------------------------------------
    |
    | Now that you configured your website, you can write additional Javascript
    | code below this comment. You might want to add more plugins and initialize
    | them in this file.
    |
    */

    thesaas.init();


});