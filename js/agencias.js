copsaApp.controller("agenciasCtrl", function ($scope, $localStorage) {

    console.log('agenciasCtrl cargado');

    active_tab = 'agencias';

    $scope.getStoreNombre = function () {
		return $localStorage.nombre;
    }

    $scope.getTabClass = function (tab) {
    	if (tab === active_tab) {
    		return 'active';
    	} else {
    		return '';
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