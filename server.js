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
app.post('/api/authorize', (req, res) => {
  if (req.body.username === '12' && req.body.password === '12') {
    res.status(200).send({
      'authorization_token': 'token_string_token',
      'role': 'USER',
    });
  } else if (req.body.username === '13' && req.body.password === '13') {
    res.status(200).send({
      'authorization_token': 'token_string_token',
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

app.post('/api/projects', (req, res) => {
  if (req.body.name === '12' && req.body.description === '12') {
    res.status(200).send({ testParam: 'success!!!' });
  } else {
    res.status(500).send({ code: '500', message: 'server error' });
  }
});

const user_projects = require('./data/user_projects.json');
app.get('/api/projects', (req, res) => {
  res.status(200).send(user_projects);
});

const project12 = require('./data/project12.json');
app.get('/api/projects/12/', (req, res) => {
  res.status(200).send(project12);
});

app.post('/api/projects/12/stop', (req, res) => {
  res.status(200).send();
});
app.post('/api/projects/12/start', (req, res) => {
  res.status(200).send();
});
app.post('/api/projects/13/rebuild', (req, res) => {
  res.status(200).send();
});

// ADMIN
const adminInit = require('./data/adminInit.json');
app.get('/api/projects/adminView', (req, res) => {
  res.status(200).send(adminInit);
});

// USERS
const users = require('./data/users.json');
app.get('/api/users', (req, res) => {
  res.status(200).send(users);
});

// ADD NEW USER
app.post('/api/users', (req, res) => {
  if (req.body.name === 'ivan') {
    res.status(200).send();
  } else {
    res.status(500).send();
  }
});
// EDIT USER
app.put('/api/users', (req, res) => {
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
app.get('/api/projects/12/logs', (req, res) => {
  res.status(200).send({
    'value':
      "\n  .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::               (v2.7.12)\n\n2023-05-31 23:12:44.581  INFO 1 --- [           main] ru.test.demo.DemoApplication             : Starting DemoApplication v0.0.1-SNAPSHOT using Java 11.0.16 on user1-50-8ccf6cccf-wmgsx with PID 1 (/opt/app/demo-0.0.1-SNAPSHOT.jar started by root in /)\n2023-05-31 23:12:44.588  INFO 1 --- [           main] ru.test.demo.DemoApplication             : No active profile set, falling back to 1 default profile: \"default\"\n2023-05-31 23:12:47.261  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port(s): 9000 (http)\n2023-05-31 23:12:47.289  INFO 1 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]\n2023-05-31 23:12:47.290  INFO 1 --- [           main] org.apache.catalina.core.StandardEngine  : Starting Servlet engine: [Apache Tomcat/9.0.75]\n2023-05-31 23:12:47.662  INFO 1 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext\n2023-05-31 23:12:47.663  INFO 1 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 2925 ms\n2023-05-31 23:12:49.727  INFO 1 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 9000 (http) with context path ''\n2023-05-31 23:12:49.756  INFO 1 --- [           main] ru.test.demo.DemoApplication             : Started DemoApplication in 6.354 seconds (JVM running for 7.844)\n2023-05-31 23:22:03.526  INFO 1 --- [nio-9000-exec-1] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring DispatcherServlet 'dispatcherServlet'\n2023-05-31 23:22:03.532  INFO 1 --- [nio-9000-exec-1] o.s.web.servlet.DispatcherServlet        : Initializing Servlet 'dispatcherServlet'\n2023-05-31 23:22:03.535  INFO 1 --- [nio-9000-exec-1] o.s.web.servlet.DispatcherServlet        : Completed initialization in 3 ms\n",
  });
});
