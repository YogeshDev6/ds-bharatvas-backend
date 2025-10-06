const express = require("express");
const router = express.Router();
const Event = require("../models/eventModel");

// GET all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET single event by ID
router.get("/events/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create a new event
router.post("/events", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update an event
router.put("/events/:id", async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.status(200).json({
      success: true,
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE event
router.delete("/events/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }
    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
      event: deletedEvent,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
