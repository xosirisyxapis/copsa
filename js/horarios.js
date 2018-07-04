copsaApp.controller("horariosCtrl", function ($scope, $localStorage) {

    console.log('horariosCtrl cargado')

    $scope.getStoreNombre = function () {
		return $localStorage.nombre;
    }

});