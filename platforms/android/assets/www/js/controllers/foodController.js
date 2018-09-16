angular.module('lisaApp')
  
.controller('foodCtrl', ['$scope', '$stateParams', '$rootScope', '$ionicScrollDelegate'
				, 'AlimentoService', '$ionicLoading', '$timeout'
				, function ($scope, $stateParams, $rootScope, $ionicScrollDelegate
					, AlimentoService, $ionicLoading, $timeout) {

	var sc = $scope;
	var rs = $rootScope;
	sc.params = $stateParams;
	sc.q = null;

    sc.searchBoxChange = function(){

    	$ionicLoading.show({
		    content: 'Carregando...',
		    animation: 'fade-in',
		    showBackdrop: true,
		    maxWidth: 200,
		    showDelay: 0,
		  });

    	if(sc.q != null){

    		$timeout(function(){
	    		AlimentoService.findByAttr(sc.q).then(function(res){
	    			if(res.length <= 0){
	    				sc.searchEmpty = 'Nenhum resultado';
	    			}else{
	    				sc.searchEmpty = '';
	    			}
		            sc.alimentos = res;
		            $ionicLoading.hide();
		            rs.$broadcast('scroll.refreshComplete');	
		            $ionicScrollDelegate.scrollTop();
		        })
	        }, 2000);
    	}else{
    		sc.loadData();
    	}   				
    }

    sc.loadData = function(){

    	$timeout(function(){
			AlimentoService.all().then(function(res){
	        	rs.alimentos = res;
	        	$ionicLoading.hide();
	        	rs.$broadcast('scroll.refreshComplete');
	    	});
    	}, 2000);
    }

    sc.searchBoxChange();

}])