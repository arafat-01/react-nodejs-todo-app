const express = require('express');
const app = express ();
const { v4: uuidv4 } = require('uuid');
const port = 3000;

var cors = require ('cors');

app.listen (port, () => {
  console.log ('App is listening on port 3000.')
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.use(cors());
app.use(express.json({ extended: false }));

const todos = []

app.get ('/getTaskList', (req, res) => {
  res.status(200).json(todos)
});

app.post ('/createTask', (req, res) => {
  const newTask = {
    description: req.body.description,
    id: uuidv4()
  }
  todos.push (newTask)
  res.status(201).json (todos)
});
