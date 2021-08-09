const { MongoClient } = require('mongodb');

const uri =
  'mongodb+srv://ybUser:[pw]@ybdb.5qfhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;
