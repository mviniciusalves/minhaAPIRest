"use strict";

const {
  MongoClient
} = require('mongodb');

const uri = "mongodb+srv://vinicius:2mlwO6wApUbwrIzm@cluster0.iwj8h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  const collection = client.db("test").collection("devices"); // perform actions on the collection object

  client.close();
});