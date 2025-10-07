const express = require('express');
const router = express.Router();
const Job = require('../models/jobModel');


// GET job count
router.get('/jobs/count', async (req, res) => {
    try {
      const count = await Job.countDocuments();
      res.json({ count });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });
  

// GET all jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET a single job by MongoDB _id
router.get('/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST a new job
router.post('/jobs', async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(200).json({
      success: true,
      message: 'Job created successfully',
      job: newJob,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update a job by _id
router.put('/jobs/:id', async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedJob) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Update successful',
      job: updatedJob,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE a job by _id
router.delete('/jobs/:id', async (req, res) => {
  try {
    const deletedJob = await Job.findByIdAndDelete(req.params.id);

    if (!deletedJob) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Job deleted successfully',
      job: deletedJob,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
