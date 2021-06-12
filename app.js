var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/* code for sessions */

// app.use(session({                             //           //
//   secret: 'a string of your choice',          //           //
//   resave: false,                              // THIS CODE //
//   saveUninitialized: true,                    //           //
//   cookie: { secure: false }                   //           //
// }));


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// // const session = require("express-session");
// // const redisStore = require("connect-redis")(session);
// // const redis = require("redis");
// // const redisClient = redis.createClient();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// const app = express();
// // const isProduction = app.get("env") === "production";


// // // a middleware at global level
// // app.use(
// //   session({
// //     name: "sametable_sid",
// //     secret: 'randomkeyhere',
// //     resave: false,
// //     saveUninitialized: false,
// //     cookie: {
// //       maxAge: 7 * 86400 * 1000, // a session cookie will last for 7 days
// //       secure: isProduction,
// //       httpOnly: true,
// //       sameSite: "none",
// //     },
// //     store: new redisStore({
// //       host: "localhost",
// //       port: 6379,
// //       client: redisClient,
// //     }),
// //   })
// // );
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// module.exports = app;




