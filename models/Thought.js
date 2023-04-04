const { Schema, model } = require("mongoose");
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
thoughtSchema
  .virtual("formatDate")
  // Getter
  .get(function () {
    let time =
      this.createdAt.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }) +
      "" +
      this.createdAt.toLocaleTimeString("en-US");

    return time;
  });

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
