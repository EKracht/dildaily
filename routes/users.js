"use strict";

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post("/", function(req, res){
  let user = new User(req.body);
	console.log("req.body from user router post", req.body)
  user.save((err, savedUser) => {
    console.log('savedUser:', savedUser);
    res.status(err ? 400 : 200).send(err || savedUser);
  });
})

router.get("/", function(req, res){
  console.log("req.body from user router get", req)
})

router.get("/:id", function(req, res){
  console.log('id in get:', req.body.params);
	// console.log("req.body from user router get", req)
})

module.exports = router;