require("dotenv").config();

const express = require("express");

const app = express();

const mongoose = require("mongoose");

const logs = require("./models/logs.js");

const methodOverride = require("method-override");

const mongoURI = process.env.MONGO_URI;
console.log(mongoURI);

//connect with mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongoDB");
});

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Middelware
app.use((req, res, next) => {
  console.log("I run for all routes!");
  next();
});
//This allows the body of the post request
app.use(express.urlencoded({ extended: false }));

//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride("_method"));

//root url
app.get("/", (req, res) => {
  res.send("<h1> Captain Mangoose Logs</h1>");
});

//This route handler renders an Index view,
//passing in the logs data for rendering. I
//index routes
app.get("/logs", async function (req, res) {
  const foundLogs = await logs.find({});
  res.render("Index", {
    logs: foundLogs,
  });
});

//put this above your Show route

app.get("/logs/new/", (req, res) => {
  res.render("New");
});

//create = POST
app.post("/logs", async (req, res) => {
  console.log(req.body);
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  const createdLog = await logs.create(req.body);
  console.log("This is the captians logs", createdLog);
  res.redirect("/logs");
});

//show
//This route handler renders a Show view for a specific Pokémon at the given index.
app.get("/logs/:id", async (req, res) => {
  const oneLog = await logs.findById(req.params.id);
  res.render("Show", {
    //second param must be an object
    logs: oneLog,
  });
});

//Edit
app.get('/logs/:id/edit', async(req, res)=>{
    const foundLogs = await logs.findById(req.params.id)
    res.render('Edit', {
      logs: foundLogs
    })
  })

app.listen(5008, () => {
  console.log("listening");
});
