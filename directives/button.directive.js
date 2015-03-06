(function () {
	'use strict';
	angular
		.module('app')
		.directive('button', button);
	
	function button() {
		return{
			restrict: 'E',
			link: function (scope, element, attributes) {
				element.addClass('btn');
				if (attributes.type === 'borrar' ) {
					element.addClass('btn-danger');
				}
				if (attributes.type === 'guardar' ) {
					element.addClass('btn-info');
				}
				if (attributes.type === 'editar' ) {
					element.addClass('btn-warning');
					element.ngClick="algo()";
				}
				if (attributes.size ) {
					element.addClass('btn-' + attributes.size);
				}
			}
		};
	
	
	}
}());