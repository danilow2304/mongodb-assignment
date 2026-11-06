// 02_find_filter_sort.js — FIND, FILTERING, SORTING
// Run: mongosh --file 02_find_filter_sort.js
use("moviesDB");

console.log("\n--- FIND: all documents (first 5 shown) ---");
printjson(db.movies.find().limit(5).toArray());

console.log("\n--- FIND: one document ---");
printjson(db.movies.findOne({ title: "Inception" }));

console.log("\n--- FIND with projection (title + year only) ---");
printjson(db.movies.find({}, { _id: 0, title: 1, year: 1 }).limit(5).toArray());

console.log("\n--- FILTER: genre equals Sci-Fi ---");
printjson(db.movies.find({ genre: "Sci-Fi" }, { _id: 0, title: 1, rating: 1 }).toArray());

console.log("\n--- FILTER: rating >= 8.8 AND year < 2000 ($and) ---");
printjson(db.movies.find(
  { $and: [{ rating: { $gte: 8.8 } }, { year: { $lt: 2000 } }] },
  { _id: 0, title: 1, year: 1, rating: 1 }).toArray());

console.log("\n--- FILTER: genre is Action OR Horror ($in) ---");
printjson(db.movies.find({ genre: { $in: ["Action", "Horror"] } },
  { _id: 0, title: 1, genre: 1 }).toArray());

console.log("\n--- FILTER: title contains 'the' (regex, case-insensitive) ---");
printjson(db.movies.find({ title: /the/i }, { _id: 0, title: 1 }).toArray());

console.log("\n--- SORT: rating descending, top 5 ---");
printjson(db.movies.find({}, { _id: 0, title: 1, rating: 1 })
  .sort({ rating: -1 }).limit(5).toArray());

console.log("\n--- SORT: year ascending (oldest first), 5 results ---");
printjson(db.movies.find({}, { _id: 0, title: 1, year: 1 })
  .sort({ year: 1 }).limit(5).toArray());

console.log("\n--- FILTER + SORT: Nolan films by year ---");
printjson(db.movies.find({ director: "Christopher Nolan" }, { _id: 0, title: 1, year: 1 })
  .sort({ year: 1 }).toArray());

console.log("\n--- SORT on two fields: genre A-Z, then rating high-low ---");
printjson(db.movies.find({}, { _id: 0, genre: 1, title: 1, rating: 1 })
  .sort({ genre: 1, rating: -1 }).limit(8).toArray());
