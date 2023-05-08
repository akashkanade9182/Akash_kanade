const express = require("express");

const Addsmodel = require("../Models/Adds.model")

const addsRoute = express.Router();

addsRoute.get('/search/:keyword', async (req, res) => {
  const keyword = req.params.keyword;
  try {
    const result = await Addsmodel.aggregate([

      {
        $match: {
          $or: [
            { name: { $regex: keyword, $options: 'i' } },
            { primaryText: { $regex: keyword, $options: 'i' } },
            { headline: { $regex: keyword, $options: 'i' } },
            { description: { $regex: keyword, $options: 'i' } },
          ]
        }
      }

    ])
    res.status(200).send(result)
  }
  catch {
    res.status(400).send("error in getting search result")
  }
});



addsRoute.get("/getall", async (req, res) => {
  try {
    let result = await Addsmodel.find();
    res.status(200).send(result)
  }
  catch {
    res.status(400).send("error in getting all ads")
  }
})


module.exports = addsRoute;