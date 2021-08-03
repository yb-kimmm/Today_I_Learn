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
  const cities = client.db('fc21').collection('cities');

  await users.deleteMany({});
  await cities.deleteMany({});

  await cities.insertMany([
    { name: '서울', population: 1000 },
    { name: '대전', population: 500 },
  ]);

  await users.insertMany([
    {
      name: 'Foo',
      birthYear: 2000,
      contacts: [
        {
          type: 'phone',
          number: '+8201012345678',
        },
        {
          type: 'tel',
          number: '+1234567',
        },
      ],
    },

    {
      name: 'Bar',
      birthYear: 1995,
      city: '서울',
      contacts: [
        {
          type: 'tel',
          number: '+04112341234',
        },
      ],
    },
    {
      name: 'Baz',
      birthYear: 1990,
      city: '대전',
      contacts: [
        {
          type: 'phone',
          number: '+8201012345678',
        },
      ],
    },
    {
      name: 'Poo',
      birthYear: 1993,
      city: '대전',
    },
  ]);

  // await users.updateOne({ name: 'Baz' }, { $set: { name: 'Boo' } });

  // await users.deleteOne({
  //   name: 'Baz',
  // });

  // const cursor = users.find(
  //   {
  //     birthYear: {
  //       $gte: 1990,
  //     },
  //   },
  //   {
  //     sort: {
  //       birthYear: -1,
  //     },
  //   }
  // );
  const cursor = users.aggregate([
    {
      $lookup: {
        from: 'cities',
        localField: 'city',
        foreignField: 'name',
        as: 'city_info',
      },
    },
    {
      $match: {
        $and: [
          {
            'city_info.population': {
              $gte: 500,
            },
          },
          {
            birthYear: {
              $gte: 1995,
            },
          },
        ],
      },
    },
    // {
    //   $count: 'num_users',
    // },
  ]);

  await cursor.forEach(console.log);

  await client.close();
}

main();
