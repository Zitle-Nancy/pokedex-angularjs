(function(){
	/* module es una funcion, primer parametro su nombre
	segundo parametro sus dependencias */
	var app = angular.module('pokedex',[
		'ngRoute',
		'pokedex.controllers',
		'pokedex.directivas',
		'pokedex.filters',
		'pokedex.services'
	]);

	// inyectar servicios en nuestro ejemplo, provedor
	app.config(['$routeProvider', function($routeProvider){
		// usaremos concatenacion encadenada
		$routeProvider
		.when('/', {
			templateUrl: '../views/pokedex.html',
			controller: 'PokedexController'
		})
		.when('/:type', {
			templateUrl: '../views/pokedex.html',
			controller:'PokedexController'
		})
		.when('/pokemon/:name',{
			templateUrl: '../views/pokemon.html',
			controller:'PokemonController',
			controllerAs:'pkmCtrl'
		})
		.otherwise({
			redirectTo:'/'
		})
	}]);
})();