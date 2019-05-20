const express = require('express');
const router = express.Router();
const { clientPromise } = require("../config/database")

const keygen = require("keygenerator");


/* POST users. */
router.post('/register', async function (req, res, next) {

  const data = req.body;
  const client = await clientPromise;
  const secretKey = keygen._();

  try {
    client.set(secretKey, JSON.stringify(data))
    res.status(201).json({
      secretKey: secretKey,
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({
      message: err.message
    });
  }
});

// GET
router.get('/info', async function (req, res, next) {
  const client = await clientPromise;
  const token = req.headers['token']
  console.log(token);
  client.get(token, function (error, result) {

    if (error !== null) {
      res.status(401).json({
        message: "Not authorized"
      });
      return;
    }
    res.json(JSON.parse(result))
  })
});


module.exports = router;
