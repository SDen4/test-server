const server = require('express');
const cors = require('cors');
const app = server();
const PORT = 8001;

app.use(server.json());
app.use(cors());
app.use(server.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// http://localhost:8001/api/test?testParam=test
app.get('/api/test', (req, res) => {
  if (req.query.testParam === 'test') {
    res.status(200).send({ test: 'success!!!' });
  } else {
    res.status(204).send({ code: '204', message: 'no data' });
  }
});
