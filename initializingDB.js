// Initializing DB
// Script version of USE
db = db.getSiblingDB("gdi");


// Dropping any leftover datasets
db.albums.drop();
db.artists.drop();
db.songs.drop();
db.users.drop();