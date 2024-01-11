var MongoClient = require('mongodb').MongoClient
var data = require("./data.js").data

const uri = "mongodb://127.0.0.1:27017/"

const client = new MongoClient(uri)
async function run() {
    try {
        await client.connect();
        var database = client.db("magic");
        database.dropDatabase()
        database = client.db("magic");
        const elements = database.collection("elements");
        const result = await elements.insertMany(data);
        console.log(`${result.insertedCount} documents were inserted`);
} finally {
await client.close();
}
}
run()