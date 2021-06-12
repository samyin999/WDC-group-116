var express = require('express');
var router = express.Router();
// const argon2 = require("argon2-ffi").argon2i;
// const randomBytes = util.promisify(crypto.randomBytes);
// var async = require('asyncawait/async');
// var await = require('asyncawait/await');
// const Auth = require("./javascripts/auth");
// const multer = require("multer");
// const upload = multer();
// const asyncHandler = require("express-async-handler");
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
  res.redirect('/login.html');
});

/* POST register_user */
router.post('/register_user', function(req, res, next) {

    if (req.body !== null) {
        res.send(req.body);
        res.end();
    }
    else {
        res.sendStatus(400);
    }
});

/* POST register_venue_manager */
router.post('/register_venue_manager', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});

/* POST register_admin */
router.post('/register_admin', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});

/* POST register_venue */
router.post('/register_venue', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});

/* POST update venue */
router.post('/update_venue_details', function (req, res, next) {
    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }
});

/* POST update user */
router.post('/update_user_details', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});

/* GET get user */
router.get('/register_user', function(req, res, next) {

        res.render('register');
});

/* GET get user checkin history */
router.get('/user/details/checkIn/:id', function(req, res, next) {
        console.log(req.params);
        res.render('register');
});

/* GET helloworld */
router.get('/helloworld', function(req, res, next) {
    console.log(path.join(__dirname, '/user.html'));
    // res.sendFile(path.join(__dirname, '/user.html'));
    res.send("helloworld");
});

/* POST update hotspot */
router.post('/update_hotspot', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});

/* POST checkin */
router.post('/checkin', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});

/* GET venue */
router.post('/get_venue', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});
/* POST Logout*/
router.post("/logout", function (req, res) {
   req.session.destroy();
});

/* POST update admin account*/
router.post('/admin_update', function(req, res, next) {

    if (req.body !== null) {
          res.send(req.body);
          res.end();
    }
    else {
          res.sendStatus(400);
    }

});

// router.post('/signup_user', async function(req, res, next) {

//     if( 'user' in req.body &&
//         'pass' in req.body &&
//         'email' in req.body &&
//         'given_name' in req.body &&
//         'family_name' in req.body) {


//         let hash = await argon2.hash(req.body.pass);
//         console.log(hash);

//         req.pool.getConnection( function(err,connection) {
//             if (err) {
//                 console.log(err);
//                 res.sendStatus(500);
//                 return;
//             }
//             var query = `INSERT INTO users (given_name,family_name,username,password_hash,email)
//                             VALUES (?,?,?,?,?);`;
//             connection.query(query,[
//                 req.body.given_name,
//                 req.body.family_name,
//                 req.body.user,
//                 hash,
//                 req.body.email], function(err, rows, fields) {
//               connection.release(); // release connection
//               if (err) {
//                 console.log(err);
//                 res.sendStatus(500);
//                 return;
//               }
//               res.end();
//             });
//         });



//     } else {
//         res.sendStatus(400);
//     }

// });

// router.post('/signup_process', async function(req, res, next) {  // note use of async

//   var phash = null;
//   try {
//     phash = await argon2.hash(req.body.password);
//   }
//   catch (err) {
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


module.exports = router;
