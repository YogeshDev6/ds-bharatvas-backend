const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Car",
        "Mobile",
        "Real Estate",
        "Clothing",
        "Electronics",
        "Furniture",
        "Other",
      ],
      default: "Other",
    },
    subCategory: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      enum: ["New", "Used", "Refurbished"],
      default: "New",
    },
    brand: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    details: {
      type: Schema.Types.Mixed,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    seller: {
      name: { type: String },
      contactNumber: { type: String },
      email: { type: String },
    },
    tags: {
      type: [String],
      default: [],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    viewLink: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
