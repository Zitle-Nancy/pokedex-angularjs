(function(){
	angular.module('pokedex.controllers', [])
	// controlador para hacer la peticion http 
	.controller('PokedexController', ['$scope', '$http', function($scope, $http){
		$scope.pokemons = [];

		$http.get('/pokemons.json')
		.success(function(data){
			console.log(data);
			$scope.pokemons = data;
		})

	}])
	/*Crear nuestro controlador, nombre y funcion*/
	.controller('PokemonController', function(){
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
	})
	// nuevo controlador para las Tabs
	.controller('TabsController', function(){
		this.tab = 1;
		// su valor de tab, es remplazado por el parametro que reciba
		this.selectTab = function(tab){
			this.tab = tab;
		};
	});
})();