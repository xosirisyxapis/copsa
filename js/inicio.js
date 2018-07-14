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

    // chat
    $scope.chatin = '';
    $scope.chatout = '';
    for (i = 0; i < 15; i++) {
        $scope.chatout += "\n";
    } 
    $scope.chatLine = function () {
        $scope.chatout = $scope.chatout.substring(1, $scope.chatout.length);
        $scope.chatout += $localStorage.nombre + ': ' + $scope.chatin + '\n';
        $scope.chatin = '';
    }
});