const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("projects")
    .find({})
    .toArray();

  res.json(movies);
};