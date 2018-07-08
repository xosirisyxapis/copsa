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

    $scope.getUserButton = function () {
        if ($localStorage.nombre) {
            return $localStorage.nombre
        } else {
            return 'Ingresar';
        }
    }


  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.format = 'dd/MM/yyyy';

  $scope.popup1 = {
    opened: false
  };

});