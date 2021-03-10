const express = require("express");
const path = require("path");
const morgan = require("morgan");
const session = require("express-session");
const dbConnection = require("./database");
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");
const user = require("./routes/user");
const MongoStore = require("connect-mongo")(session);
const passport = require("./passport");

const Employees = require("./routes/employees");


// Define middleware here
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  session({
    secret: "green-india", //pick a random string to make the hash that is generated secure
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false,
  })
);

// From official doc - https://github.com/jaredhanson/passport#middleware
app.use(passport.initialize());

// Then start the passport session. The below code calls serializeUser and deserializeUser
app.use(passport.session());

app.use("/user", user);

// Use apiRoutes
// app.use("/api", apiRoutes);

app.use("/", Employees);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
