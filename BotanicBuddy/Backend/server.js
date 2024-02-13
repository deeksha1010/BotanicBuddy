const express = require('express');
const bodyParser = require('body-parser');
const database = require('./queries');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const authenticated = await database.authenticateUser(username, password);
    if (authenticated) {
      res.send('Login successful!');
    } else {
      res.status(401).send('Incorrect username or password');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

app.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExists = await database.userExists(username);
    if (!userExists) {
      await database.insertUser(username, password);
      res.send('User created successfully!');
    } else {
      res.status(400).send('User already exists');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});