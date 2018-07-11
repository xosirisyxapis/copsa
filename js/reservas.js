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

  $scope.number = 10;
  $scope.getNumber = function(num) {
    return new Array(num); 
  }

   $scope.reservas = [
     {
       "fecha": "10/07/2018",
       "hora": "17:30",
       "origen": "Montevideo",
       "destino": "Maldonado",
       "pasajes": "2",
       "icon": "glyphicon-edit"
     },
     {
       "fecha": "10/07/2018",
       "hora": "17:30",
       "origen": "Montevideo",
       "destino": "Maldonado",
       "pasajes": "2",
       "icon": "glyphicon-edit"
     },
     {
       "fecha": "15/06/2018",
       "hora": "17:30",
       "origen": "Montevideo",
       "destino": "Maldonado",
       "pasajes": "2",
       "style": "table-disabled"
     },
     {
       "fecha": "03/05/2018",
       "hora": "18:00",
       "origen": "Maldonado",
       "destino": "Montevideo",
       "pasajes": "1",
       "style": "table-disabled"
     },
     {
       "fecha": "21/05/2018",
       "hora": "14:30",
       "origen": "Montevideo",
       "destino": "Maldonado",
       "pasajes": "1",
       "style": "table-disabled"
     }
 ]

});