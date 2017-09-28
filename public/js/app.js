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
			abilities: ['Overgrow','Chlorophyll']
		};
	});
})();