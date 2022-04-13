// import data
const dataHotel = require("../../recursos/data/data.json");

// utils
const { filterObj } = require("../utils/filterObj");

exports.getAllHotels = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { dataHotel },
  });
};

exports.getHotelById = (req, res) => {
  const { id } = req.params;

  const hotel = dataHotel.find((hotel) => hotel.is === +id);

  if (!hotel) {
    res.status(404).json({
      status: "error",
      message: "not hotel found with the given ID",
    });
    return;
  }

  res.status(200).json({
    status: "success",
    data: { hotel },
  });
};

exports.createHotel = (req, res) => {
  const { name, stars, price, image, amenities } = req.body;

  const newHotel = {
    id: Math.floor(Math.random() * 1000),
    name,
    stars,
    price,
    image,
    amenities,
  };

  dataHotel.push(newHotel);

  res.status(201).json({
    status: "success",
    data: { newHotel },
  });
};

exports.updateHotel = (req, res) => {
  const { id } = req.params;

  const data = filterObj(
    req.body,
    "name",
    "stars",
    "price",
    "image",
    "amenities"
  );

  const hotelIndex = dataHotel.findIndex((hotel) => hotel.id === +id);

  if (hotelIndex === -1) {
    res.status(404).json({
      status: "error",
      message: "cant update hotel, invalid ID",
    });
    return;
  }

  let updateHotel = dataHotel[hotelIndex];

  updateHotel = { ...updateHotel, ...data };

  dataHotel[hotelIndex] = updateHotel;

  res.status(204).json({ status: "success" });
};

exports.deleteHotel = (req, res) => {
  const { id } = req.params;

  const hotelIndex = dataHotel.findIndex((hotel) => hotel.id === +id);

  if (hotelIndex === -1) {
    res.status(404).json({
      status: "error",
      message: "cant delete post, invalid ID",
    });
    return;
  }

  dataHotel.splice(hotelIndex, 1);

  res.status(204).json({ status: "succes" });
};
