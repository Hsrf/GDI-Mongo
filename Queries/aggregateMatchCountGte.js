// aggregate $match $count $gte
//Nessa consulta obtemos a quantidade de artistas
//que possuem 500.000 ou mais seguidores.
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