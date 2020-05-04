const User = require("../models/user");
const Avatar = require("../models/avatar");
const multer = require("multer");

// Get all assignments
function getUsers(req, res) {
  console.log("getting all users");
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }

    res.send(users);
  });
}

// Get an assignment by ID
function getUser(req, res) {
  const userId = req.params.id;
  console.log(`getting user id = ${userId}.`);
  User.findOne({ _id: userId }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}

function getUsersByLastName(req, res) {
  const lastName = req.params.id;
  console.log(`getting users with last name = ${lastName}.`);
  User.find({ lastname: lastName }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
}

function uploadUserPhoto(req, res) {
  try {
    console.log(`adding a new user photo userid = ${req.params.id}`);
    let avatar = new Avatar();
    avatar.userId = req.params.id;
    avatar.image = req.file.path;
    avatar.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: `${avatar.id} saved!` });
    });
    res.send({ id: avatar.id });
  } catch (err) {
    res.sendStatus(400);
  }
}

// Post an Assignment
function postUser(req, res) {
  console.log(`adding a new user ${req.body.lastname}`);
  let user = new User()
  user.firstname = req.body.firstname
  user.lastname = req.body.lastname
  user.email = req.body.email
  user.birthdate = req.body.birthdate
  user.id = req.body.id
  user.address = req.body.address
  user.state = req.body.state
  user.city = req.body.city
  user.zip = req.body.zip

  user.save(err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${user.email} saved!` });
  });
}

// Update an assignment
function updateUser(req, res) {
  User.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `updated` });
    // console.log('updated ', assignment)
  });
}

// Delete an assignment
function deleteUser(req, res) {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: `${user.email} deleted` });
  });
}

// Get the next Assignment Id
function getNextUserId(req, res) {
  User.find().sort("-id").exec((err, users) => {
    // handle no assignments case
    if (users.length === 0) {
      res.json(1);
    } else {
      var max = users[0].id;
      res.json(max + 1);
    }
  });
}

module.exports = {
  getUsers,
  postUser,
  getUser,
  updateUser,
  deleteUser,
  getNextUserId,
  getUsersByLastName
};
