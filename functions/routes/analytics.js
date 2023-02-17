var express = require('express');
var router = express.Router();
const firebase = require('../firebase/firebase');

router.post('/:id', async function(req, res, next) {
  firebase.addClick(req.params.id);
  res.send({
    "message": "click added successfully",
  });
});

router.get('/', async function(req, res, next) {
  const json = await firebase.getClicks();
  res.send(json);
});

module.exports = router;
