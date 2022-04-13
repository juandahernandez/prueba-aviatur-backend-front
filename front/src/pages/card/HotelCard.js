import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotelListThunk } from "../../redux/actions";
import CardItem from "./CardItem";
import "./HotelCard.styles.css";

const HotelCart = ({ searchName, starSelected }) => {
  const dispatch = useDispatch();

  const hotelList = useSelector((state) => state.hotelList);

  useEffect(() => {
    dispatch(getHotelListThunk());
  }, [dispatch]);

  const filterName = () => {
    if (searchName.length === 0) {
      return hotelList?.data?.dataHotel;
    }
    return hotelList?.data?.dataHotel.filter((hotel) =>
      hotel.name.includes(searchName)
    );
  };

  return (
    <div className="card-containerr">
      {filterName()?.map((hotel) =>
        hotel.stars === starSelected || starSelected === 6 ? (
          <CardItem key={hotel.id} hotel={hotel} />
        ) : null
      )}
    </div>
  );
};

export default HotelCart;
