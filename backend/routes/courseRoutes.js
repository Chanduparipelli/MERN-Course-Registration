const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.post('/', async (req, res) => {
  try {
    console.log('Incoming POST data:', req.body); 
    const { code, name, credits } = req.body;
    if (!code || !name || !credits) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const course = new Course({ code, name, credits });
    await course.save();

    res.status(201).json(course);
  } catch (err) {
    console.error('POST /api/courses Error:', err); 
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted Successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
