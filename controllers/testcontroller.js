var express = require('express')
var router = express.Router()
var sequelize = require('../db');
var TestModel = sequelize.import('../models/test');


router.post('/one', function (req, res) {
    res.send("Test 1 Went Thru")
});

router.post('/one', function (req, res) {
    res.send("Got a post request.")
});

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two";

    TestModel
        .create({

            testdata: testData
        }).then(dataFromDatabase => {
            res.send("Test two went through!")
        })
});



router.post('/three', function (req, res) {

    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
    res.send("Test three went through!")
    console.log("Test three went through!")
});

router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then( //1
            function message() { //2
                res.send("Test 4 went through!");
            }
        );
});

router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then( //1
            function message(data) {
                res.send(data); //2
            }
        );
});

router.post('/six', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function message(testdata) {
                res.json({ //1
                    testdata: testdata //2
                });
            }
        );
});

router.post('/seven', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
        .create({
            testdata: testData
        })
        .then(
            function createSuccess(testdata) {
                res.json({
                    testdata: testdata
                });
            },
            function createError(err) { //1
                res.send(500, err.message);
            }
        );
});



router.get('/helloclient', function (req, res) {
    res.send('This is a message from the server to the client')
})







router.get('/one', function (req, res) {
    TestModel
        .findAll({ //1
            attributes: ['id', 'testdata']
        })
        .then(
            function findAllSuccess(data) {
                console.log("Controller data:", data);
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});








module.exports = router;