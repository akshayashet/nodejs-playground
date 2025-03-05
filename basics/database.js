const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const URI = "mongodb+srv://akshayashetdev:YQ68MH8hKLmw7e4p@learnnodejs.jewkv.mongodb.net/?retryWrites=true&w=majority&appName=LearnNodejs";
const client = new MongoClient(URI);

// Database Name
const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    // Establish and verify connection
    const db = client.db(dbName);
    const collection = db.collection('User');

    // Insert a single document
    // const data = { firstName: 'Suma', lastName: 'Baliga', city: 'Mumbai', phoneNumber: '9900099000' };
    // const insertResult = await collection.insertOne(data);
    // console.log('Inserted documents =>', insertResult);

    // Get the documents collection
    const findResult = await collection.find({}).toArray()
    console.log('Found documents =>', findResult);

    const countResult = await collection.countDocuments({});
    console.log('Total documents =>', countResult);

    // Fint all document with firstName = 'Shreya'
    //const query = { firstName: 'Shreya' };
    const query = { _id: new ObjectId('67c020c674b6569af8f1936b') };
    const filterResult = await collection.find(query);
    console.log('Filtered documents =>', await filterResult.toArray());


    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
