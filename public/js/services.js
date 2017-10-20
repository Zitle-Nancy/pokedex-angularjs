(function(){
	angular.module('pokedex.services',[])
	.factory('pokemonServices', ['$http','$q','$filter','$window', function($http, $q, $filter, $window) {
		var localStorage = $window.localStorage;
		// obtenemos el filtro que creamos
		var normalize = $filter('normalize');
		function all() {
			var deferred = $q.defer();

			$http.get('/pokemons.json')
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		};
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
		};
		// funcion para filtrar por tipo
		function byType(type) {
			type = normalize(type);
			var deferred = $q.defer();

			all().then(function (data) {
				var results = data.filter(function(pokemon){
					return pokemon.type.some(function (t) {
						return normalize(t) === type;
					});
				});
				deferred.resolve(results);
			});
			return deferred.promise;
		};
		// almacenar los comentarios en localstorage
		function saveComment(pokemon, comment) {
			// la variable se iguala a la funcion que creamos
			var comments = getComments(pokemon);

			comments.push(comment);
			/*
			 * Traemos el valor almacenado con setItem
			 * y como lo hicimos JSON, y solo localstorage acepta
			 * string usamos JSON.stringify
			 * pokemon es la llave
			*/
			localStorage.setItem(pokemon, JSON.stringify(comments));

		};

		function getComments(pokemon) {
			// obtener los comentarios por una key que es pokemon
			var comments = localStorage.getItem(pokemon);
			// por si no tenemos comentarios 
			if(!comments) {
				// hacemos un arreglo vacio 
				comments = [];
			} else {
				/* Como nos devuelve un string lo dedemos 
				 * convertir a un json
				 */
				comments = JSON.parse(comments);
			}
			return comments;
		};
		// retornamos en nuestro objetos las funciones a usar
		return {
			all:all,
			byName: byName,
			byType: byType,
			saveComment: saveComment,
			getComments: getComments
		};
	}]);
})();