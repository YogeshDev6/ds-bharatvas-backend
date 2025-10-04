const express = require("express");
const router = express.Router();
const Applicant = require("../models/applicantModel");



// GET applicant count
router.get('/applicants/count', async (req, res) => {
    try {
      const count = await Applicant.countDocuments();
      res.json({ count });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  });
  

// GET all applicants
router.get("/applicants", async (req, res) => {
  try {
    const applicants = await Applicant.find().populate('jobId', 'title company');
    res.status(200).json(applicants);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}); 

// GET single applicant by _id 
router.get("/applicants/:id", async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.params.id).populate('jobId', 'title company');
    if (!applicant) {
      return res.status(404).json({ success: false, message: "Applicant not found" });
    }
    res.status(200).json(applicant);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST a new applicant (apply for a job)
router.post("/applicants", async (req, res) => {
  try {
    const newApplicant = new Applicant(req.body);
    await newApplicant.save();
    res.status(200).json({
      success: true,
      message: "Application submitted successfully",
      applicant: newApplicant,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update applicant
router.put("/applicants/:id", async (req, res) => {
  try {
    const updatedApplicant = await Applicant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedApplicant) {
      return res.status(404).json({ success: false, message: "Applicant not found" });
    }
    res.status(200).json({
      success: true,
      message: "Applicant updated successfully",
      applicant: updatedApplicant,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE applicant
router.delete("/applicants/:id", async (req, res) => {
  try {
    const deletedApplicant = await Applicant.findByIdAndDelete(req.params.id);
    if (!deletedApplicant) {
      return res.status(404).json({ success: false, message: "Applicant not found" });
    }
    res.status(200).json({
      success: true,
      message: "Applicant deleted successfully",
      applicant: deletedApplicant,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
