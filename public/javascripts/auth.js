// const argon2 = require("argon2-ffi").argon2i;
// const crypto = require("crypto");
// const util = require("util");
// const createError = require("http-errors");
// const randomBytes = util.promisify(crypto.randomBytes);

// async function hashPassword(password) {
//   try {
//     return randomBytes(32).then((salt) => argon2.hash(password, salt));
//   } catch (e) {
//     console.log("Error hashing password with argon2", e);
//   }
// }

// async function comparePassword(password, hashedPassword) {
//   const pass = Buffer.from(password);
//   try {
//     const correct = await argon2.verify(hashedPassword, pass);
//     if (correct) {
//       return true;
//     }
//     return false;
//   } catch (e) {
//     console.log("Error argon2 verification", e);
//   }
// }

// function authCheck(req, res, next) {
//   if (!req.session.isLoggedIn || !req.session.user.user_id) {
//     next(
//       createError(401, "You are not authorized", {
//         refererUri: new URL(req.headers.referer).pathname,
//       })
//     );
//     return;
//   }
//   next();
// }

// module.exports = { authCheck, hashPassword, comparePassword };