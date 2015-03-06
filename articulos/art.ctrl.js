(function () {
	'use strict';
	angular
		.module('art.module')
		.controller('artCon', artCon);
	artCon.$inject = ['artService'];
	
	function artCon(artService) {
		var vm = this;
		vm.arti = artService.getitem();
		vm.artic=[];
		vm.artic.id=0;
		
		
		
		
		
		vm.guardar = function () {
			artService.saveitem(vm.artic);
			vm.artic=[];
			vm.artic.id=0;
		}
		vm.borrar = function (id){
			artService.deleteitem(id);
		}
		
		
	
	}
}());