const express = require('express');
const lowdb = require("lowdb");
const app = express();  
const port = 3000;
const bodyParser = require('body-parser');

var db = lowdb("./data/data.json");

app.use(express.static('public'));
app.use('/libs', express.static('node_modules'));
app.use('/static', express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Remove later and add the normal home page
// app.get('/', (request, response) => {  
//   response.sendFile('index.html', {"root": "./public"});
// });



//Product controller
var productController = require("./controllers/product-controller")(db);
app.get("/api/products", productController.get);
app.get("/api/products/latest", productController.getLatest);
app.post("/api/products", productController.post);

//User controller
var userController = require("./controllers/user-controller")(db);
app.put("/api/users", userController.put);
app.post("/api/users", userController.post);
app.get("/api/users", userController.get);


app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log('Server is running at http://localhost:' + port);
});