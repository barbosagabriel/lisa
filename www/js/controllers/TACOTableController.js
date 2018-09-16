angular.module('lisaApp')

.controller('alimentosTACOCtrl', ['$scope', '$stateParams', '$rootScope'
	, '$ionicScrollDelegate', 'AlimentosTACOService', '$ionicLoading', '$timeout'
	, function ($scope, $stateParams, $rootScope, $ionicScrollDelegate
		, AlimentosTACOService, $ionicLoading, $timeout) {

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
	    		AlimentosTACOService.findByAttr(sc.q).then(function(res){
	    			if(res.length <= 0){
	    				sc.searchEmpty = 'Nenhum resultado';
	    			}else{
	    				sc.searchEmpty = '';
	    			}
		            sc.alimentosTACO = res;
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
	        AlimentosTACOService.all().then(function(res){
	            rs.alimentosTACO = res;
	            $ionicLoading.hide();
	            rs.$broadcast('scroll.refreshComplete');
	        });
        }, 2000);
    }

    sc.searchBoxChange();

}])