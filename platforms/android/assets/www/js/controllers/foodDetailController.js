angular.module('lisaApp')

.controller('foodDetailCtrl', ['$scope', '$stateParams', '$rootScope', 'AlimentoService', 
function ($scope, $stateParams, $rootScope, AlimentoService) {

	$scope.$on('$ionicView.beforeEnter', function (event, viewData) {
	  viewData.enableBack = true;
	}); 

	var sc = $scope;
	var rs = $rootScope;
	
	var id = $stateParams.id;

	console.log('Buscando alimento tabela de substituicao (id = ' + id + ').');

	sc.buscaAlimento = function(){
		//AlimentoService.findOne(id)
		//	.then(function(res){
        //    	return res;
        //    	$scope.$broadcast('scroll.refreshComplete');
        //}) 	
    	return rs.alimentos[id-1]; 
	}

	sc.alimento = sc.buscaAlimento(id);

}])