// 01_insert.js — create the database and INSERT 22 records
// Run: mongosh --file 01_insert.js
use("moviesDB");
db.movies.drop(); // start clean so the script can be re-run

// insertOne: a single document
db.movies.insertOne({
  title: "The Shawshank Redemption", director: "Frank Darabont",
  year: 1994, genre: "Drama", rating: 9.3, runtimeMin: 142
});

// insertMany: 21 more documents
db.movies.insertMany([
  { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, genre: "Crime", rating: 9.2, runtimeMin: 175 },
  { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, genre: "Action", rating: 9.0, runtimeMin: 152 },
  { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, genre: "Crime", rating: 8.9, runtimeMin: 154 },
  { title: "Forrest Gump", director: "Robert Zemeckis", year: 1994, genre: "Drama", rating: 8.8, runtimeMin: 142 },
  { title: "Inception", director: "Christopher Nolan", year: 2010, genre: "Sci-Fi", rating: 8.8, runtimeMin: 148 },
  { title: "The Matrix", director: "Lana Wachowski", year: 1999, genre: "Sci-Fi", rating: 8.7, runtimeMin: 136 },
  { title: "Goodfellas", director: "Martin Scorsese", year: 1990, genre: "Crime", rating: 8.7, runtimeMin: 145 },
  { title: "Interstellar", director: "Christopher Nolan", year: 2014, genre: "Sci-Fi", rating: 8.7, runtimeMin: 169 },
  { title: "Parasite", director: "Bong Joon-ho", year: 2019, genre: "Thriller", rating: 8.5, runtimeMin: 132 },
  { title: "Gladiator", director: "Ridley Scott", year: 2000, genre: "Action", rating: 8.5, runtimeMin: 155 },
  { title: "The Lion King", director: "Roger Allers", year: 1994, genre: "Animation", rating: 8.5, runtimeMin: 88 },
  { title: "Spirited Away", director: "Hayao Miyazaki", year: 2001, genre: "Animation", rating: 8.6, runtimeMin: 125 },
  { title: "Whiplash", director: "Damien Chazelle", year: 2014, genre: "Drama", rating: 8.5, runtimeMin: 106 },
  { title: "Get Out", director: "Jordan Peele", year: 2017, genre: "Horror", rating: 7.8, runtimeMin: 104 },
  { title: "Mad Max: Fury Road", director: "George Miller", year: 2015, genre: "Action", rating: 8.1, runtimeMin: 120 },
  { title: "La La Land", director: "Damien Chazelle", year: 2016, genre: "Musical", rating: 8.0, runtimeMin: 128 },
  { title: "Toy Story", director: "John Lasseter", year: 1995, genre: "Animation", rating: 8.3, runtimeMin: 81 },
  { title: "Jurassic Park", director: "Steven Spielberg", year: 1993, genre: "Adventure", rating: 8.2, runtimeMin: 127 },
  { title: "Alien", director: "Ridley Scott", year: 1979, genre: "Horror", rating: 8.5, runtimeMin: 117 },
  { title: "Black Panther", director: "Ryan Coogler", year: 2018, genre: "Action", rating: 7.3, runtimeMin: 134 },
  { title: "The Grand Budapest Hotel", director: "Wes Anderson", year: 2014, genre: "Comedy", rating: 8.1, runtimeMin: 99 }
]);

console.log("Total documents:", db.movies.countDocuments()); // expect 22
