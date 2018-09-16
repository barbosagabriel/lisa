angular.module('lisaApp')

.service('AlimentosTACOService', ['$http', function($http){
    
    var api_url = 'js/data/alimentosTACO.json';
    
    function filterBlankRows(l){
        return l.filter(function(obj){
            return obj.id != '';
        });
    }

    function filterSearch(l, text){
        return l.filter(function(obj){
            return obj.nome.toUpperCase().indexOf(text.toUpperCase()) !== -1;
        });
    }
    
    var ret = {
        all: function(){

            return $http.get(api_url).then(function(resp){
                var results = filterBlankRows(resp.data);
                return results;
            });
            
        }, 
        findOne: function(id){

            return $http.get(api_url + '/id/' + id).then(function(resp){
                var result = resp.data[0];
                return result;
            });
            
        },
        findByAttr: function(text){

        	return $http.get(api_url).then(function(resp){
                var results = filterSearch(resp.data, text);
                return results;
            });
            
        }
    }
    
    ret.all();
    
    return ret;

}])