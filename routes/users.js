var express = require('express');
var router = express.Router();
// const Auth = require("./javascripts/auth");
// const multer = require("multer");
// const upload = multer();
// const asyncHandler = require("express-async-handler");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Google Sign-in Verification
//Commented out as we cannot implement it without our routes complete - but this code should work, it is based on Lecture 10

// const CLIENT_ID = '186202105193-9q8v5p15junk5nfje7besqq1sa9tm55g.apps.googleusercontent.com';

// const {OAuth2Client} = require('google-auth-library');
// const client = new OAuth2Client('186202105193-9q8v5p15junk5nfje7besqq1sa9tm55g.apps.googleusercontent.com');
// /*Sign in post request*/
// router.post("/signin", upload.none(), asyncHandler( function async (req, res, next) {
//   const { email, plainTextPassword } = req.body;

//   // get the hashed password associated to the email entered by user
//   const query = `SELECT password FROM account WHERE email=($1)`;
//   const values = [email];
//   const { rows } = await db.query(query, values);

//   const hashedPassword = rows[0].password;

//   // (i love how they name the method to reflect its intention)
//   const isMatch = await Auth.comparePassword(plainTextPassword, hashedPassword);

//   // if 'isMatch' is TRUE, means user entered the correct password, then let her in, and vice versa.
//   if (!isMatch) {
//     return next(
//       createError(422, "Please enter a correct email and password")
//     );
//   }

//   // we will use this flag to determine if a user is still logged in
//   req.session.isLoggedIn = true;
//   // we can also store additional user data
//   req.session.user = { user_id, ...userProfile };

//   // up to you
//   res.sendStatus(isMatch ? 200 : 401);
// });

// router.post('/google_account', function(req, res, next) {

// async function verify() {
//   const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: 186202105193-9q8v5p15junk5nfje7besqq1sa9tm55g.apps.googleusercontent.com,  // Specify the CLIENT_ID of the app that accesses the backend
//       // Or, if multiple clients access the backend:
//       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   const userid = payload['sub'];
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];
// }
// verify().catch(console.error);

//     // if ('user' in req.body) {

//     //     if (req.body.user in users) {
//     //         if (users[req.body.user] == req.body.pass) {
//     //             req.session.user = req.body.user;
//     //             res.send(req.session.user);
//     //         }
//     //         else {
//     //             res.sendStatus(401);
//     //         }
//     //     }
//     //     else {
//     //         res.sendStatus(401);
//     //     }
//     // }

//     // else if ('token' in req.body) {

//     //         async function verify() {
//     //         const ticket = await client.verifyIdToken({
//     //                 idToken: req.body.token,
//     //                 audience: '186202105193-e1gugmmcjdqd168mn3hr2a09ijnkebgg.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
//     //       // Or, if multiple clients access the backend:
//     //       //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//     //         });

//     //             const payload = ticket.getPayload();
//     //             const userid = payload['sub'];
//     //             // If request specified a G Suite domain:
//     //             req.session.user = payload['email'];
//     //             res.send(req.session.user);

//     //         }

//     // verify().catch(function(){res.sendStatus(401)});

//     // }

// });


module.exports = router;