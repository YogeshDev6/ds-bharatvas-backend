const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  manufacturingYear: {
    type: String,
    required: true,
  },
  registrationYear: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"],
    required: true,
  },
  transmission: {
    type: String,
    enum: ["Manual", "Automatic"],
    required: true,
  },
  condition: {
    type: String,
    enum: ["New", "Used"],
    required: true,
  },
  features: {
    type: [String],
    default: [],
  },
  images: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  certified: {
    type: Boolean,
    default: false,
  },
  numberOfOwners: {
    type: Number,
    default: 1,
  },
  variant: {
    type: String,
  },
  rto: {
    type: String,
  },
  insurance: {
    validity: {
      type: Date,
    },
    type: {
      type: String,
      enum: ["Comprehensive", "Third-Party", "Zero Depreciation"],
    },
  },
  benefits: {
    priceDiscount: {
      type: Number,
    },
    rcTransfer: {
      type: Number,
    },
    totalSavings: {
      type: Number,
    },
    avgMarketPrice: {
      type: Number,
    },
    fixedPriceLabel: {
      type: String,
    },
  },
  actions: {
    bookNow: {
      type: Boolean,
      default: false,
    },
    bookTestDrive: {
      type: Boolean,
      default: false,
    },
    download: {
      type: Boolean,
      default: false,
    },
    view360: {
      type: Boolean,
      default: false,
    },
  },
  specifications: {
    groundClearanceMm: {
      type: Number,
    },
    bootSpaceLiters: {
      type: Number,
    },
    seatingCapacity: {
      type: Number,
    },
    fuelTankCapacity: {
      type: Number,
    },
    maxPowerBhp: {
      type: Number,
    },
    color: {
      type: String,
      required: true,
    },
  },
  loanCalculator: {
    emiPerMonth: { type: Number },
    principalAmount: { type: Number },
    totalInterest: { type: Number },
    totalPayable: { type: Number },
    minLoanAmount: { type: Number },
    interestMin: { type: Number },
    interestMax: { type: Number },
    durationOptions: { type: [Number], default: [] },
    disclaimer: { type: String },
  },
  
  bodyType: {
    type: String,
    enum: [
      "Hatchback",
      "Sedan",
      "SUV",
      "MUV",
      "Luxury",
      "Electric",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
    viewMe: {
      type: String, 
      required: false,
    },
});

module.exports = model("Car", carSchema);
