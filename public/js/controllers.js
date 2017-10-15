(function(){
	angular.module('pokedex.controllers', [])
	// controlador para hacer la peticion http 
	.controller('PokedexController', ['$scope', 'pokemonServices', function($scope, pokemonServices){
		/* invocamos a nuestro servicio, junto con el objeto
		 * que retorna
		 */ 
		pokemonServices.all().then(function (data) {
			$scope.pokemons = data;
		});		
	}])
	/*Crear nuestro controlador, nombre y funcion*/
	.controller('PokemonController',['$scope','pokemonServices', function($scope, pokemonServices){
		$scope.pokemon = {};

		// utilizar el servicio 
		pokemonServices.byName('mew')
		.then(function(data) {
			$scope.pokemon = data;
		});	
	}])
	// nuevo controlador para las Tabs
	.controller('TabsController', function(){
		this.tab = 1;
		// su valor de tab, es remplazado por el parametro que reciba
		this.selectTab = function(tab){
			this.tab = tab;
		};
	});
})();