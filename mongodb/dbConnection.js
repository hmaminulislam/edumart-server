const { MongoClient, ServerApiVersion } = require("mongodb");
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const uri = `mongodb+srv://${db_user}:${db_password}@cluster0.wpflsxi.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const dbConnection = async() => {
  try {
    await client.connect();
    const database = await client.db("edumart");
    console.log("database connected");
  } finally {
  }
}

module.exports = dbConnection;
