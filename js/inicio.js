copsaApp.controller("inicioCtrl", function ($scope, $localStorage) {

    console.log('inicioCtrl cargado');

    $scope.getStoreNombre = function () {
		return $localStorage.nombre;
    }

    $scope.ingresar = function () {
        console.log($scope.nombre);
        $localStorage.nombre = $scope.nombre;
    }

    $scope.getUserButton = function () {
        if ($localStorage.nombre) {
        	return $localStorage.nombre
        } else {
        	return 'Ingresar';
        }
    }

    $scope.getUserButton = function () {
        if ($localStorage.nombre) {
        	return $localStorage.nombre
        } else {
        	return 'Ingresar';
        }
    }

});