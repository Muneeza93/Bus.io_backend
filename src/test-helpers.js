import mongoose from "mongoose";

export const setDatabaseData = async (collectionName, data) => {
  const client = await mongoose.connect(`mongodb://localhost:27017/TESTS_BUS`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("TESTS_BUS");

  await db.collection(collectionName).insertMany(data);

  client.close();
};

export const getDatabaseData = async (collectionName) => {
  const client = await mongoose.connect(`mongodb://localhost:27017/TESTS_BUS`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("TESTS_BUS");

  const result = await db.collection(collectionName).find().toArray();

  client.close();

  return result;
};

export const resetDatabase = async () => {
  const client = await mongoose.connect(`mongodb://localhost:27017/TESTS_BUS`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db("TESTS_BUS");

  await db.dropDatabase();

  client.close();
};
