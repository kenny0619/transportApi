const express = require("express");
const {
  createBooking,
  getAllBookings,
  deleteBooking,
  updateBookingSeat,
} = require("../controllers/bookingController");
const verifyAuth = require("../middleware/verifyAuth");

const router = express.Router();

// bookings Routes

router.post("/bookings", verifyAuth, createBooking);
router.get("/bookings", verifyAuth, getAllBookings);
router.delete("/bookings/:bookingId", verifyAuth, deleteBooking);
router.put("/bookings/:bookingId", verifyAuth, updateBookingSeat);

module.exports = router;
