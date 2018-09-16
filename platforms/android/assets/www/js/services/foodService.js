angular.module('lisaApp')

.service('AlimentoService', ['$http', function($http){
    
    var api_url = 'js/data/alimentos.json';
    
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

    function filterGroup(l, grupoId, id){
        return l.filter(function(obj){
            return (obj.grupo == grupoId && obj.id != id);
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
            
        },
        findByGroup: function(grupoId, id){

            return $http.get(api_url).then(function(resp){
                var results = filterGroup(resp.data, grupoId, id);
                return results;
            });
            
        }
    }
    
    ret.all();
    
    return ret;

}])