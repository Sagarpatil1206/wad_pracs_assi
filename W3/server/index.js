const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const localStorage = require('node-localstorage');
const cors = require('cors');

// Create a new instance of localStorage
const storage = new localStorage.LocalStorage('./scratch');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/submit', (req, res) => {
  const { name, email, password } = req.body;

  let userList = JSON.parse(storage.getItem('users')) || [];
  const user = { name, email, password };
  userList.push(user);
  storage.setItem('users', JSON.stringify(userList));

  return res.status(200).json({ message: 'Form data stored successfully' });
});

app.get('/users', (req, res) => {
  const userList = JSON.parse(storage.getItem('users')) || [];
  return res.status(200).json(userList);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});