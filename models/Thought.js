const { Schema, model, Types } = require("mongoose");

//& Thought model
//* thoughtText
// string, required, must be between 1 and 280 characters
//* createdAt
// date, set default to current timestamp, use a getter method to format the timestamp on query
//* username (the user who created the thought)
// string, required
//* reactions (these are like replies)
// array of nested documents created with the reactionSchema

const thoughtSchema = new Schema(
  {
    thoughtText: {},
    createdAt: {},
    username: {},
    reactions: [],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

//& Schema Settings (Thought)
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

//& Reaction (Schema only)
//* reactionId
// use mongoose's objectId data type
//* reactionBody
// string, required, 280 character maximum
//* username
// string, required
//* createdAt
// Date, set defualt to the current timestamp, use a getter method to format the timestamp on query

const reactionSchema = new Schema(
  {
    reactionId: {},
    reactionBody: {},
    username: {},
    createdAt: {},
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

//& Schema Settings (Reaction)
// this will not be a model, but reather will be used as the reaction field's subdocument schema in the Thought model

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
