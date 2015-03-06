(function () {
	'use strict';
	angular
		.module('app')
		.config(config);
	config.$inject = ['$urlRouterProvider' , '$stateProvider'];
	
 
	function config($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider.
			state('home', {
				url: '/',
				templateUrl: 'home/bienvenido.html'
			}).
			state('art', {
				url: '/articulos',
				templateUrl: 'articulos/vista.html',
				controller: 'artCon',
				controllerAs: 'ctrl'
			}).
			state('dir', {
				url: '/directives',
				templateUrl: 'articulos/dir.html',
				controller: 'artCon',
				controllerAs: 'ctrl'
			})
	}
}());