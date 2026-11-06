# MongoDB Assignment — Movies Database

Demonstrates **Insert, Find, Update, Delete, Filtering, and Sorting** in MongoDB using `mongosh`.

## Database structure

- **Database:** `moviesDB`
- **Collection:** `movies` (22 documents)

| Field | Type | Example |
|---|---|---|
| `_id` | ObjectId (auto) | `ObjectId("...")` |
| `title` | String | `"Inception"` |
| `director` | String | `"Christopher Nolan"` |
| `year` | Number | `2010` |
| `genre` | String | `"Sci-Fi"` |
| `rating` | Number | `8.8` |
| `runtimeMin` | Number | `148` |

Sample document:
```json
{ "title": "Inception", "director": "Christopher Nolan", "year": 2010,
  "genre": "Sci-Fi", "rating": 8.8, "runtimeMin": 148 }
```

## Files

| File | Demonstrates |
|---|---|
| `01_insert.js` | `insertOne`, `insertMany` (22 records) |
| `02_find_filter_sort.js` | `find`, `findOne`, projection, filtering (`$gte`, `$lt`, `$and`, `$in`, regex), sorting (`sort`, `limit`) |
| `03_update_delete.js` | `updateOne`, `updateMany`, `$set`, `$inc`, `deleteOne`, `deleteMany` |

## How to run

```bash
mongosh --file 01_insert.js
mongosh --file 02_find_filter_sort.js
mongosh --file 03_update_delete.js
```
Run in that order. Re-running `01_insert.js` resets the collection.

## Sample queries

```js
db.movies.find({ genre: "Sci-Fi" })                              // filter
db.movies.find({ rating: { $gte: 8.8 }, year: { $lt: 2000 } })   // filter on two fields
db.movies.find().sort({ rating: -1 }).limit(5)                   // sort
db.movies.updateOne({ title: "Black Panther" }, { $set: { rating: 7.4 } })  // update
db.movies.deleteMany({ rating: { $lt: 8.0 } })                   // delete
```

## Screenshots

See the `screenshots/` folder (one per script: insert, find/filter/sort, update/delete).
