import connectMongo from '../../../database/conn';
import Users from '../../../model/Schema';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: 'Connection Failed...!' }));

  if (req.method === 'POST') {
    const { name, surname, email, password } = req.body;
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    const checkexisting = await Users.findOne({ email });
    if (checkexisting)
      return res.status(422).json({ message: 'User Already Exists...!' });

    Users.create(
      {
        name,
        surname,
        email,
        password: await hash(password, 12),
        unhashed_psswd: password,
      },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else if (req.method === 'GET') {
    try {
      const user = await Users.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  } else if (req.method === 'PUT') {
    const { name, surname, email, password } = req.body;
    try {
      const updateduser = await Users.findOneAndReplace(email, {
        email: email,
        password: await hash(password, 12),
        name: name,
        surname: surname,
        unhashed_psswd: password,
      });
      res.status(200).json(updateduser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(500)
      .json({ message: 'HTTP method not valid only POST Accepted' });
  }
}
