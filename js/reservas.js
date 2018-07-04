copsaApp.controller("reservasCtrl", function ($scope, $localStorage) {

    console.log('reservasCtrl cargado')

    active_tab = 'reservas';

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