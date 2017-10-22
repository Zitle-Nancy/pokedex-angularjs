(function(){
	angular.module('pokedex.controllers', [])
	// controlador para hacer la peticion http 
	.controller('PokedexController', ['$scope','$routeParams', 'pokemonServices', function($scope, $routeParams, pokemonServices){
		var type = $routeParams.type;
		/* Creamos la logica de que si es por tipo filtra
	     * si no, entonces muestra a todos
	     */
		if(type){
			pokemonServices.byType(type).then(function(data) {
				$scope.pokemons = data;
			})
		}else{
			/* invocamos a nuestro servicio, junto con el objeto
		 	 * que retorna
		 	 */ 
			pokemonServices.all().then(function (data) {
				$scope.pokemons = data;
			});
		}

				
	}])
	/*Crear nuestro controlador, nombre y funcion*/
	.controller('PokemonController',['$scope','$routeParams','pokemonServices', function($scope,$routeParams,pokemonServices){
		var name = $routeParams.name;
		$scope.pokemon = {};

		// utilizar el servicio 
		pokemonServices.byName(name)
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