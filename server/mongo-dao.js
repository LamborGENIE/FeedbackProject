const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = 'feedback_db';
const employeeCollectionName = 'employee';
const messageCollectionName = 'message';

// employee and message collections

// Create Employee
async function createEmployeeDocument() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(employeeCollectionName);
  const result = await collection.insertOne({employeeID : 2, firstname: "Benton", lastname: "Snodgrass", role: "Employee", managerID: 4});
  console.log(`New document created with _id: ${result.insertedId}`);
  client.close();
  return result.insertedId;
}

//Create Message
async function createMessageDocument() {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(messageCollectionName);
  const result = await collection.insertOne({messageID: 2, from: 2, to: 1, message: "I'm quitting", sentiment: "Negative"});
  console.log(`New document created with _id: ${result.insertedId}`);
  client.close();
  return result.insertedId;
}

// USAGE
async function main() {
  let insertedId = await createMessageDocument();
  // await readDocuments();
  // await readOneDocument(insertedId);
  // await updateDocument(insertedId, { age: 35 });
  // await readDocuments();
  // await deleteDocument(insertedId);
  // await readDocuments();
}

main();