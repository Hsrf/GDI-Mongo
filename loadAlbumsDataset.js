// Inserting Albuns into system
db.aalbums.insertMany([
    {
        _id: 1,
        Name: 'The Nights',
        LaunchDate: new Date('2013-12-02'),
        AmountSongs: 0,
        Songs: [1, 2],
    },
    {
        _id: 2,
        Name: 'Without You',
        LaunchDate: new Date('2017-04-22'),
        AmountSongs: 0,
        Songs: [3],
    },
    {
        _id: 3,
        Name: 'Young Sinatra',
        LaunchDate: new Date('2012-01-23'),
        AmountSongs: 0,
        Songs: [4, 5, 6],
    },
    {
        _id: 4,
        Name: 'The Incredible True Story',
        LaunchDate: new Date('2015-05-18'),
        AmountSongs: 0,
        Songs: [7, 8, 9],
    },
    {
        _id: 5,
        Name: 'Amor da Despedida',
        LaunchDate: new Date('2019-11-12'),
        AmountSongs: 0,
        Songs: [10],
    },
    {
        _id: 6,
        Name: 'Basta você me ligar',
        LaunchDate: new Date('2020-10-28'),
        AmountSongs: 0,
        Songs: [11],
    },
    {
        _id: 7,
        Name: 'Evidências',
        LaunchDate: new Date('2013-09-18'),
        AmountSongs: 0,
        Songs: [12],
    },
    {
        _id: 8,
        Name: 'Space Oddity',
        LaunchDate: new Date('1971-05-22'),
        AmountSongs: 0,
        Songs: [13],
    }
]);

db.aalbums.renameCollection("albums");