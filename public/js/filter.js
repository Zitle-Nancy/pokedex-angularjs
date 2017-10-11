(function () {
  angular.module('pokedex.filters', [])
  	.filter('normalize', function(){
  		return function(input) {
  			input = input
  					.replace('♀', 'f')
  					.replace('♂','m')
  					/*crear una expresion regular que a los caracteres
  					especiales los remplace por una cadena de texto blanca*/
  					.replace(/\W+/g,'');
  			// esta funcion debe de retonrnar el resultado
  			return input.toLowerCase();
  		}
  	})
    .filter('imageify', function () {
      return function (input) {
        var url = "img/pokemons/" + input.toLowerCase() + ".jpg";
        return url;
      };
    });

})();