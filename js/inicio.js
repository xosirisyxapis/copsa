copsaApp.controller("inicioCtrl", function ($scope, $localStorage) {

    console.log('inicioCtrl cargado');

    $scope.getStoreNombre = function () {
		return $localStorage.nombre;
    }

    $scope.salvarNombre = function () {
        console.log($scope.miNombre);
        $localStorage.nombre = $scope.miNombre;
    }

});