copsaApp.controller("paradasCtrl", function ($scope, $localStorage) {

    console.log('paradasCtrl cargado')

    active_tab = 'paradas';

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