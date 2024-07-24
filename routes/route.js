const express = require('express');
const router = express.Router();
const Model = require('../models/movie');

//Post Method
router.post('/post', async (req, res) => {
  const data = new Model({
    title: req.body.title,
    year: req.body.year,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (e) {
    res.status(400).json(e.message);
  }
});

//Get all Method
router.get('/', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(400).res.json(e.message);
  }
});

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
  try {
    // const id = req.params.id
    // const updateData = req.body
    const data = await Model.findByIdAndUpdate(req.params.id, req.body);
    res.json(data);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
    const data = await Model.findByIdAndDelete(req.params.id);
    res.json(`${data} has been deleted`);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
