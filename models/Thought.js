const { Schema, model } = require("mongoose");
const Reaction = require('./Reaction');

// Schema to create thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    // importing reactions directly since they only exist in the context of thoughts and do not need their own dedicated database.
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `formatted date` that shows the user the date in a legible format
thoughtSchema
  .virtual("formatDate")
  .get(function () {
    let time =
      this.createdAt.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }) +
      "  " +
      this.createdAt.toLocaleTimeString("en-US");

    return time;
  });

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
