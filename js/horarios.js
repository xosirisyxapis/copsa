copsaApp.controller("horariosCtrl", function ($scope, $localStorage) {

    console.log('horariosCtrl cargado')

    active_tab = 'horarios';

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

    $scope.startsWith = function (actual, expected) {
       var lowerStr = (actual + "").toLowerCase();
       return lowerStr.indexOf(expected.toLowerCase()) === 0;
   }

    $scope.horarios = [
 {
   "mont": "04:45:00",
   "carr": "05:10:00",
   "solis": "06:00:00",
   "piria": "06:20:00",
   "pcol": "",
   "pnegra": "",
   "portez": "06:45:00",
   "mald": "07:00:00",
   "peste": "07:10:00",
   "jigna": "",
   "garzon": "",
   "ref": "PG"
 },
 {
   "mont": "04:45:00",
   "carr": "05:10:00",
   "solis": "05:55:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "06:25:00",
   "mald": "06:40:00",
   "peste": "06:50:00",
   "jigna": "07:30:00",
   "garzon": "07:40:00",
   "ref": "SL"
 },
 {
   "mont": "06:30:00",
   "carr": "07:00:00",
   "solis": "07:45:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "08:20:00",
   "mald": "08:35:00",
   "peste": "08:45:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "07:15:00",
   "carr": "07:45:00",
   "solis": "08:30:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "09:05:00",
   "mald": "09:20:00",
   "peste": "09:30:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "08:15:00",
   "carr": "08:45:00",
   "solis": "09:30:00",
   "piria": "10:05:00",
   "pcol": "",
   "pnegra": "",
   "portez": "10:30:00",
   "mald": "10:45:00",
   "peste": "10:55:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "08:15:00",
   "carr": "08:45:00",
   "solis": "09:30:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "10:05:00",
   "mald": "10:20:00",
   "peste": "10:30:00",
   "jigna": "11:10:00",
   "garzon": "11:20:00",
   "ref": ""
 },
 {
   "mont": "09:15:00",
   "carr": "09:45:00",
   "solis": "10:30:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "11:05:00",
   "mald": "11:20:00",
   "peste": "11:30:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "10:00:00",
   "carr": "10:30:00",
   "solis": "11:15:00",
   "piria": "11:45:00",
   "pcol": "",
   "pnegra": "",
   "portez": "12:15:00",
   "mald": "12:30:00",
   "peste": "12:40:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "10:00:00",
   "carr": "10:30:00",
   "solis": "11:15:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "11:50:00",
   "mald": "12:05:00",
   "peste": "12:15:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "10:30:00",
   "carr": "11:00:00",
   "solis": "11:45:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "12:20:00",
   "mald": "12:35:00",
   "peste": "12:45:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "11:30:00",
   "carr": "12:00:00",
   "solis": "12:45:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "13:20:00",
   "mald": "13:35:00",
   "peste": "13:45:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "11:30:00",
   "carr": "12:00:00",
   "solis": "12:45:00",
   "piria": "13:15:00",
   "pcol": "",
   "pnegra": "",
   "portez": "13:45:00",
   "mald": "14:00:00",
   "peste": "14:10:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "12:30:00",
   "carr": "13:00:00",
   "solis": "13:45:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "14:20:00",
   "mald": "14:35:00",
   "peste": "14:45:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "13:15:00",
   "carr": "13:45:00",
   "solis": "14:30:00",
   "piria": "15:00:00",
   "pcol": "",
   "pnegra": "",
   "portez": "15:30:00",
   "mald": "15:45:00",
   "peste": "15:55:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "13:15:00",
   "carr": "13:45:00",
   "solis": "14:30:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "15:05:00",
   "mald": "15:20:00",
   "peste": "15:30:00",
   "jigna": "16:10:00",
   "garzon": "16:20:00",
   "ref": ""
 },
 {
   "mont": "14:15:00",
   "carr": "14:45:00",
   "solis": "15:30:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "16:05:00",
   "mald": "16:20:00",
   "peste": "16:30:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "15:00:00",
   "carr": "15:30:00",
   "solis": "16:15:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "16:50:00",
   "mald": "17:05:00",
   "peste": "17:15:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "15:30:00",
   "carr": "16:00:00",
   "solis": "16:50:00",
   "piria": "17:25:00",
   "pcol": "",
   "pnegra": "",
   "portez": "17:50:00",
   "mald": "18:05:00",
   "peste": "18:15:00",
   "jigna": "",
   "garzon": "",
   "ref": "PG"
 },
 {
   "mont": "15:30:00",
   "carr": "16:00:00",
   "solis": "16:45:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "17:20:00",
   "mald": "17:35:00",
   "peste": "17:45:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "16:15:00",
   "carr": "16:45:00",
   "solis": "17:30:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "18:05:00",
   "mald": "18:20:00",
   "peste": "18:30:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "17:00:00",
   "carr": "17:30:00",
   "solis": "18:15:00",
   "piria": "18:45:00",
   "pcol": "",
   "pnegra": "",
   "portez": "19:15:00",
   "mald": "19:30:00",
   "peste": "19:40:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "17:00:00",
   "carr": "17:30:00",
   "solis": "18:15:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "18:50:00",
   "mald": "19:05:00",
   "peste": "19:15:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "17:30:00",
   "carr": "18:00:00",
   "solis": "18:45:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "19:20:00",
   "mald": "19:35:00",
   "peste": "19:45:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "18:15:00",
   "carr": "18:45:00",
   "solis": "19:30:00",
   "piria": "20:00:00",
   "pcol": "",
   "pnegra": "",
   "portez": "20:30:00",
   "mald": "20:45:00",
   "peste": "20:55:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "18:15:00",
   "carr": "18:45:00",
   "solis": "19:30:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "20:05:00",
   "mald": "20:20:00",
   "peste": "20:30:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "18:45:00",
   "carr": "19:15:00",
   "solis": "20:00:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "20:35:00",
   "mald": "20:50:00",
   "peste": "21:00:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "19:15:00",
   "carr": "19:45:00",
   "solis": "20:30:00",
   "piria": "21:00:00",
   "pcol": "21:15:00",
   "pnegra": "21:25:00",
   "portez": "",
   "mald": "",
   "peste": "",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "19:30:00",
   "carr": "20:00:00",
   "solis": "20:45:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "21:20:00",
   "mald": "21:35:00",
   "peste": "21:45:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "20:30:00",
   "carr": "20:55:00",
   "solis": "21:40:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "22:15:00",
   "mald": "22:30:00",
   "peste": "22:40:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "21:15:00",
   "carr": "21:40:00",
   "solis": "22:25:00",
   "piria": "23:00:00",
   "pcol": "",
   "pnegra": "",
   "portez": "23:30:00",
   "mald": "23:40:00",
   "peste": "23:50:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "21:15:00",
   "carr": "21:40:00",
   "solis": "",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "22:55:00",
   "mald": "23:10:00",
   "peste": "23:20:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "22:15:00",
   "carr": "22:40:00",
   "solis": "23:25:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "23:55:00",
   "mald": "00:10:00",
   "peste": "00:20:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 },
 {
   "mont": "23:30:00",
   "carr": "23:55:00",
   "solis": "00:40:00",
   "piria": "",
   "pcol": "",
   "pnegra": "",
   "portez": "01:10:00",
   "mald": "01:25:00",
   "peste": "01:35:00",
   "jigna": "",
   "garzon": "",
   "ref": ""
 }
]

});