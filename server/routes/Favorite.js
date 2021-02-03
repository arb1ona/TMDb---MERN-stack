const express = require("express");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

const { auth } = require("../middleware/auth");

//=================================
//             Favorite
//=================================

router.post("/favoriteNumber", auth, (req, res) => {
  // find Favorite information inside favorite Collection by Movie ID
  // we get it from the models
  Favorite.find({ movieId: req.body.movieId }).exec((err, favorite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, FavoriteNumber: favorite.length });
  });
});

module.exports = router;
