// filter && cond && size
// Nessa consulta obtemos os albuns dos artistas que possuem
// mais de uma música, ou seja, não são albuns single.
db.artists.aggregate([
    {
        $lookup:
        {
            from: "albums",
            localField: "Albums",
            foreignField: "_id",
            as: "Albums"
        }
    },
    {
      $project: {
       ArtistName: "$Name",
         NonSingleAlbums: {
            $filter: {
               input: "$Albums",
               as: "album",
               cond: { $gt: [ {$size: "$$album.Songs"}, 1 ] }
            }
         }
      }
    }
])