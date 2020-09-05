const express = require("express");
const {
  createTrip,
  getAllTrips,
  cancelTrip,
  filterTripByOrigin,
  filterTripByDestination,
} = require("../controllers/tripController");
const verifyAuth = require("../middleware/verifyAuth");

const router = express.Router();

// trips Routes

router.post("/trips", verifyAuth, createTrip);
router.get("/trips", verifyAuth, getAllTrips);
router.patch("/trips/:tripId", verifyAuth, cancelTrip);
router.get("/trips/origin", verifyAuth, filterTripByOrigin);
router.get("/trips/destinatiovan", verifyAuth, filterTripByDestination);

module.exports = router;
