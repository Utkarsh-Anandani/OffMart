import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("MyAppDatabase");

  const products = await db.collection("products").find({}).toArray();
  res.json(products);
}
