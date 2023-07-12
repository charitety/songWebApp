import { MongoClient } from 'mongodb';
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
const filter = {};
const client = await MongoClient.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const coll = client.db('songs').collection('scores');
const cursor = coll.find(filter);
const result = await cursor.toArray();
await client.close();

// const mongoose = require('mongoose');

// const MONGO_URI = require('./key.js');

// mongoose.connect(MONGO_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'songs'
//     })
    
//     .then(() => console.log('Connected to Mongo DB.'))
//     .catch(err => console.log(err));
  
// //   const Schema = mongoose.Schema;

//   const Song = mongoose.model('song', personSchema);

// // exports all the models in an object to be used in the controller
// module.exports = {
//   Song
// };