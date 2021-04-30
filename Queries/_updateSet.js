//update && $set
// Nessa consulta atualizamos o campo 'AmountSongs'
// baseada no tamanho do campo 'Songs' (array)
db.albums.updateMany(
  {},
  [
    {
      $set: {AmountSongs: {$size : "$Songs"}}
    }
  ]
)