const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://sanjaykumar:Sanjay2025@cluster0.mavy3sh.mongodb.net/";
const client = new MongoClient(url);

const dbName = "HelloWorld";
async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "Dusmita",
    lastname: "Mohanta",
    city: "Cuttack",
    phonenumber: "82607838712",
  };
  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);
  //   // the following code examples can be pasted here...
  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  //   const countResult = await collection.countDocuments();
  //   console.log("Count of documents =>", countResult);

  const result = await collection.find({ firstname: "Dusmita" }).count-();
  console.log("result =>", result);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
