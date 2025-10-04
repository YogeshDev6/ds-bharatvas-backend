const { Schema, model, Types } = require("mongoose");

const applicantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /\S+@\S+\.\S+/,
  },
  phone: {
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
  jobTitle: {
    type: String,
    required: true,
  },
  jobId: {
    type: Types.ObjectId,
    ref: "Job",
    required: true,
  },
  resumeLink: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Reviewed", "Accepted", "Rejected"],
    default: "Pending",
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Applicant", applicantSchema);
