// Inserting Users into system

db.users.insertMany([
    {
        _id: 1,
        Name: 'Igor Simões',
        Email: 'igaoManeiro79@yahoo.com',
        FollowedArtists: [1, 2],
        FavoriteSongs: [3, 8, 10],
    },
    {
        _id: 2,
        Name: 'Hugo Falcão',
        Email: 'hugo99srf@yopmail.com',
        FollowedArtists: [1, 2, 3, 4],
        FavoriteSongs: [1, 4, 12],
    },
    {
        _id: 3,
        Name: 'João Pedro',
        Email: 'JotaPedro@uol.com',
        FollowedArtists: [1],
        FavoriteSongs: [10, 11],
    },
    {
        _id: 4,
        Name: 'Elon Musk',
        Email: 'elongatedMusketeer@spacex.mars',
        FollowedArtists: [5, 2],
        FavoriteSongs: [13],
    },{
        _id: 5,
        Name: 'Thiago Souzza',
        Email: 'bro@emailDosBros.elonMusk',
        FollowedArtists: null,
        FavoriteSongs: [13],
    },
]);