var express = require("express");
var router = express.Router();
var sequelize = require("../db");
var Story = sequelize.import("../models/story");
var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");



/*************************************
* POST SINGLE ITEM FOR INDIVIDUAL USER
*************************************/
router.post('/post', function (req, res) {
  var owner = req.user.id;
  var comments = req.body.story.comments;
  // this above part is from the body, what the user fills in
  Story
    .create({
      comments: comments,
      owner: owner
      // this section is on the table
    })
    .then(
      function createSuccess(dataPosted) {
        res.json({
          data: dataPosted
        });
      },
      function createError(err) {
        res.send(500, err.message);
      }
    );
});


/*************************************
* GET ALL ITEMS FOR INDIVIDUAL USER
*************************************/
router.get('/getall', function (req, res) {

  Story
    .findAll({
      where: {}
    })
    .then(
      function findAllSuccess(data) {
        res.json(data);
      },
      function findAllError(err) {
        res.send(500, err.message);
      }
    );
});




/******************
* UPDATE ITEM FOR INDIVIDUAL USER
******************/
router.put('/update/:id', function (req, res) {
  // var data = req.params.id; //3
  var id = req.params.id
  var comments = req.body.story.comments; //4
  Story
    .update({ //5
      comments: comments //6
    },
      { where: { id: id } } //7
    ).then(
      function updateSuccess(commentUpdated) { //8
        res.json({
          comments: commentUpdated
        });
      },
      function updateError(err) { //9
        res.send(500, err.message);
      }
    )
});



/******************
* DELETE ITEM FOR INDIVIDUAL USER
******************/
router.delete('/delete/:id', function (req, res) {
  var id = req.params.id
  var comments = req.body.story.comments;
  Story
    .destroy({ //5
      where: { id: id  } //6
    }).then(
      function deleteLogSuccess(data) { //7
        res.send("entry has been removed");
      },
      function deleteLogError(err) { //8
        res.send(500, err.message);
      }
    );
});







module.exports = router;

