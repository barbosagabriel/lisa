angular.module('lisaApp')

.controller('detalhesTACOCtrl', ['$scope', '$stateParams', '$rootScope', 'AlimentosTACOService', 
function ($scope, $stateParams, $rootScope, AlimentosTACOService) {

	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
	  viewData.enableBack = true;
	}); 

	var sc = $scope;
	var rs = $rootScope;
	
	var id = $stateParams.id;

	console.log('Buscando alimento tabela TACO (id = ' + id + ').');

	sc.buscaAlimento = function(){
		/*AlimentoService.findOne(id)
			.then(function(res){
            	return res;
            	// $scope.$broadcast('scroll.refreshComplete');
        }) */ 	
    	return rs.alimentosTACO[id-1]; 
	}

	sc.alimento = sc.buscaAlimento(id);

	sc.isNumber = function (n) {
      return !isNaN(n) && angular.isNumber(+n);
    }

}])