(function(){
	/* module es una funcion, primer parametro su nombre
	segundo parametro sus dependencias */
	var app = angular.module('pokedex',['pokedex.controllers',
										'pokedex.directivas',
										'pokedex.filters']);
})();