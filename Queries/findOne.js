// findOne
// Nessa consulta obtemos o primeiro artista que possuir
// apenas 1 album.
db.artists.findOne({
    Albums: {$size : 1}
})