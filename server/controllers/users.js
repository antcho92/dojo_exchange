var mongoose = require('mongoose');
var User = mongoose.model('User');
var Exchange = mongoose.model('Exchange');

module.exports = (function() {
  return {
    index: function(req, res) {
      console.log('request received');
      User.find({}, function(err, users) {
        if (err) {
          res.json(err);
        }
        console.log(users);
        res.json(users);
      })
    },
    create: function(req, res) {
      console.log('register request received');
      var userInstance = new User(req.body);
      userInstance.password = userInstance.hashPassword(req.body.password);
      userInstance.save(function(err, newUser) {
        if (err) {
          res.json(err);
        } else {
          req.session.user = newUser;
          req.session.save();
          res.json(newUser);
        }
      })
    },
    login: function(req, res) {
      console.log('login req received');
      User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
          res.json(err);
        } else if (!user) {
          res.json({
            errors: {
              login: {
                message: 'Invalid username or password'
              }
            }
          });
        } else {
          if (user.validatePassword(req.body.password)) {
            req.session.user = user;
            req.session.save();
            res.json({
              '_id': user._id,
              'message': 'sucessfully logged in'
            });
          } else {
            res.json({
              errors: {
                login: {
                  message: 'Invalid username or password'
                }
              }
            });
          }
        }
      })
    },
    logout: function(req, res) {
      console.log(req.session.user);
      req.session.destroy(function(err) {
        if (err) {
          console.log(err);
        }
        res.redirect('/');
      });
    },
    checkSess: function(req, res) {
      if (req.session.user) {
        res.json(req.session.user)
      } else {
        res.send(null);
      }
    }
  }
})();
