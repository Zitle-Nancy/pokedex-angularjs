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
	}).directive('pokemonComments', function(){
		return{
			restrict:'E',
			templateUrl:'../partials/pokemon-comments.html',
			controller:function(){
				this.comments = [];
				//almacenar los comnetarios
				this.comment = {};
				this.show = false;
				this.toogle = function(){
					// solo cambiamos el valor booleano
					this.show = !this.show;
				}
				// funcion para limpiar la caja de texto 
				this.anonymousChanged = function(){
					if(this.comment.anonymous){
						this.comment.email = "";
					}
				}
				// agregar el comentario
				this.addComment = function(){
					//obtenemos la fecha
					this.comment.date = Date.now();
					// guardamos en nuestro arreglo, de nuestro objeto de comentario 
					this.comments.push(this.comment);
					// reseteamos nuestro objeto al darle click o sea lo limpiamos
					this.comment = {};
				}
			},
			controllerAs:'cmtsCtrl'
		}
	});

})();