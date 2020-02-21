require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller')
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller')
var story = require('./controllers/storycontroller')

var sequelize = require('./db');
var bodyParser = require('body-parser');


// app.use("/api/test/", function(req,res){
//     res.send("this data is from the api/test endpoint")
// });

sequelize.sync()  // tip: {force: true} for resetting tables
app.use(bodyParser.json())
app.use(require('./middleware/headers'));

/******************
* EXPOSED ROUTES
*******************/
app.use('/test', test)
app.use('/api/user', user)
app.use('/home', story)



/******************
 * PROTECTED ROUTES
 *******************/


app.use(require('./middleware/validate-session')); 
app.use('/authtest', authTest);

app.listen(4001, function(){
    console.log('App is listening on 4001.')
});