// Inserting Albuns into system

db.albums.insertMany([
    {
        _id: 1,
        Name: 'The Nights',
        LaunchDate: new Date('2013-02-12'),
        AmountSongs: 2,
        Songs: [1, 2],
    },
    {
        _id: 2,
        Name: 'Without You',
        LaunchDate: new Date('2017-22-04'),
        AmountSongs: 1,
        Songs: [3],
    },
    {
        _id: 3,
        Name: 'Young Sinatra',
        LaunchDate: new Date('2012-23-01'),
        AmountSongs: 3,
        Songs: [4, 5, 6],
    },
    {
        _id: 4,
        Name: 'The Incredible True Story',
        LaunchDate: new Date('2015-18-05'),
        AmountSongs: 3,
        Songs: [7, 8, 9],
    },
    {
        _id: 5,
        Name: 'Amor da Despedida',
        LaunchDate: new Date('2019-12-11'),
        AmountSongs: 1,
        Songs: [10],
    },
    {
        _id: 6,
        Name: 'Basta você me ligar',
        LaunchDate: new Date('2020-28-10'),
        AmountSongs: 1,
        Songs: [11],
    },
    {
        _id: 7,
        Name: 'Evidências',
        LaunchDate: new Date('2013-18-09'),
        AmountSongs: 1,
        Songs: [12],
    },
    {
        _id: 8,
        Name: 'Space Oddity',
        LaunchDate: new Date('1969-22-05'),
        AmountSongs: 1,
        Songs: [12],
    }
]);