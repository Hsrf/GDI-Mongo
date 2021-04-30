// avg && sort && limit
//Nessa consulta ordenamos os artistas pela quantidade de 
//seguidores, extraímos o top 3 em seguida e tiramos a
//média de seguidores no top 3.
db.artists.aggregate([
    {
        $sort : { AmountFollowers : -1 }
    },
    {
        $limit: 3
    },
    { 
        $group: 
        { 
            _id: null, 
            avgAmountFollowers : {$avg: "$AmountFollowers"} 
        }
    },
])