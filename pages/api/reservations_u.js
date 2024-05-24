import connectMongo from '../../database/conn';
import Reservations_u from '../../model/Reservation-u';

export default async function producthandler(req, res) {
  connectMongo().catch((error) => res.json({ error: 'Connection Failed...!' }));

  if (req.method === 'GET') {
    try {
      const reservations = await Reservations_u.find();
      res.status(200).json(reservations);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid only POST Accepted' });
  }
}
