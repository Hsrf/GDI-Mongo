db.artists.aggregate([
    {
        $match: {
            "AmountFollowers": {
                $gte: 500000
            }
        }
    },
    {
        $count: "AmountFollowers gte 500000"
    }
]);
db.artists.aggregate([
    {
        $match: {
            "_id": 1
        }
    },
    {
     $lookup:
       {
         from: "albums",
         localField: "Albuns",
         foreignField: "_id",
         as: "Albuns"
       }
    },
    {
        $unwind: {
            path: "$Albuns",
        }
    },
    {
        $lookup: {
         from: "songs",
         localField: "Albuns.Songs",
         foreignField: "_id",
         as: "Albuns.Songs"
       }
    },
    {
      $project: {
        "_id": 1,
        "ArtistName": "$Name",
        "AlbumName": "$Albuns.Name",
        "TotalDuration": { $sum: "$Albuns.Songs.Duration"},
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