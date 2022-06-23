const server = require('express');
const cors = require('cors');
const app = server();
const PORT = 8001;

app.use(server.json());
app.use(cors());
app.use(server.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}. Open http://localhost:8001/`);
});

// http://localhost:8001/api/test?testParam=test
app.get('/api/test', (req, res) => {
  if (req.query.testParam === 'test') {
    res.status(200).send({ test: 'success!!!' });
  } else {
    res.status(204).send({ code: '204', message: 'no data' });
  }
});

// пример POST-запроса (проверять с помощью postman или аналогов)
app.post('/api/post-test', (req, res) => {
  if (req.body.testParam === 'test') {
    res.status(200).send({ testParam: 'success!!!' });
  } else {
    res.status(500).send({ code: '500', message: 'server error' });
  }
});
