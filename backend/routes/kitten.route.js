const express = require('express');
const kittenRoute = express.Router();

const Kitten = require('../model/Kitten');

// add kitten
kittenRoute.route('/add-kitten').post((req, res, next) => {
  Kitten.create(req.body, (err, data) => {
    if (err) { return next(err); }
    else { res.json(data); };
  });
});

// get all kittens
kittenRoute.route('/').get((req, res) => {
  Kitten.find((err, data) => {
    if (err) { return next(err); }
    else { res.json(data); };
  });
});

// get selected kitten
kittenRoute.route('/get-kitten/:id').get((req, res) => {
  Kitten.findById(req.params.id, (err, data) => {
    if (err) { return next(err); }
    else { res.json(data); };
  });
});

// update selected kitten
kittenRoute.route('/update-kitten/:id').put((req, res, next) => {
  Kitten.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, data) => {
    if (err) { return next(err); }
    else { res.json(data); };
  });
});

// update selected kitten
kittenRoute.route('/delete-kitten/:id').delete((req, res, next) => {
  Kitten.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) { return next(err); }
    else { res.status(200).json({ msg: data }); };
  });
});

module.exports = kittenRoute;