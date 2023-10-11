const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = 'feedback_db';
const employeeCollectionName = 'employee';
const messageCollectionName = 'message';

// employee and message collections

// Create Employee
async function createEmployeeDocument(employee_id, first, last, manager_id) {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(employeeCollectionName);
  const result = await collection.insertOne({employeeID : employee_id, firstname: first, lastname: last, role: "Employee", managerID: manager_id});
  console.log(`New document created with _id: ${result.insertedId}`);
  client.close();
  return result.insertedId;
}

// Create Manager
async function createManagerDocument(employee_id, first, last, reports) {
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(employeeCollectionName);
  const result = await collection.insertOne({employeeID : employee_id, firstname: first, lastname: last, role: "Manager", managerID: reports});
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

//Read One Employee Doc
async function readOneEmployeeDocument(id){
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(employeeCollectionName);
  const document = await collection.findOne({employeeID: id});
  console.log(document);
  client.close();
  return document
}

//Read One Message Doc
async function readOneMessageDocument(id){
  const client = await MongoClient.connect(url);
  const db = client.db(dbName);
  const collection = db.collection(messageCollectionName);
  const document = await collection.findOne({messageID: id});
  console.log(document);
  client.close();
  return document
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
  //let insertedId = await createEmployeeDocument(3,"Ola", "Ekdahl", 2);
  let insertedId = await createManagerDocument(4,"Rap", "Payne", [1,2,3]);
  // await readDocuments();
  // await readOneMessageDocument(2);
  // await readEmployeeAllMessages(1)
  // await updateDocument(insertedId, { age: 35 });
  // await readDocuments();
  // await deleteDocument(insertedId);
  // await readDocuments();
}

main();