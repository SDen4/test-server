const server = require('express');
const cors = require('cors');
const app = server();
const PORT = 3001;

app.use(server.json());
app.use(cors());
app.use(server.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}. Open http://localhost:3001/`);
});

// http://localhost:8001/authorize
app.post('/authorize', (req, res) => {
  if (req.body.username === '12' && req.body.password === '12') {
    res.status(200).send({
      'authorization_token': 'string',
      'role': 'USER',
    });
  } else if (req.body.username === '13' && req.body.password === '13') {
    res.status(200).send({
      'authorization_token': 'string',
      'role': 'ADMIN',
    });
  } else {
    res.status(403).send();
  }
});

app.get('/api', (req, res) => {
  if (req.query.test === 'test') {
    res.status(200).send({ testParam: 'success!!!' });
  } else {
    res.status(500).send({ code: '500', message: 'server error' });
  }
});

app.post('/api', (req, res) => {
  if (req.body.test === 'test') {
    res.status(200).send({ testParam: 'success!!!' });
  } else {
    res.status(500).send({ code: '500', message: 'server error' });
  }
});

app.post('/projects', (req, res) => {
  if (req.body.name === '12' && req.body.description === '12') {
    res.status(200).send({ testParam: 'success!!!' });
  } else {
    res.status(500).send({ code: '500', message: 'server error' });
  }
});
