//text && search && pretty
// Nessa consulta obtemos os artistas que possuem
// a palavra 'Brazil' em seu campo 'About'
db.artists.createIndex( { About: "text" } )
db.artists.find( { $text: {$search: 'Brazil'} } ).pretty();