import {MongoClient} from 'mongodb'; 
const url = "mongodb://127.0.0.1:27017";
const dbName = 'feedback_db';
const employeeCollectionName = 'employee';
const messageCollectionName = 'message';
const mongoClient = new MongoClient(url);

// employee and message collections

// Create Employee
export async function createEmployeeDocument() {
  const client = await mongoClient.connect();
  const db = client.db(dbName);
  const collection = db.collection(employeeCollectionName);
  const result = await collection.insertOne({employeeID : 2, firstname: "Benton", lastname: "Snodgrass", role: "Employee", managerID: 4});
  console.log(`New document created with _id: ${result.insertedId}`);
  client.close();
  return result.insertedId;
}

//Create Message
export async function createMessageDocument() {
  const client = await mongoClient.connect();
  const db = client.db(dbName);
  const collection = db.collection(messageCollectionName);
  const result = await collection.insertOne({messageID: 2, from: 2, to: 1, message: "I'm quitting", sentiment: "Negative"});
  console.log(`New document created with _id: ${result.insertedId}`);
  client.close();
  return result.insertedId;
}

export function getAllMessages() {

  return "Hello World"
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

// main();