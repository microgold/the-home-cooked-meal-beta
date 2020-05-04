let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let user = require("./routes/Users");
let multer = require("multer");
let fs = require("fs");
const UPLOAD_PATH = "uploads";

const upload = multer({ dest: `${UPLOAD_PATH}/` }); // multer configuration

let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// const uri = 'mongodb+srv://angular:oreilly00@angularcluster-0xlae.mongodb.net/HomeCookedMeal?retryWrites=true';
const uri = 'mongodb://127.0.0.1:27017/local'
  // "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";

const options = {
  useNewUrlParser: true,
};

mongoose.set("useFindAndModify", false);

mongoose.connect(uri, options).then(
  () => {},
  err => {
    console.log("connection error: ", err);
  }
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

const prefix = "/api";

// User API Routes
app.route(prefix + "/users/lastname/:id").get(user.getUsersByLastName);

app.route(prefix + "/users").get(user.getUsers);

app.route(prefix + "/user/:id").get(user.getUser).delete(user.deleteUser);

app.post(prefix + "/user/:id/upload", upload.single("photo"), (req, res) => {
  var img = fs.readFileSync(req.file.path);
  var encode_image = img.toString("base64");
  // Define a JSONobject for the image attributes for saving to database

  var avatar = new Avatar();

  avatar.contentType = req.file.mimetype;
  avatar.image = new Buffer(encode_image, "base64");
  avatar.userId = req.params.userId;

  avatar.save((err, result) => {
    console.log(result);

    if (err) return console.log(err);

    console.log("saved to database");
    res.redirect("/");
  });
});

app.route(prefix + "/user").post(user.postUser).put(user.updateUser);

app.route(prefix + "/nextUserId").get(user.getNextUserId);

// START THE SERVER

module.exports = app;

var server = app.listen(5000, function() {
  console.log("Node server is running on 5000..");
});
