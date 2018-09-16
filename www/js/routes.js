angular.module('lisaApp')

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  
  // Lista de alimentos da tabela de substituição 
  .state('menu.foods', {
    url: '/alimentos',
    templateUrl: 'templates/foods.html',
    controller: 'foodCtrl'  
  })

  // Lista de alimentos da tabela TACO
  .state('menu.TACOTable', {
    url: '/alimentosTACO',
    templateUrl: 'templates/TACOTable.html',
    controller: 'alimentosTACOCtrl'
  })

  // Detalhe do alimento da tabela de substituição
  .state('foodDetail', {
    url: '/alimento/:id',
    templateUrl: 'templates/foodDetail.html',
    controller: 'foodDetailCtrl'
  })

  // Detalhe do alimento da tabela TACO
  .state('TACOTableDetail', {
    url: '/alimentosTACO/:id',
    templateUrl: 'templates/TACOTableDetail.html',
    controller: 'detalhesTACOCtrl'
  })

  // Opções de substituição de alimentos
  .state('foodReplacement', {
    url: '/alimento/subs/:id',
    templateUrl: 'templates/foodReplacement.html',
    controller: 'foodReplacementCtrl'
  })

  // Informações sobre o app
  .state('menu.about', {
    url: '/sobre',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  // Menu
  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })
 
  $urlRouterProvider.otherwise('/side-menu21/alimentos')  

});