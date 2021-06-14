var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login', { title: 'login' });
    res.redirect('/login.html');
});

/* GET user_details */
router.get('/getUser', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM userAccount;";
        connection.query(query, function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows); //send response
        });
    });
});

// GET checkin
router.get('/getCheckin', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {

        if (err) {
            res.sendStatus(500);
            return;
        }

        // location within the database
        var query = "SELECT * FROM checkin";

        connection.query(query, function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows); //send response
        });
    });
});

/* GET venue */
router.get('/get_venue', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM userAccount;";
        connection.query(query, function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows); //send response
        });
    });

});

// /* GET venue recent_visit*/
router.get('/get_venue_recent_visit', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM checkin;";
        connection.query(query, function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows); //send response
        });
    });
});

/* GET get user checkin history */
router.get('/user/details/checkIn/:id', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM userAccount;";
        connection.query(query, function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows); //send response
        });
    });
});

/* GET hostpot*/
router.get('/hotspots', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "SELECT * FROM venue;";
        connection.query(query, function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.json(rows); //send response
        });
    });
});

/* POST register_user */
router.post('/register_user', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO adminAccount (firstName,lastName) VALUES (?,?);";
        connection.query(query, [req.body.firstName1, req.body.lastName1], function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.end(); //send response
        });
    });

});

/* POST register_venue_manager */
router.post('/register_venue_manager', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO venueAccount (firstName,lastName,dateOfBirth,email,mobileNumber) VALUES (?,?,?,?,?);";
        connection.query(query, [req.body.firstName, req.body.lastName, req.body.dateOfBirth, req.body.mobileNumber], function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(400);
                return;
            }
            res.end();
        });
    });
});

/* POST register_admin */
router.post('/register_admin', function (req, res, next) {

    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO adminAccount (firstName,lastName,dateOfBirth,email,mobileNumber) VALUES (?,?,?,?,?);";
        connection.query(query, [
            req.body.firstName1,
            req.body.lastName1,
            req.body.dateOfBirth1,
            req.body.email1,
            req.body.mobileNumber1
        ], function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.end(); //send response
        });
    });

});

/* POST add_venue */
router.post('/add_venue', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "INSERT INTO venueAccount (venueName, contactNo, lat, lon) VALUES (?,?,?,?);";
        connection.query(query, [req.body.venueName1, req.body.contactNo1, req.body.lat1, req.body.lon1], function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(400);
                return;
            }
            res.end();
        });
    });
});

/* POST update venue */
router.post('/update_venue_details', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "UPDATE venueAccount SET venueName = ?, contactNo = ?, lat = ?, lon = ?;";
        connection.query(query, [req.body.venueName1, req.body.contactNo1, req.body.lat1, req.body.lon1], function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(400);
                return;
            }
            res.end();
        });
    });
});

// /* POST update user */
router.post('/update_user_details', function (req, res, next) {
    req.pool.getConnection(function (err, connection) {
        if (err) {
            res.sendStatus(500);
            return;
        }
        var query = "UPDATE userAccount SET address = ?, firstName = ?, lastName = ?,accountCreationTime = ?,dateOfBirth = ?,email = ?,mobileNumber = ?,hasCovid = ?;";
        connection.query(query, (query, [
            req.body.address,
            req.body.firstName,
            req.body.lastName,
            req.body.accountCreationTime,
            req.body.dateOfBirth,
            req.body.email,
            req.body.mobileNumber,
            req.body.hasCovid
        ]), function (err, rows, fields) {
            connection.release(); //release connection
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.end(); //send response
        });
    });
});

/* POST checkin */
router.post('/checkin', function (req, res, next) {

    if (req.body !== null) {
        res.send(req.body);
        res.end();
    }
    else {
        res.sendStatus(400);
    }

});

/* POST Logout*/
router.post('/logout', function (req, res) {
    req.session.destroy();
});

/* POST update admin account*/
router.post('/admin_update', function (req, res, next) {

    if (req.body !== null) {
        res.send(req.body);
        res.end();
    }
    else {
        res.sendStatus(400);
    }

});

/* POST update manager account*/
router.post('/update_manager_details', function (req, res, next) {

    if (req.body !== null) {
        res.send(req.body);
        res.end();
    }
    else {
        res.sendStatus(400);
    }

});

module.exports = router;
