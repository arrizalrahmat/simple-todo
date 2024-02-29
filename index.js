const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const todoRoutes = require('./src/routes/todo-routes');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
