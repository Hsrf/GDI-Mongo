// $lookup $project $sum $group $max
// Nessa consulta obtemos a duração máxima dentre
// os albuns de um artista específico.
function getMaxDurationAlbumForArtist(artistId) {
  return db.artists.aggregate([
      {
          $match: {
              "_id": artistId
          }
      },
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
          $unwind: {
              path: "$Albums",
          }
      },
      {
          $lookup: {
          from: "songs",
          localField: "Albums.Songs",
          foreignField: "_id",
          as: "Albums.Songs"
      }
      },
      {
      $project: {
          "_id": 1,
          "ArtistName": "$Name",
          "AlbumName": "$Albums.Name",
          "TotalDuration": { $sum: "$Albums.Songs.Duration"},
      }
      },
      {
          $group: {
              _id: "$_id",
              ArtistName: {"$first": "$ArtistName"},
              AlbumName: {"$first": "$AlbumName"},
              MaxTotalDuration: { $max: "$TotalDuration" }
          }
      }
  ]);
}

getMaxDurationAlbumForArtist(3)