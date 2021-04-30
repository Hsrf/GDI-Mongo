// mapReduce
// Nessa consulta criamos uma coleção nova com a data
// de lançamento dos albuns que possuírem a mesma quantidade
// de músicas
var map = function(){emit(this.AmountSongs, this.LaunchDate)};
var reduce = function(amountSongs, launchDate){return launchDate;};

db.albums.mapReduce(map,reduce,{out :"results"});