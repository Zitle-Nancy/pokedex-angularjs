(function(){
	angular.module('pokedex.services',[])
	.factory('pokemonServices', ['$http','$q','$filter', function($http, $q, $filter) {
		// obtenemos el filtro que creamos
		var normalize = $filter('normalize');

		function all() {
			var deferred = $q.defer();

			$http.get('/pokemons.json')
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		}
		// funcion para filtrar por nombre, usando filter de js
		function byName(name) {
			name = normalize(name);
			var deferred = $q.defer();

			// invocamos a nuestra funcion que contiene la data
			all().then(function (data) {
				var results = data.filter(function(pokemon){
					return normalize(pokemon.name) === name;
				});
				if(results.length > 0) {
					deferred.resolve(results[0]);
				} else {
					// si falla, que rechace la promesa
					deferred.reject();
				}
			});
			return deferred.promise;
		}
		// retornamos en nuestro objetos las funciones a usar
		return {
			all:all,
			byName: byName
		};
	}]);
})();