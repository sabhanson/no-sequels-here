const { User } = require("../../models");
const router = require("express").Router();

//* api/users endpoint
// GET all Users
router.get("/", (req, res) => {});

//* api/users/:userId endpoint
// GET a single user by its _id and populated thought and friend data
router.get("/:userId", (req, res) => {});

//* api/users endpoint
// POST a new User
router.get("/", (req, res) => {});

//* api/users/:userId endpoint
// PUT to update a user by its id
router.put("/:userId", (req, res) => {});

//* api/users/:userId endpoint
// DELETE to remove a user by _id
router.delete("/:userId", (req, res) => {});

//* api/users/:userId/friends/:friendId endpoint
// POST to add a new friend to a user's friend list
router.post("/:userId/friends/:friendId", (req, res) => {});

//* api/users/:userId/friends/:friendId endpoint
// DELETE to remove a friend from a user's friend list
router.delete("/:userId/friends/:friendId", (req, res) => {});

module.exports = router;
