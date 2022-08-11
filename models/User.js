const { Schema, model } = require("mongoose");

//& User model
//* username
// string, unique, required, trimmed
//* email
// string, unique, required, must match a valid email address (look into Mongoose matching validation)
//* thoughts
// array of _id values referencing the Thought model
// there is an example of this in the mini-project in the Course model
//* friends
// array of _id values referencing the User model (self-reference)

const userSchema = new Schema(
  {
    username: {},
    email: {},
    thoughts: [],
    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
