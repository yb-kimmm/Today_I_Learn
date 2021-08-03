const { MongoClient } = require('mongodb');
const uri =
  'mongodb+srv://ybUser:1234@youtubeclone.5qfhq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  const c = await client.connect();

  const users = client.db('fc21').collection('users');

  await users.deleteMany({});

  await users.insertMany([
    {
      name: 'Foo',
      birthYear: 2000,
    },

    {
      name: 'Bar',
      birthYear: 1995,
    },
    {
      name: 'Baz',
      birthYear: 1990,
    },
    {
      name: 'Poo',
      birthYear: 1993,
    },
  ]);

  // await users.updateOne({ name: 'Baz' }, { $set: { name: 'Boo' } });

  await users.deleteOne({
    name: 'Baz',
  });

  const cursor = users.find(
    {
      birthYear: {
        $gte: 1990,
      },
    },
    {
      sort: {
        birthYear: -1,
      },
    }
  );
  await cursor.forEach(console.log);

  await client.close();
}

main();
