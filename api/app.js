const express = require("express");
const cors = require("cors");

// routes
const { hotelRouter } = require("./routes/hotels.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/hotels", hotelRouter);

app.listen(4000, () => {
  console.log("Express app running");
});
