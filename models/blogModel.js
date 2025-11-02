const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    enum: [
      "Technology",
      "Health",
      "Business",
      "Education",
      "Lifestyle",
      "Travel",
      "Food",
      "Sports",
      "Entertainment",
      "Other",
    ],
    default: "Other",
  },
  tags: {
    type: [String],
    default: [],
  },
  coverImage: {
    type: String, // URL for blog cover image
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
    default: "Draft",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  metaTitle: {
    type: String,
    trim: true,
  },
  metaDescription: {
    type: String,
    trim: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Auto-update updatedAt before save
blogSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = model("Blog", blogSchema);
