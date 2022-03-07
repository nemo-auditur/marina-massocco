const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async (req, res) => {
  const { db } = await connectToDatabase();
  console.log(db);
  const movies = await db
    .collection("projects")
    .find({})
    .toArray();
    console.log('movies',movies);
  res.json(movies);
};