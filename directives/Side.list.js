( function () {
	angular
		.module('app')
		.directive('mySidelist' , mySidelist);
	
	
	function mySidelist() {
		return{
			restrict: 'E',
			replace: true,
			templateUrl: 'directives/sidelist.template.html'
		};
	}
}());