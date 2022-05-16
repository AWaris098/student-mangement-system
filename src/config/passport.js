const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

// Load Model User

const { User } = require("../models/user");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy(
      {
        usernameField: email,
      },
      (email, password, done) => {
        // Match User

        User.findOne({
          email: email,
        }).then((user) => {
          if (!user) {
            return done(null, false, {
              message: "User does not exist",
            });
          }
          if (user.requres == false) {
            return done(false, null, {
              messsage: "Your regeistration requres has not approved",
            });
          }
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw error;

            if (isMatch) {
              return done(null, user, {
                message: "Welcome back " + user.name,
              });
            } else {
              return done(null, false, {
                message: "Incorrect password",
              });
            }
          });
        });
      }));

      passport.serializeUser = (function (user, done) {
         done (null, user.id)
      });
      
      passport.deserializeUser = (function (id, done) {
          User.findById(id, function (err, user){
            done(error, user)
          })
      })
};
