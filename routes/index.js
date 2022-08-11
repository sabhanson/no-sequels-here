//& BOILERPLATE ROUTER SETUP
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  return res.send(`Bad route.`);
});

module.exports = router;
