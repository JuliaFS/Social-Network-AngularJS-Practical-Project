app.controller("myController", function($scope, visitors, HOME_SITE){ //$scope - service мястото където ще правим връзката с back enda
    $scope.names = ["Angel", "Pesho", "Mariq", "Lili"];

    for(i in visitors.names){
        $scope.names.push(visitors.names[i]);
    }

    $scope.home = HOME_SITE.url + ":" + HOME_SITE.port;
});
