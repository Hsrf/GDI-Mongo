// Inserting Artists into system

db.artists.insertMany([
    {
        _id: 1,
        Name: 'Logic',
        About: 'Sir Robert Bryson Hall II (born January 22, 1990), known professionally as Logic, is an American YouTuber, streamer, author, retired rapper, singer, songwriter and record producer. As a musician, Logic released six studio albums and received two Grammy Award nominations.',
        MonthlyListeners: 12209057,
        AmountFollowers: 278420,
        Albuns: [3, 4],
        PopularSongs: [5, 4, 8],
    },{
        _id: 2,
        Name: 'Baroes da pisadinha',
        About: 'The standard for very high quality brazilian songs throughout a generation. Simply legends during the pandemic.',
        MonthlyListeners: 8881881,
        AmountFollowers: 155780,
        Albuns: [5, 6],
        PopularSongs: [10, 11],
    },{
        _id: 3,
        Name: 'Avicii',
        About: 'Tim Bergling (8 September 1989 – 20 April 2018), known by his stage name Avicii (/əˈviːtʃi/ ə-VEE-chee, Swedish: [aˈvɪ̌tːɕɪ]), was a Swedish DJ, remixer, record producer, musician, and songwriter.',
        MonthlyListeners: 26877351,
        AmountFollowers: 7910442,
        Albuns: [1, 2],
        PopularSongs: [1, 2, 3],
    },{
        _id: 4,
        Name: 'Chitãozinho & Xororó',
        About: 'One of the great classics from Brazil, inspiring everyone with evidences',
        MonthlyListeners: 2616765,
        AmountFollowers: 178930,
        Albuns: [7],
        PopularSongs: [12],
    },{
        _id: 5,
        Name: 'David Bowie',
        About: 'That guy',
        MonthlyListeners: 15820323,
        AmountFollowers: 777777,
        Albuns: [8],
        PopularSongs: [13],
    }
]);


