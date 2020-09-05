const express = require("express");
const { addBusDetails, getAllBuses } = require("../controllers/busController");
const verifyAuth = require("../middleware/verifyAuth");

const router = express.Router();

router.post("/buses", verifyAuth, addBusDetails);
router.get("/buses", verifyAuth, getAllBuses);

module.exports = router;
