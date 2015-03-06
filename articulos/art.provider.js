(function () {
	'use strict';
	angular
		.module('art.module')
		.factory('artService', artService);
	
	function artService() {
		var uid=1;
		var item = [];
		
		var pens = {getitem:getitem,saveitem:saveitem,deleteitem:deleteitem};
		
		return pens
		
		function getitem(){
			return item;
		}
		function saveitem(articulo){
			if(articulo.id===0){
				articulo.id = uid++;
				articulo.cant= 1;
				item.push(articulo);
			}else{
				item[articulo.id]= articulo;
			}		
		}
		function deleteitem(id){
			for(var i =0; i<=id; i++){
				if(item[i].id === id){
					item.splice(i,1);
				}
			}
		}
		
	
	
	}

}());