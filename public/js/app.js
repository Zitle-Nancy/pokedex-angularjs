(function(){
	/* module es una funcion, primer parametro su nombre
	segundo parametro sus dependencias */
	var app = angular.module('pokedex',[]);

	/*Crear nuestro controlador, nombre y funcion*/
	app.controller('PokemonController', function(){
		// crearemos nuestro objeto de pokemon
		this.pokemon = {
			id:001,
			name: 'Bulbasaur',
			species:'Seed Pokemon',
			type: ['Grass', 'Poison'],
			height: '2.4',
			weight: '15.2 lib',
			abilities: ['Overgrow','Chlorophyll','Water Stream'],
			state:{
				hp:45,
				attack:49,
				defense:49,
				"sp.atk":65,
				"sp.def":65,
				speed:45,
				total:318
			},
			evolution:["Bulbasaur", "Ivysaur","Venusaur"]
		};
	});

	// nuevo controlador oara las Tabs
	app.controller('TabsController', function(){
		this.tab = 1;
		// su valor de tab, es remplazado por el parametro que reciba
		this.selectTab = function(tab){
			this.tab = tab;
		};
	});

	// controlador para comentarios
	// app.controller('CommentsController',function(){
	// 	this.comments = [];
	// 	//almacenar los comnetarios
	// 	this.comment = {};
	// 	this.show = false;

	// 	this.toogle = function(){
	// 		// solo cambiamos el valor booleano
	// 		this.show = !this.show;
	// 	}
	// 	// funcion para limpiar la caja de texto 
	// 	this.anonymousChanged = function(){
	// 		if(this.comment.anonymous){
	// 			this.comment.email = "";
	// 		}
	// 	}
	// 	// agregar el comentario
	// 	this.addComment = function(){
	// 		//obtenemos la fecha
	// 		this.comment.date = Date.now();
	// 		// guardamos en nuestro arreglo, de nuestro objeto de comentario 
	// 		this.comments.push(this.comment);
	// 		// reseteamos nuestro objeto al darle click o sea lo limpiamos
	// 		this.comment = {};
	// 	}
	// });
	// creando directivas
	app.directive('pokemonData', function(){
		// la directiva espera que retornemos un objeto literal
		return {
			restrict:'E',  // typo de elemento, la E indica html
			templateUrl:'../partials/pokemon-data.html' // indica la ruta
		};
	});

	app.directive('pokemonImagen', function(){
		return{
			restrict:'E',
			templateUrl:'../partials/pokemon-image.html'
		};
	});

	app.directive('pokemonState', function(){
		return{
			restrict: 'E',
			templateUrl:'../partials/pokemon-state.html'
		}
	});

	app.directive('pokemonEvolution', function(){
		return{
			restrict:'E',
			templateUrl:'../partials/pokemon-evolution.html'
		}
	});

	app.directive('pokemonName', function(){
		return{
			// si la usamos como atributo es A
			// restrict:'A',
			restrict:'E',
			templateUrl:'../partials/pokemon-name.html'
		}
	});

	app.directive('pokemonComments', function(){
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
	// creando filtros ? 



})();