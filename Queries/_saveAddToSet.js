// save
// Nessa consulta inserimos ou atualizamos o usuário
// de id 6, mas como não existe apenas inserimos.
db.users.save({
    _id: 6,
    Name: 'Thiago Monitor',
    Email: 'nos@teamamos',
    FollowedArtists: [],
    FavoriteSongs: [],
})
//$addToSet
// Nessa consulta adicionamos um artista a lista de
// artistas seguidos do usuário recém-inserido
db.users.update(
    { _id: 6 },
    { $addToSet: { FollowedArtists: 5 } }
)