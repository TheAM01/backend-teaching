import { MongoClient, ServerApiVersion } from "mongodb"
import "dotenv/config"


const uri = process.env.MONGO_URI


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


await client.connect()
const database = client.db("wahaj");

export default database;