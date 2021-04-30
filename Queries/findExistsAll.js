// find && exists && all
// Nessa consulta obtemos os usuários que seguem os artistas
// 1 e 2 ao mesmo tempo.
db.users.find({
    FollowedArtists:  { $exists: true, $all:[1, 2] } 
}).pretty()