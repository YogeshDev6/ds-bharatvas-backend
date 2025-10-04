// routes/carRoutes.js
const express = require("express");
const router = express.Router();
const Car = require("../models/carModel");

// GET all cars
router.get("/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET single car by ID
router.get("/cars/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST create a new car
router.post("/cars", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json({
      success: true,
      message: "Car created successfully",
      car: newCar,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update a car
router.put("/cars/:id", async (req, res) => {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCar) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      car: updatedCar,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE car
router.delete("/cars/:id", async (req, res) => {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    if (!deletedCar) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }
    res.status(200).json({
      success: true,
      message: "Car deleted successfully",
      car: deletedCar,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
