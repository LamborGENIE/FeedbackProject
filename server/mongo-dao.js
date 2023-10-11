import {MongoClient} from 'mongodb'; 
const url = "mongodb://127.0.0.1:27017";
const dbName = 'feedback_db';
const employeeCollectionName = 'employee';
const messageCollectionName = 'message';
const mongoClient = new MongoClient(url);

// employee and message collections

// Create Employee
export async function createEmployeeDocument(employee) {
  const client = await mongoClient.connect();
  const db = client.db(dbName);
  const collection = db.collection(employeeCollectionName);
  const result = await collection.insertOne(employee);
  console.log(`New document created with _id: ${result.insertedId}`);
  client.close();
  return result;
}

//Create Message
export async function createMessageDocument(message) {
  const client = await mongoClient.connect();
  const db = client.db(dbName);
  const collection = db.collection(messageCollectionName);
  const result = await collection.insertOne(message);
  console.log(`New document created with _id: ${result.insertedId}`);
  client.close();
  return result;
}

//Add Response to Message
export async function respondToMessage(message_id, response){
  const client = await mongoClient.connect();
  const db = client.db(dbName);
  const collection = db.collection(messageCollectionName);
  const result = await collection.updateOne({ messageID: message_id}, { $set: {messageResponse : response}});
  console.log(`${result.modifiedCount} document(s) updated`);
  client.close();
}

//Read One Employee Doc
export async function readOneEmployeeDocument(id){
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(employeeCollectionName);
  const document = await collection.findOne({employeeID: +id});
  client.close();
  return document;
}

//Read One Message Doc
export async function readOneMessageDocument(id){
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(messageCollectionName);
  const document = await collection.findOne({messageID: +id});
  client.close();
  return document;
}

//Read All of an Employee's Messages
async function readEmployeeAllMessages(employee_id){
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(messageCollectionName);
  const documents = await collection.find({from : employee_id}).toArray();
  console.log(documents);
  client.close();
  return documents;
}

// USAGE
async function main() {
  // let insertedId = await createMessageDocument();
  // await respondToMessage(1,"Yah")
  // await readDocuments();
  // await readOneDocument(insertedId);
  // await updateDocument(insertedId, { age: 35 });
  // await readDocuments();
  // await deleteDocument(insertedId);
  // await readDocuments();
}

// main();