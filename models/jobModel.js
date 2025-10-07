// models/jobModel.js
const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  experience: {
    type: Number, // in years
    required: true,
  },
  jobType: {
    type: String,
    enum: ["Full-Time", "Part-Time", "Contract", "Internship", "Freelance"],
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  logo: {
    type: String,
  },
  shortdesc: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Job", jobSchema);
