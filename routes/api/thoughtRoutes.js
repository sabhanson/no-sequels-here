const { Thought, User } = require("../../models");

const router = require("express").Router();

//* api/thoughts endpoint
// GET to get all Thoughts
router.get("/", (req, res) => {});

//* api/thoughts/:thoughtId endpoint
// GET to get a single thought by its _id
router.get("/:thoughtId", (req, res) => {});

//* api/thoughts endpoint
// POST to create a new thought (don't forgot to push the created thought's _id to the associated user's thoughts array field)
router.post("/", (req, res) => {});

//* api/thoughts/:thoughtId endpoint
// PUT to update a thought by its _id
router.put("/:thoughtId", (req, res) => {});

//* api/thoughts/:thoughtId endpoint
// DELETE to remove a thought by its _id
router.delete("/:thoughtId", (req, res) => {});

//* api/thoughts/thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
router.post("/:thoughtId/reactions", (req, res) => {});

//* api/thoughts/:thoughtId/reactions/:reactionId
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete("/:thoughtId/reactions/:reactionId", (req, res) => {});

module.exports = router;
