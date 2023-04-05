const { Thought, User } = require("../models");

// exporting our functions to the router
module.exports = {
  // get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // get one user by id
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      // .then(() => res.json({ message: "User updated!" }))
      .catch((err) => res.status(500).json(err));
  },
  // delete a user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() =>
        res.json({ message: "User and associated thoughts deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },
  // adding the id of a friend to the array of 'friends' for a given user
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      // addtoset lets us avoid adding any duplicates
      { $addToSet: { friends: req.params.friendId } }
    )
      // This error seems too simple but I'm sticking with it.
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "No user with that ID" });
        }
      })
      .then(() => res.json({ message: "Friend added!" }))
      .catch((err) => res.status(500).json(err));
  },
  // removes a friend's id from the array of friends
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } }
    )
      // I am certain i could do something with the code below to let the user know when they go to delete a friend not on their friends list but I'm not certain how. Ultimately the end result (the friend is not on their list) is the same, so it's not a big deal
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "No user with that ID" });
        }
      })
      .then(() => res.json({ message: "Friend removed!" }))
      .catch((err) => res.status(500).json(err));
  },
};
