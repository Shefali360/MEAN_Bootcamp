const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport=require("passport");
const passportconfig = require('./users/passport.config').config;
const cors=require('cors');
const routes = require('./users/routes');

const app = express();
const port = 3030;
app.use(cors({
  origin:'*'
}
));


app.use(bodyParser.json());
app.use(passport.initialize());
passportconfig(passport);
app.use(routes);
mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: "true",
  useFindAndModify:false
});

mongoose.connection.on("error", err => {
  console.log("err", err)
});

mongoose.connection.on("connected", (err, res) => {
  console.log("Mongoose is connected")
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))