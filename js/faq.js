copsaApp.controller("faqCtrl", function ($scope, $localStorage) {

    console.log('faqCtrl cargado');

    active_tab = 'faq';

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