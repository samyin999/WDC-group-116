// var express = require('express');
// const argon2 = require("argon2-ffi").argon2i;
// const randomBytes = util.promisify(crypto.randomBytes);

// router.post('/signup_process', async function(req, res, next) {  // note use of async

//   var phash = null;
//   try {
//     phash = await argon2.hash(req.body.password);
//   } catch (err) {
//     res.sendStatus(500);
//     return;
//   }

//   // add code here to create new user with salted password hash 'phash'

// });

// router.post('/logi_process', async function(req, res, next) {  // note use of async; you may need to move this to an inner function

//   // add code here to retrieve user details of existing user
//   // assuming valid user with salted password hash 'phash'

//   try {
//     if (await argon2.verify(phash, req.body.password)) {
//       // password match
//       // add code here for when user successfully logged in

//       res.send();

//     } else {
//       // password did not match
//       // add code here for when user login fails

//       res.sendStatus(401);
//       return;
//     }
//   } catch (err) {
//     // internal failure
//     res.sendStatus(500);
//     return;
//   }

// });


// module.exports = router;
