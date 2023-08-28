require("dotenv").config();

const express = require("express");

const app = express();

const mongoose = require("mongoose");

const methodOverride = require('method-override');

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
app.use(methodOverride('_method'));


//root url
app.get("/", (req, res) => {
    res.send("<h1> Captain Mangoose Logs</h1>");

  });

  //This route handler renders an Index view, 
//passing in the pokemons data for rendering. I
app.get("/logs/", (req, res) => {
    res.render("Index", {
      log: logs,
    });
  });

//put this above your Show route
app.get("/logs/New", (req, res) => {
    res.render("New");
  });

  app.post("/logs", async(req, res) => {
    console.log(req.body);
    if (req.body.shipIsBroken === "on") {
      req.body.shipIsBroken = true;
    } else {
      req.body.shipIsBroken = false;
    }
   await New.create(req.body);
    console.log("This is the captians logs", logs);
    res.send("data recieved");
  });

  //show
//This route handler renders a Show view for a specific Pokémon at the given index.
app.get("/logs/:index", (req, res) => {
    res.render("Show", {
      //second param must be an object
      log: logs[req.params.index],
    });
  });


app.listen(5008, () => {
    console.log("listening");
  });
  