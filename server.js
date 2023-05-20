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

const user_projects = require('./data/user_projects.json');
app.get('/projects', (req, res) => {
  res.status(200).send(user_projects);
});

const project12 = require('./data/project12.json');
app.get('/projects/12/', (req, res) => {
  res.status(200).send(project12);
});

app.post('/projects/12/stop', (req, res) => {
  res.status(200).send();
});
app.post('/projects/12/start', (req, res) => {
  res.status(200).send();
});
app.post('/projects/13/rebuild', (req, res) => {
  res.status(200).send();
});

// ADMIN
const adminInit = require('./data/adminInit.json');
app.get('/projects/adminView', (req, res) => {
  res.status(200).send(adminInit);
});

// USERS
const users = require('./data/users.json');
app.get('/users', (req, res) => {
  res.status(200).send(users);
});

// ADD NEW USER
app.post('/users', (req, res) => {
  if (req.body.name === 'ivan') {
    res.status(200).send();
  } else {
    res.status(500).send();
  }
});
// EDIT USER
app.put('/users', (req, res) => {
  if (
    req.body.availibleCpu === 10 &&
    req.body.availibleRam === 20 &&
    req.body.availibleStorage === 100 &&
    req.body.createdDate === '2023-05-01T14:30:00.000-0700' &&
    req.body.currentCpu === 1 &&
    req.body.currentRam === 9 &&
    req.body.currentStorage === 18 &&
    req.body.id === 1 &&
    req.body.name === 'user1' &&
    req.body.requestCpu === 8 &&
    req.body.requestRam === 15 &&
    req.body.requestStorage === 50
  ) {
    res.status(200).send();
  } else {
    res.status(500).send();
  }
});

// LOGS
app.get('/projects/12/logs', (req, res) => {
  res.status(200).send({
    value:
      "2019-03-05 10:57:51.112  INFO 45469 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet Engine: Apache Tomcat/7.0.52 \n 2019-03-05 10:57:51.253  INFO 45469 --- [ost-startStop-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext \n 2019-03-05 10:57:51.253  INFO 45469 --- [ost-startStop-1] o.s.web.context.ContextLoader            : Root WebApplicationContext: initialization completed in 1358 ms \n 2019-03-05 10:57:51.698  INFO 45469 --- [ost-startStop-1] o.s.b.c.e.ServletRegistrationBean        : Mapping servlet: 'dispatcherServlet' to [/] \n 2019-03-05 10:57:51.702  INFO 45469 --- [ost-startStop-1] o.s.b.c.embedded.FilterRegistrationBean  : Mapping filter: 'hiddenHttpMethodFilter' to: [/*] UnauthorizedError: description: Unauthorized access error",
  });
});
