import connectMongo from '../../database/conn';
import Products from '../../model/ProductSchema';

export default async function producthandler(req, res) {
  connectMongo().catch((error) => res.json({ error: 'Connection Failed...!' }));

  if (req.method === 'GET') {
    try {
      const products = await Products.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid only POST Accepted' });
  }
}
