copsaApp.controller("empresaCtrl", function ($scope, $localStorage) {

    console.log('empresaCtrl cargado');

    active_tab = 'empresa';

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