//Nessa consulta exemplificamos um delete, exibindo
//como faríamos para deletar uma artista a partir da quantidade
//ouvintes mensais
db.artists.deleteMany( {MonthlyListeners: { $lt: 9000000}});