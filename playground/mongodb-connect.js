// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) { 
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to insert Todo', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Alec',
  //   age: 25,
  //   location: 'Austin, TX'
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to insert User', err);
  //   }
  //   console.log(res.ops[0]._id.getTimestamp());
  // });

  db.close();
});