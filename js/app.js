"use strict";

var SocialNetwork = angular.module("SocialNetwork", []);

SocialNetwork.constant("baseUrl", "http://softuni-network.azurewebsites.net/api");

SocialNetwork.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl:'templates/login.html',
            controller:'MainController'
        })

        .otherwise({redirectTo: '/'})

});