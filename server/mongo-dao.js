const mongodb = require("mongodb"); // mongo client library
const url = "mongodb://localhost:27017/feedback_db";
let dbPool;
// employee and message collections
mongodb.MongoClient.connect(url, function (err, db) {
  if (!err) {
    dbPool = db.db("feedback_db");
  } else {
    console.log("DB CONNECTION FAILED. Is database running?");
  }
});