/// server.js


// BASE SETUP
// =============================================================================


var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');// connect to our database
var Part = require('./models/part');

// mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o
// configure app to use bodyParser()
// this will let us get the data from a POST
// get an instance of the express Router

mongoose.connect('mongodb://localhost/bears-project');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.post('/demo', function (req, res) {
  res.json({
    greeting: 'hello world',
    given: req.body
  });
});

router.route('/parts')


    .post(function(req, res) {

        var part = new Part();
        part.name = req.body.name;
        part.key = req.body.key;
        part.parent_key = req.body.parent_key;
        part.tally = req.body.tally;
        part.tier = req.body.tier;
        part.time = req.body.time;
        part.list = req.body.list;
        part.materials = req.body.materials;


        part.save(function(err) {
            if (err)
                res.send(err);

            res.json(part);
        });

    })


    .get(function(req, res) {
        Part.find(function(err, parts) {
            if (err)
                res.send(err);

            res.json(parts);
        });
    });

    router.route('/parts/:part_id')


    .get(function(req, res) {
        Part.findById(req.params.part_id, function(err, part) {
            if (err)
                res.send(err);
            res.json(part);
        });
    })


    .put(function(req, res) {


        Part.findById(req.params.part_id, function(err, part) {

            if (err)
                res.send(err);

                part.name = req.body.name;
                part.key = req.body.key;
                part.parent_key = req.body.parent_key;
                part.tally = req.body.tally;
                part.tier = req.body.tier;
                part.time = req.body.time;
                part.list = req.body.list;
                part.materials = req.body.materials;


            part.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Part updated!' });
            });

        });
    })


     .delete(function(req, res) {
      Part.remove({
          _id: req.params.part_id
      }, function(err, part) {
          if (err)
              res.send(err);

          res.json({ message: 'Successfully deleted' });
      });
  });


app.use('/api', router);

app.get('/', function (req, res) {
  res.render('index');
});


app.listen(port);
console.log('Magic happens on port ' + port);
