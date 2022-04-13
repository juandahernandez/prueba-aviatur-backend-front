import React from "react";
import StarQuantity from "../../components/card/StarQuantitys";
import "./CardItem.styles.css";
const pathFile = "./assets/images/hotels/";
const iconsPath = "./assets/icons/amenities/";

const CardItem = ({ hotel }) => {
  return (
    <div className="container-general-card">
      <div className="card-container">
        <div className="img-card">
          {hotel.image ? (
            <img src={pathFile + hotel.image} alt={hotel.name} />
          ) : (
            <img
              src="https://p.kindpng.com/picc/s/72-723593_navaja-suiza-victorinox-cybertool-s-imagen-no-disponible.png"
              alt="img not disponible"
            />
          )}
        </div>
        <div className="stars">
          <h2>{hotel.name}</h2>
          <StarQuantity stars={hotel.stars} />
          <div className="amenities">
            {hotel.amenities.map((icon, index) => (
              <img
                key={index}
                src={iconsPath + icon + ".svg"}
                alt={icon}
                width="20px"
              />
            ))}
          </div>
        </div>
        <div className="price">
          <p>precio por noche por habitacion</p>
          <h2>ARS {hotel.price}</h2>
          <button>VER HOTEL</button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
