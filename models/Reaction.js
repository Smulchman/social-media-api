const { Schema, model, Types } = require("mongoose");

// Schema to create Post model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `formatted date` that shows the user the date in a legible format
reactionSchema
  .virtual("formatDate")
  // Getter
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

module.exports = reactionSchema;
