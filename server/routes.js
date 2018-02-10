const express = require('express');

const router = express.Router();
const mongo = require('../database');

router.get('/hello', async (req, res) => {
  res.status(200).json('hello world');
});

router.post('/api/fact', async (req, res) => {
  const fact = req.body.fact;
  try {
    await mongo.createFact(fact);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).json(err.stack);
  }
});

router.get('/api/facts', async (req, res) => {
  try {
    const facts = await mongo.getFacts();
    res.status(200).json(facts);
  } catch (err) {
    res.status(500).json(err.stack);
  }
});

module.exports = router;
