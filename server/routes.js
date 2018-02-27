const express = require('express');

const router = express.Router();
const mongo = require('../database');

router.get('/hello', async (req, res) => {
  res.status(200).json('hello world');
});

router.get('/api/fact', async (req, res) => {
  //const fact = req.body.fact;
  let fact = {
    name: 'testfactName',
    factTitle: 'testfactTitle',
    fact: 'testfactttt',
    factDescription: 'testFactDescription',
    redditThreadLink: 'defaultnone',
  }

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
    console.log(facts);
    res.status(200).json(facts);
  } catch (err) {
    res.status(500).json(err.stack);
  }
});

module.exports = router;
