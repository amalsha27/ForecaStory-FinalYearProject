const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.json());

const uri = "mongodb://localhost:27017";

MongoClient.connect(uri, (err, client) => {
    if (err) {
      console.error('Failed to connect to MongoDB', err);
      return;
    }
    console.log('Connected to MongoDB');
    const db = client.db('contactDB');
    app.locals.db = db;

  app.post('/api/contact', (req, res) => {
    db.collection('contacts').insertOne(req.body, (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Failed to insert document' });
      } else {
        res.status(200).send({ message: 'Document inserted' });
      }
    });
  });

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});