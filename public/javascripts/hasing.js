// // import our wrapper auth.js
// const Auth = require("auth");
// const multer = require("multer");
// // we gonna use upload.none() rather than body-parser to access 'req.body'
// // I don't recommed inserting body-parser middleware to your 'app'. Specify it per route.
// const upload = multer();
// const asyncHandler = require("express-async-handler");

//  router.post("/register", upload.none(), asyncHandler(async (req, res, next) => {

//   const { fullName, email, password } = req.body;

//   // 'password' is the plain-text password, so we gonna hash it
//     const hashedPassword = await Auth.hashPassword(password);

//   // We are using node-postgres here('pg'). Raw SQL command. $1, $2 etc. is how you pass the values to it
//   const query = `INSERT INTO account(fullname, email, password) VALUES ($1, $2, $3) RETURNING user_id, fullname, email`;
//   // notice here we're storing just the hashed password! Zero-knowledge of user's password!
//   const values = [fullName, email, hashedPassword];

//   // do the db thing
//   const { rows } = await db.query(query, values);

//   res.status(200).send(rows[0]);
// });