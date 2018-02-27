const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017';
//mongoose.connect(process.env.MONGOURL || 'mongodb://localhost/dcfactoftheday');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
  // we're connected!
});

const FactSchema = mongoose.Schema({
  name: String,
  factTitle: String,
  fact: String,
  factDescription: String,
  redditThreadLink: String,
  dateCreated: { type: Date, default: Date.now },
  comments: [{ userid: Number, body: String, date: Date }],
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Fact = mongoose.model('Fact', FactSchema);

const createFact = fact => {
  console.log(fact);
  const newFact = new Fact(fact);
  console.log(newFact);
  newFact.save()
    .then(doc => {
      console.log(doc.name);
    }).catch(err => console.error(err));


};

const getFacts = err =>
  Fact.find()
    .exec()
    .then((err, facts) => {
      if (err) {
        return console.error(err);
      }
      console.log('facts', facts);
      return facts;
    });

module.exports = {
  createFact,
  getFacts,
};
