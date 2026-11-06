// 03_update_delete.js — UPDATE and DELETE
// Run: mongosh --file 03_update_delete.js
use("moviesDB");

console.log("\n--- UPDATE: updateOne (change a rating) ---");
printjson(db.movies.updateOne({ title: "Black Panther" }, { $set: { rating: 7.4 } }));
printjson(db.movies.findOne({ title: "Black Panther" }, { _id: 0, title: 1, rating: 1 }));

console.log("\n--- UPDATE: updateMany (add a field to every Animation film) ---");
printjson(db.movies.updateMany({ genre: "Animation" }, { $set: { familyFriendly: true } }));
printjson(db.movies.find({ genre: "Animation" }, { _id: 0, title: 1, familyFriendly: 1 }).toArray());

console.log("\n--- UPDATE: $inc (add 0.1 to rating for all Nolan films) ---");
printjson(db.movies.updateMany({ director: "Christopher Nolan" }, { $inc: { rating: 0.1 } }));

console.log("\n--- DELETE: deleteOne ---");
printjson(db.movies.deleteOne({ title: "Get Out" }));

console.log("\n--- DELETE: deleteMany (rating below 8.0) ---");
printjson(db.movies.deleteMany({ rating: { $lt: 8.0 } }));

console.log("\nDocuments remaining:", db.movies.countDocuments());
