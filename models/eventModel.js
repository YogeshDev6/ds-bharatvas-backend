const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  customUrl: {
    type: String,
    unique: true,
    sparse: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  timezone: {
    type: String,
    default: "IST",
  },
  category: {
    type: String,
    enum: [
      "Shopping & Sells",
      "Workshop",
      "Health & Social",
      "Networking",
      "Sport & Adventure",
      "Foods & Festival",
    ],
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  mainPhoto: {
    type: String, 
  },
  organizerName: {
    type: String,
    required: true,
  },
  viewPrivacy: {
    type: String,
    enum: ["Everyone", "Registered Members", "Private"],
    default: "Everyone",
  },
  privacySettings: {
    commentPrivacy: {
      type: String,
      enum: ["All Registered Members", "Only Invited Guests", "Just me"],
      default: "All Registered Members",
    },
    photoUploadPrivacy: {
      type: String,
      enum: ["All Registered Members", "Only Event Organizers"],
      default: "All Registered Members",
    },
    videoUploadPrivacy: {
      type: String,
      enum: ["All Registered Members", "Only Event Organizers"],
      default: "All Registered Members",
    },
    topicPostPrivacy: {
      type: String,
      enum: ["All Registered Members", "Only Event Organizers"],
      default: "All Registered Members",
    },
  },
  rsvpSettings: {
    searchable: { type: Boolean, default: true },
    invitedOnlyRSVP: { type: Boolean, default: false },
    guestsCanInvite: { type: Boolean, default: true },
  },
  status: {
    type: String,
    enum: ["Publish", "Draft"],
    default: "Draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Event", eventSchema);
