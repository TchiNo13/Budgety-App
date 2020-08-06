const express   = require("express"),
      app       = express(),
      mongoose  = require("mongoose");

//=====================================================================
// PACKAGES REQUESTS
//=====================================================================

mongoose.connect("mongodb://localhost:27017/Budjety_V_2", { useUnifiedTopology: true, useNewUrlParser: true });
// SET VIEWS
app.set('views', './views');
app.set("view engine", "ejs");

// STATIC FILES 
app.use(express.static('public'));
app.use('/css', express.static(__dirname + "/public/css"));
app.use('/js', express.static(__dirname + "/public/js"));
app.use('/img', express.static(__dirname + "/public/img"));

//=====================================================================
// ROUTES
//=====================================================================

app.get("/", (req, res)=>{
    res.render("landing");
});

app.get("/home", (req, res)=>{
    res.render("home");
});
app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/login", (req, res)=>{
    res.render("login");
});
app.get("/register", (req, res)=>{
    res.render("signin");
});
app.get("/forgot", (req, res)=>{
    res.render("forgot");
});

//=====================================================================
// ERROR + SERVER ROUTES
//=====================================================================

// ----------- Message Error --------------------
app.get("*", (req, res)=>{
    res.send("SOMETHING WENT WRONG !! TRY AGAIN.");
});

// ----------- Server Run --------------------
app.listen(3000, process.env.IP, (req, res)=>{
    console.log("The Budjety server has started !!");
});