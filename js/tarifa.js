copsaApp.controller("tarifaCtrl", function ($scope, $localStorage) {

    console.log('tarifaCtrl cargado');

    active_tab = 'tarifa';

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

});