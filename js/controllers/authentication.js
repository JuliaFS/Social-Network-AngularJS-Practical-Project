"use strict";

SocialNetwork.factory("authentication", function ($http, baseUrl){
    var request = {};
    var serviceUrl = baseUrl + "/user";

    request.Login = function (loginData, success, error) {
        $http.post(serviceUrl + "/login", loginData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    request.Register = function (registerData, success, error) {
        $http.post(serviceUrl + "/register", registerData)
            .success(function (data, status, headers, config) {
                success(data);
            }).error(error);
    };

    request.GetUserProfile = function (success, error) {
        $http.get(serviceUrl + "/profile", {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    request.EditUserProfile = function (editUserData, success, error) {
        $http.put(serviceUrl + "/profile", editUserData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    request.ChangePassword = function (passwordData, success, error) {
        $http.put(serviceUrl + "/changepassword", passwordData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success()
            }).error(error);
    };

    request.GetUsername = function () {
        return localStorage['username'];
    };

    request.GetHeaders = function() {
        return {
            Authorization: "Bearer " + localStorage['accessToken']
        };
    };

    request.isLoggedIn = function () {
        return localStorage['accessToken'];
    };

    return request;
})