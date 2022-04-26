const express = require("express");
const moviesModel = require("../models/moviesModel");
const router = express.Router();



router.get("/getallmovies", async (req, res) => {
  try {
    const movies = await moviesModel.find();
    res.send(movies);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/addmovie", async (req, res) => {
  try {
    const newMovie = new moviesModel(req.body);
    await newMovie.save();
    res.status(201).send("Movie added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/editmovie/:id", async (req, res) => {
  
    const {id} = req.params;
  try {
        await moviesModel.findByIdAndUpdate(id, req.body);
    res.status(201).send("movie edited successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/deletemovie/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        await moviesModel.findByIdAndDelete(id)
        res.status(201).send("movie deleted successfully");
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;
