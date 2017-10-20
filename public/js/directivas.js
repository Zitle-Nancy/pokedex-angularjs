(function(){
	// usamos la concatenacion, de las directivas, por eso pongo solo el punto
	// pero para eso no pongo ; en el app.module
	angular.module('pokedex.directivas',[])
	// creando directivas
	.directive('pokemonData', function(){
		// la directiva espera que retornemos un objeto literal
		return {
			restrict:'E',  // typo de elemento, la E indica html
			templateUrl:'../partials/pokemon-data.html' // indica la ruta
		};
	}).directive('pokemonImagen', function(){
		return{
			restrict:'E',
			templateUrl:'../partials/pokemon-image.html'
		};
	}).directive('pokemonState', function(){
		return{
			restrict: 'E',
			templateUrl:'../partials/pokemon-state.html'
		}
	}).directive('pokemonEvolution', function(){
		return{
			restrict:'E',
			templateUrl:'../partials/pokemon-evolution.html'
		}
	}).directive('pokemonName', function(){
		return{
			// si la usamos como atributo es A
			// restrict:'A',
			restrict:'E',
			templateUrl:'../partials/pokemon-name.html'
		}
	}).directive('pokemonType', function() {
		return{
			restrict: 'E', 
			templateUrl:'../partials/pokemon-type.html'
		}
	}).directive('pokemonComments', function($scope){
		return{
			restrict:'E',
			templateUrl:'../partials/pokemon-comments.html',
			controller:function(){
				$scope.comments = [];
				//almacenar los comnetarios
				$scope.comment = {};
				$scope.show = false;
				$scope.toogle = function(){
					// solo cambiamos el valor booleano
					$scope.show = !$scope.show;
				}
				// funcion para limpiar la caja de texto 
				$scope.anonymousChanged = function(){
					if($scope.comment.anonymous){
						$scope.comment.email = "";
					}
				}
				// agregar el comentario
				$scope.addComment = function(){
					//obtenemos la fecha
					$scope.comment.date = Date.now();
					// guardamos en nuestro arreglo, de nuestro objeto de comentario 
					$scope.comments.push($scope.comment);
					// reseteamos nuestro objeto al darle click o sea lo limpiamos
					$scope.comment = {};
				}
			},
			controllerAs:'cmtsCtrl'
		}
	});

})();