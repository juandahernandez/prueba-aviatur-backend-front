const express = require("express");

const {
  getAllHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotels.controller");

const router = express.Router();

router.get("/", getAllHotels);

router.get("/:id", getHotelById);

router.post("/", createHotel);

router.patch("/:id", updateHotel);

router.delete("/:id", deleteHotel);

module.exports = { hotelRouter: router };
