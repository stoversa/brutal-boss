// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
  console.log('loading dev environments')
  require('dotenv').config()
}
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
const passport = require('./passport');
const app = express();
const http = require('http').Server(app);
const socket = require("socket.io");
const PORT = process.env.PORT || 8080;

app.use(express.static("client/build"))

// ===== Middleware ==== 
app.use(morgan('dev'))

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}))

app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({
      mongooseConnection: dbConnection
    }),
    resave: false,
    saveUninitialized: false
  })
)

server = app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});


io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function (data) {
    io.emit('RECEIVE_MESSAGE', data);
  });
});

// ====== Error handler ====
app.use(function (err, req, res, next) {
  console.log('====== ERROR =======')
  console.error(err.stack)
  res.status(500)
});

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// Add API Routes
app.use(routes);