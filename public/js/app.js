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

	// nuevo controlador
	app.controller('TabsController', function(){
		this.tab = 1;

		this.selectTab = function(tab){
			this.tab = tab;
		};

	});
})();